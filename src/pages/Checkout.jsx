import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  useCartContext from "../context/CartContext";
import useAddressContext from "../context/AddressContext";

export default function Checkout() {
  const { cartItems,clearCart } = useCartContext();
  const { addresses } = useAddressContext();

  const [selectedAddressId, setSelectedAddressId] = useState("");

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  
 async function handlePlaceOrder() {
    if (!selectedAddressId) {
      alert("Please select a delivery address.");
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
       const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
        });

        if (!response.ok) {
        throw new Error("Failed to place order.");
        }

        alert("Order Placed Successfully.");

        clearCart();
       
       navigate("/orders");
    } catch (error) {
       alert(error.message)
    }
  }
 
  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      {/* Delivery Address */}
      <div className="card p-3 mt-4">
        <h4>Select Delivery Address</h4>

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