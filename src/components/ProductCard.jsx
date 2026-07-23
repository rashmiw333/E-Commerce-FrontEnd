import { Link } from "react-router-dom";
import useWishListContext from "../context/WishListContext";

export default function ProductCard({ product }) {

  const {wishListItems,toggleWishlist} = useWishListContext();
  
  const isInWishList = wishListItems.some(
    (item) => item._id == product._id
  );

  return (
    <div className="col-md-3 mb-4">

      <div className="card h-100 shadow-sm">
        <div className="text-end p-2">
          <span onClick={()=>toggleWishlist(product)}>
            {isInWishList ? "❤️" : "🤍"}
          </span>
        </div>
        
        <Link to={`/products/${product._id}`}>
          <img
            src={product.image}
            className="card-img-top"
            
            style={{height:"220px",objectFit: "contain" }}
            alt={product.name}/>
        </Link>

        <div className="card-body d-flex flex-column">
         <h6>{product.name}</h6>
         <small className="text-muted">{product.brand}</small>
        <div className="my-2">⭐{product.rating}</div>
          <h5>${product.price}</h5>
          <button className="btn btn-primary mt-auto">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
