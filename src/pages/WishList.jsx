import ProductCard from "../components/ProductCard";
import useWishListContext from "../context/WishListContext";


export default function WishList(){

    const {wishListItems} = useWishListContext();

    return(
        <div className="container mt-4">
            <h2 className="mb-4">My WishList</h2>

            {wishListItems.length == 0?(
                <><h5>Your Wishlist is Empty ❤️</h5>
                <p>Add products by clicking the heart icon.</p>
                </>
            ):(
            <div className="row">
            {wishListItems.map((product)=>(
                <ProductCard 
                key={product._id} product={product}/>
            ))}
            </div>
            )}
        </div>
    );

}