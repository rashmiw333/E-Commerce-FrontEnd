import { useState } from "react";
import { Link } from "react-router-dom";
import useAddressContext from "../context/AddressContext";
import AddressCard from "../components/AddressCard";
import AddressForm from "../components/AddressForm";

export default function Profile() {
  const { addresses } = useAddressContext();

  const [editAddress, setEditAddress] = useState(null);

  const user = {
    name: "Rashmi Wankhade",
    email: "rashmi@gmail.com",
    phone: "9878888810",
  };

  return (
    <div className="container mt-4">

      <h2>User Profile</h2>

      <div className="card p-3 mb-4">
        <h5>{user.name}</h5>
        <p>Email : {user.email}</p>
        <p>Phone : {user.phone}</p>
      </div>

      <AddressForm
        editAddress={editAddress}
        clearEdit={() => setEditAddress(null)}
      />

      <h3>Saved Addresses</h3>

      {addresses.length === 0 ? (
        <p className="text-muted">No saved addresses added.</p>
        ) : (addresses.map((address) => (
        <AddressCard key={address.id} address={address}
         onEdit={setEditAddress}/>
       ))
    )}

      <Link
        to="/orders"
        className="btn btn-outline-dark mt-2 mb-3"
      >
        View Order History
      </Link>
    </div>
  );
}