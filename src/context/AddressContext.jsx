import { createContext, useContext, useState } from "react";

const AddressContext = createContext();

const useAddressContext =()=> useContext(AddressContext);
export default useAddressContext;


export function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState([]);

  function addAddress(address) {
    setAddresses([
      ...addresses,
      {
        ...address,
        id: Date.now(),
        isDefault: false,
      },
    ]);
  }

  function deleteAddress(id) {
    setAddresses(addresses.filter((address) => address.id !== id));
  }

  function updateAddress(updatedAddress) {
    setAddresses(
      addresses.map((address) =>
        address.id === updatedAddress.id ? updatedAddress : address
      )
    );
  }

  function setDefaultAddress(id) {
    setAddresses(
      addresses.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  }

  return (
    <AddressContext.Provider
      value={{
        addresses,
        addAddress,
        deleteAddress,
        updateAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}
