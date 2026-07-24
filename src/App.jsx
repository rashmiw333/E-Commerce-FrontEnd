import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx"
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList.jsx";
import Cart from "./pages/Cart.jsx"
import { ProductProvider } from "./context/ProductContext.jsx";
import { WishListProvider } from "./context/WishListContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <ProductProvider>
      <WishListProvider>
        <CartProvider>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} /> 
        <Route path="/products/:productId" element={<ProductDetails />}/>
        <Route path="/wishList" element={<WishList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
        </CartProvider>
      </WishListProvider>
    </ProductProvider>
  );
}
