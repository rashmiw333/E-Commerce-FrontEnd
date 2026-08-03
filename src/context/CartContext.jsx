import { createContext,useContext,useState } from "react";
import useAlertContext from "./AlertContext";

const CartContext = createContext();
const useCartContext = ()=> useContext(CartContext);
export default useCartContext;

export function CartProvider({children}){

    const[cartItems,setCartItems] = useState([]);
    const { showAlert } = useAlertContext();
    console.log(cartItems,"itemsfromContext");

    function addToCart(product){
        const existedProduct = cartItems.find(item=> item.product._id == product._id);

        if(existedProduct){
            setCartItems(cartItems.map((item)=>item.product._id === product._id
        ? {...item,
            quantity:item.quantity + 1} : item
         )
        );
        }else{
            setCartItems([...cartItems,
                {product,
                 quantity: 1   
                }
            ]);
        }
    showAlert("Product added to Cart.");
    }

    function removeFromCart(product){
        setCartItems(cartItems.filter(item=>item.product._id !== product._id));
        showAlert("Product removed from Cart.");
    }

    function increaseQuantity(product){
        setCartItems(cartItems.map((item)=>item.product._id === product._id
     ?{...item,quantity:item.quantity + 1
     } : item

    ));
    showAlert("Quantity increased.");
    };

    function decreaseQuantity(product){
        setCartItems(cartItems.map((item)=>
            item.product._id === product._id ? 
                {...item, quantity:item.quantity - 1 }
                : item
            ).filter((item)=>item.quantity >0)
        );
        showAlert("Quantity decreased.");
    }
   
    function clearCart() {
      setCartItems([]);
    }
    return(
        <CartContext.Provider value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart}}
        >
        {children}
        </CartContext.Provider>
    )


}