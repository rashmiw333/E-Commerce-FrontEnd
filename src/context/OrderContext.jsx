import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

const useOrderContext = () => useContext(OrderContext);
export default useOrderContext;

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(orders,"orders");

  async function fetchOrders() {
    try {
      const response = await fetch("http://localhost:3000/api/orders");
      const data = await response.json();

      if (response.ok) {
        setOrders(data.data.orders);
      } else {
        setOrders([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setOrders([]);
      setLoading(false);
    } 
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        fetchOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}