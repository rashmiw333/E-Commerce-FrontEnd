import { Link, useNavigate } from "react-router-dom";
import useWishListContext from "../context/WishListContext";
import useCartContext from "../context/CartContext";
import useProductContext from "../context/ProductContext";

export default function Navbar() {
  const { wishListItems } = useWishListContext();
  const { cartItems } = useCartContext();
  const { search, setSearch } = useProductContext();

  const navigate = useNavigate();

  return (
   <nav className="navbar bg-light shadow-sm py-3">
  <div className="container">

    <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between w-100">

      {/* Logo */}
      <Link
        to="/"
        className="navbar-brand fw-bold fs-3 mb-3 mb-lg-0"
      >
        ElectroMart
      </Link>

      {/* Search */}
      <div className="flex-grow-1 mx-lg-4 mb-3 mb-lg-0">
        <input
          type="text"
          className="form-control"
          placeholder="Search Products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/products");
            }
          }}
        />
      </div>

      {/* Buttons */}
      <div className="d-flex gap-2 justify-content-center">
        <Link
          to="/wishlist"
          className="btn btn-outline-danger"
        >
          Wishlist ({wishListItems.length})
        </Link>

        <Link
          to="/cart"
          className="btn btn-primary"
        >
          Cart ({cartItems.length})
        </Link>

        <Link
          to="/profile"
          className="btn btn-outline-dark"
        >
          Profile
        </Link>
      </div>

    </div>

  </div>
</nav>
  );
}