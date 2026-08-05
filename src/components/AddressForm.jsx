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

  if (
    !type.trim() ||
    !street.trim() ||
    !city.trim() ||
    !state.trim() ||
    !pincode.trim()
  ) {
    alert("Please fill all fields.");
    return;
  }

  if (pincode.length !== 6) {
    alert("Pincode must be 6 digits.");
    return;
  }

  const address = {
    type: type.trim(),
    street: street.trim(),
    city: city.trim(),
    state: state.trim(),
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
        required
      />

      <input
        className="form-control mb-2"
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        required
      />

      <input
        className="form-control mb-2"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />

      <input
        className="form-control mb-2"
        placeholder="State"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
      />

      <input type="text" className="form-control mb-3"
        placeholder="Pincode"
        value={pincode} maxLength={6}
        onChange={(e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPincode(value)}}
        required
      />

      <button className="btn btn-success">
        {editAddress ? "Update Address" : "Add Address"}
      </button>
    </form>
  );
}