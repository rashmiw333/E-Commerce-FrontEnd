import { useState, useEffect } from "react";
import useAddressContext from "../context/AddressContext";

export default function AddressForm({ editAddress, clearEdit }) {
  const { addAddress, updateAddress } = useAddressContext();

  const [type, setType] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (editAddress) {
      setType(editAddress.type);
      setStreet(editAddress.street);
      setCity(editAddress.city);
      setState(editAddress.state);
      setPincode(editAddress.pincode);
    }
  }, [editAddress]);

  function handleSubmit(e) {
    e.preventDefault();

    const address = {
      type,
      street,
      city,
      state,
      pincode,
    };

    if (editAddress) {
      updateAddress({
        ...address,
        id: editAddress.id,
        isDefault: editAddress.isDefault,
      });

      clearEdit();
    } else {
      addAddress(address);
    }

    setType("");
    setStreet("");
    setCity("");
    setState("");
    setPincode("");
  }

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">

      <h4>{editAddress ? "Edit Address" : "Add Address"}</h4>

      <input
        className="form-control mb-2"
        placeholder="Address Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />

      <input
        className="form-control mb-3"
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      <button className="btn btn-success">
        {editAddress ? "Update Address" : "Add Address"}
      </button>
    </form>
  );
}