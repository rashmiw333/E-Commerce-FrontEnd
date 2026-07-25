import { createContext, useContext,useState } from "react";
import useFetch from "../hooks/UseFetch";

const ProductContext = createContext();

const useProductContext =() => useContext(ProductContext);
export default useProductContext;

export function ProductProvider({ children }) {

  const [search, setSearch] = useState("");

const {
  data: productResponse,
  loading: productLoading,
} = useFetch("http://localhost:3000/api/products");

const {
  data: categoryResponse,
  loading: categoryLoading,
} = useFetch("http://localhost:3000/api/categories");

const products = productResponse?.data?.products || [];
const categories = categoryResponse?.data?.categories || [];

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        productLoading,
        categoryLoading,
        search,
        setSearch
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}


