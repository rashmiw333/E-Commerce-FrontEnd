import { Link , useNavigate } from "react-router-dom";
import useWishListContext from "../context/WishListContext";
import useCartContext from "../context/CartContext";
import useProductContext from "../context/ProductContext";

export default function Navbar() {

  const {wishListItems} = useWishListContext();
  const {cartItems} = useCartContext();
  const { search, setSearch } = useProductContext();

  const navigate = useNavigate();
  
  return (
    <nav className="navbar navbar-light bg-light px-5">
      <Link
        to="/"
        className="navbar-brand fw-bold"
      >
        ElectroMart
      </Link>

      <Link to="/profile" className="btn btn-outline-dark me-2">
      Profile
      </Link>

    <input type="text"
      className="form-control w-50"
      placeholder="Search Products"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
       if (e.key === "Enter") {
       navigate("/products");
        }
      }}
     />

      <div>

        <Link
          to="/wishlist"
          className="btn btn-outline-danger me-2"
        >
          Wishlist ({wishListItems.length})
        </Link>

        <Link
          to="/cart"
          className="btn btn-primary"
        >
          Cart ({cartItems.length})
        </Link>

      </div>
    </nav>
  );
}
