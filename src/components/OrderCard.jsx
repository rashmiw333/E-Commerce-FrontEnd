
export default function OrderCard({order}){

 return(
  <div className="card mb-3">
    <div className="card-body">
        <h5>Order Date : {order.orderDate}</h5>
        <h6 className="mt-3">Delivery Address:</h6>
        <p className="mb-0">{order.address.type}</p>
        <p className="mb-0">{order.address.street}</p>
        <p className="mb-0">
          {order.address.city}, {order.address.state}
        </p>
        <p className="mb-2">{order.address.pincode}</p>
        <h6>Products</h6>
          <ul>{order.items.map(item=>
            <li key={item.product._id}>
               <strong>{item.product.name}</strong>
               <br />Quantity : {item.quantity}
               <br />Price : ${item.product.price}
            </li>
            )}
          </ul>
          <hr />
          <h5>Total : ${order.totalAmount}</h5>
    </div>
 </div>)}