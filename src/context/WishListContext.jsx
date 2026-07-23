import {createContext,useContext,useState} from "react";

const WishListContext = createContext();

const useWishListContext =()=> useContext(WishListContext);
export default useWishListContext;

export function WishListProvider({children}){

const[wishListItems,setWishListItems] = useState([]);

function toggleWishlist(product) {
  const exists = wishListItems.find(
    (item) => item._id === product._id
  );

  if (exists) {
    setWishListItems(
      wishListItems.filter(
        (item) => item._id !== product._id
      )
    );
  } else {
    setWishListItems([...wishListItems, product]);
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