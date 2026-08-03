import {createContext,useContext,useState} from "react";
import useAlertContext from "./AlertContext";

const WishListContext = createContext();

const useWishListContext =()=> useContext(WishListContext);
export default useWishListContext;

export function WishListProvider({children}){

const[wishListItems,setWishListItems] = useState([]);
const { showAlert } = useAlertContext();

function toggleWishlist(product) {
  console.log(product,"toggleWishlist product:");
  const exists = wishListItems.find(
    (item) => item._id === product._id
  );

  if (exists) {
    setWishListItems(
      wishListItems.filter(
        (item) => item._id !== product._id
      )
    );
    showAlert("Product removed from Wishlist.");
  } else {
    setWishListItems([...wishListItems, product]);
    showAlert("Product added to Wishlist.");
  }
}

    return(
        <WishListContext.Provider value={{
            wishListItems,
            toggleWishlist
        }}>
            {children}
        </WishListContext.Provider>
    )

}