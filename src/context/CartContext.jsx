import { createContext,useContext,useState } from "react";

 const CartContext = createContext();
const useCartContext = ()=> useContext(CartContext);
export default useCartContext;

export function CartProvider({children}){

    const[cartItems,setCartItems] = useState([]);

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

    }

    function removeFromCart(product){
        setCartItems(cartItems.filter(item=>item.product._id !== product._id));
    }

    function increaseQuantity(product){
        setCartItems(cartItems.map((item)=>item.product._id === product._id
     ?{...item,quantity:item.quantity + 1
     } : item

    ));
    };

    function decreaseQuantity(product){
        setCartItems(cartItems.map((item)=>
            item.product._id === product._id ? 
                {...item, quantity:item.quantity - 1 }
                : item
            ).filter((item)=>item.quantity >0)
        );
    }
   
    return(
        <CartContext.Provider value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity}}
        >
        {children}
        </CartContext.Provider>
    )


}