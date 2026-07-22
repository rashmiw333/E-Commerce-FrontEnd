import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-5">
      <Link
        to="/"
        className="navbar-brand fw-bold"
      >
        ElectroMart
      </Link>

      <input
        className="form-control w-50"
        placeholder="Search Products"
      />

      <div>

        <Link
          to="/wishlist"
          className="btn btn-outline-danger me-2"
        >
          Wishlist
        </Link>

        <Link
          to="/cart"
          className="btn btn-primary"
        >
          Cart
        </Link>

      </div>
    </nav>
  );
}
