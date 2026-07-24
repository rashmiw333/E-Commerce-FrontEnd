import {Link,useParams} from "react-router-dom";
import useProductContext from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import useWishListContext from "../context/WishListContext";
import useCartContext from "../context/CartContext";


export default function ProductDetails(){

    const {productId} = useParams();
    const {products,productLoading} = useProductContext();
    const { wishListItems, toggleWishlist } = useWishListContext();
    const {addToCart} = useCartContext();

    if(productLoading){
        return <h3 className="text-center mt-5">Loading...</h3>
    }

    const product = products.find((product)=>product._id === productId);
    
    if(!product){
        return <h3 className="text-center mt-5">Product Not Found</h3>
    }

    const isInWishList = wishListItems.some((item) => item._id === product._id);

    return(
        <div className="container mt-5">
            <div className="row align-items-start mt-5">
                <div className="col-md-5">

                    <img src={product.image} alt={product.name} 
                    className="img-fluid rounded border w-100"
                    style={{height: "500px",
                           objectFit: "contain"
                    }}
                    />

                </div>
              
                <div className="col-md-7 ps-md-5">
                    <h2>{product.name}</h2>
                    <h5 className="text-success">${product.price}
                    </h5>
                    <p>⭐{product.rating}</p>
                    <p><strong>Brand:</strong>{product.brand}</p>
                    <p><strong>Category:</strong>{product.category}</p>
                    <p>{product.description}</p>
                    <button className="btn btn-primary me-2" onClick={()=>addToCart(product)}>Add To Cart</button>
                    <button className="btn btn-outline-danger" onClick={() => toggleWishlist(product)}>
                      {isInWishList ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
                    </button>
                    <br />
                    <br />
                    <Link to="/products" className="btn btn-secondary">Back To Products</Link>
                </div>  
            </div>
            <hr />
            <h3>Similar Products</h3>
            <div className="row">
                {products.filter(item =>item.category === product.category
                    && item._id !== product._id).slice(0,4).map(product=>(
                        <ProductCard key={product._id} product={product}/>
                    ))}
            </div>
        </div>
    );

}