import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  useCartContext from "../context/CartContext";
import useAddressContext from "../context/AddressContext";
import useOrderContext from "../context/OrderContext";
import useAlertContext from "../context/AlertContext";

export default function Checkout() {
  const { cartItems,clearCart } = useCartContext();
  const { addresses } = useAddressContext();
  const { fetchOrders } = useOrderContext();
  const { showAlert } = useAlertContext();

  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const navigate = useNavigate();

 async function handlePlaceOrder() {
    if (!selectedAddressId) {
      showAlert("Please select a delivery address.");
      return;
    }

    const selectedAddress = addresses.find(
      (address) => address.id === selectedAddressId
    );

    const order = {
      address: selectedAddress,
      items: cartItems.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
     })),
     totalAmount,
     orderDate: new Date().toLocaleDateString(),
    };

    console.log(order);

   try {
       const response = await fetch("https://e-commerce-rouge-chi-18.vercel.app/api/orders", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
        });

        if (!response.ok) {
        throw new Error("Failed to place order.");
        }

        showAlert("Order Placed Successfully.");

        await fetchOrders();

        clearCart();
       
       setOrderPlaced(true);

    } catch (error) {
       showAlert(error.message)
    }
  }

  if (orderPlaced) {
  return (
    <div className="container mt-5 text-center">

      <h2 className="text-success">
        🎉 Order Placed Successfully!
      </h2>

      <p className="mt-3">
        Thank you for shopping with ElectroMart.
      </p>

      <div className="mt-4">

        <button
          className="btn btn-primary me-3"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

        <button
          className="btn btn-outline-success"
          onClick={() => navigate("/orders")}
        >
          View Orders
        </button>

      </div>

    </div>
  );
}
 
  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      {/* Delivery Address */}
      <div className="card p-3 mt-4">
        <h4>Select Delivery Address</h4>

        <Link to="/profile" className="btn btn-outline-primary btn-sm">
         Add Address</Link>

        {addresses.length === 0 ? (
          <p>No address available.</p>
        ) : (
          addresses.map((address) => (
            <div key={address.id} className="border rounded p-3 mb-3">
              <label>
                <input
                  type="radio"
                  name="address"
                  value={address.id}
                  checked={selectedAddressId === address.id}
                  onChange={() => setSelectedAddressId(address.id)}
                />

                <strong className="ms-2">{address.type}</strong>

                <p className="mb-1">{address.street}</p>
                <p className="mb-1">
                  {address.city}, {address.state}
                </p>
                <p>{address.pincode}</p>
              </label>
            </div>
          ))
        )}
      </div>

      {/* Order Summary */}
      <div className="card p-3 mt-4">
        <h4>Order Summary</h4>

        {cartItems.map((item) => (
          <div
            key={item.product._id}
            className="d-flex justify-content-between mb-2"
          >
            <span>
              {item.product.name} × {item.quantity}
            </span>

            <span>${item.product.price * item.quantity}</span>
          </div>
        ))}

        <hr />

        <h5>Total: ${totalAmount}</h5>
        <button
          className="btn btn-success mt-3"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}