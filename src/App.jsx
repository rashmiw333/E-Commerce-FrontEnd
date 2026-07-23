import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx"
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import { ProductProvider } from "./context/ProductContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <ProductProvider>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} /> 
        <Route path="/products/:productId" element={<ProductDetails />}/>
        </Routes>
      </Router>
    </ProductProvider>
  );
}
