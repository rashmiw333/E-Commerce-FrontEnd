import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

const useOrderContext =()=> useContext(OrderContext);
export default useOrderContext;

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders([...orders, order]);
  }

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
