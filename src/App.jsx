import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx"
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList.jsx";
import Cart from "./pages/Cart.jsx"
import OrderHistory from "./pages/OrderHistory.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { WishListProvider } from "./context/WishListContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.jsx";
import { OrderProvider } from "./context/OrderContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <ProductProvider>
      <WishListProvider>
        <OrderProvider>
        <CartProvider>
          <FeedbackProvider>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} /> 
        <Route path="/products/:productId" element={<ProductDetails />}/>
        <Route path="/wishList" element={<WishList/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/orders" element={<OrderHistory/>} />
        </Routes>
      </Router>
          </FeedbackProvider>
        </CartProvider>
        </OrderProvider>
      </WishListProvider>
    </ProductProvider>
  );
}
