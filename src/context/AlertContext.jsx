import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

const useAlertContext = () => useContext(AlertContext);
export default useAlertContext;

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState({
    show: false,
    message: "",
  });

  function showAlert(message) {
    setAlert({
      show: true,
      message,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: "",
      });
    }, 2000);
  }

  return (
    <AlertContext.Provider
      value={{
        alert,
        showAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}