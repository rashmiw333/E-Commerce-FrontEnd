
export default function OrderCard({order}){
 return(
  <div className="card mb-3">
    <div className="card-body">
        <h5>Order ID : {order.id}</h5>
        <p>Date :{order.orderDate}</p>
        <p>Total :${order.totalAmount}</p>
        <h6>Products</h6>
          <ul>{order.items.map(item=>
            <li key={item.product._id}>{item.product.name}×{item.quantity}</li>
          )}
          </ul>
    </div>
 </div>)}