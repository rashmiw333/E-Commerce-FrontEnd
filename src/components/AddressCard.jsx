import useAddressContext from "../context/AddressContext";

export default function AddressCard({ address, onEdit }) {
  const { deleteAddress, setDefaultAddress } = useAddressContext();

  return (
    <div className="card p-3 mb-3">
      <h5>{address.type}</h5>

      <p className="mb-1">{address.street}</p>
      <p className="mb-1">
        {address.city}, {address.state}
      </p>
      <p>{address.pincode}</p>

      {address.isDefault && (
        <span className="badge bg-success mb-2">Default</span>
      )}

      <div>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => onEdit(address)}
        >
          Edit
        </button>

        <button
          className="btn btn-danger btn-sm me-2"
          onClick={() => deleteAddress(address.id)}
        >
          Delete
        </button>

        {!address.isDefault && (
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setDefaultAddress(address.id)}
          >
            Set Default
          </button>
        )}
      </div>
    </div>
  );
}