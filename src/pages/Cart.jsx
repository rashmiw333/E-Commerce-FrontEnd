import useCartContext from "../context/CartContext";

export default function Cart(){

const {cartItems,removeFromCart,increaseQuantity,decreaseQuantity} = useCartContext();

 const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">My Cart</h2>
            {cartItems.length ==0 ?(
                <>
                <h5>Your Cart is Empty 🛒</h5>
                <p>Add Products by clicking Add To Cart button.</p>
                </>
            ):(
                <div className="row">
                    {/* left side */}
                  <div className="col-md-8">
                {cartItems.map((item)=>(
                   <div className="card-mb-3 shadow-sm" key={item.product._id}>
                    <div className="row g-0 align-items-center">
                        <div className="col-md-3 text-center">
                        <img src={item.product.image} alt={item.product.name}
                        className="img-fluid p-3"
                        style={{
                            height:"180px",
                            objectFit: "contain"
                        }}
                        />
                        </div>

                        <div className="col-md-9">
                            <div className="card-body mt-2">
                            <h5>{item.product.name}</h5>
                            <p className="mb-1">
                                <strong>Brand:</strong>{item.product.brand}
                            </p>

                            <p className="mb-1">
                            ⭐ {item.product.rating}
                            </p>

                            <h5 className="text-success">
                                ${item.product.price}
                            </h5>
                            
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <button className="btn btn-outline secondary"
                                onClick={()=>increaseQuantity(item.product)}>+</button>
                                <span>{item.quantity}</span>
                                <button className="btn btn-outline secondary"
                                onClick={()=>decreaseQuantity(item.product)}>-</button>
                            </div>

                            <button className="btn btn-danger mb-2"
                            onClick={()=>removeFromCart(item.product)}>Remove From Cart</button>
                          </div>
                        </div>
                       </div>
                      </div>
                   ))}
                </div>
                {/* Right Side - price details*/}
                <div className="col-md-4">
                    <div className="card shadow-sm p-3">
                        <h5>Price Details</h5>
                        <hr />
                        <p className="d-flex justify-content-between">
                            <span>Price ({cartItems.length} Items)</span>
                            <span>${totalPrice}</span>
                        </p>
                        <p className="d-flex justify-content-between">
                            <span>Delivery</span>
                            <span>Free</span>
                        </p>

                        <hr />

                        <h5 className="d-flex justify-content-between">
                            <span>Total</span>
                            <span>${totalPrice}</span>
                        </h5>
                        <button className="btn btn-warning w-100 mt-3">Place Order</button>
                    </div>
                </div>
             </div>
            )}
        </div>
    );
}