import useOrderContext from "../context/OrderContext";
import OrderCard from "../components/OrderCard";

export default function OrderHistory(){
  const {orders} = useOrderContext();

return(

<div className="container mt-4">
  <h2>Order History</h2>
 {orders.length===0?<h5>No Orders Yet</h5> :
 orders.map(order=><OrderCard key={order.id} order={order}/>)}
</div>)}