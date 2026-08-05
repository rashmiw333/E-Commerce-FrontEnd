import { useState,useEffect } from "react";
import { useSearchParams ,useLocation } from "react-router-dom";
import useProductContext  from "../context/ProductContext";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";

export default function ProductListing() {

  const { products, categories, productLoading,search } = useProductContext();

  const [searchParams] = useSearchParams(); 

  const location = useLocation();
  const previousFilters = location.state;

  const initialCategory = searchParams.get("category") || "";


  useEffect(() => {
  if (previousFilters?.search) {
    setSearch(previousFilters.search);
  }
}, []);

  const [selectedCategories, setSelectedCategories] = useState(
  previousFilters?.selectedCategories || (initialCategory ? [initialCategory] : [])
  );

  const [rating, setRating] = useState(
   previousFilters?.rating || 1
  );

  const [sort, setSort] = useState(
   previousFilters?.sort || ""
  );

  function handleCategory(category) {
  if (selectedCategories.includes(category)) {
    setSelectedCategories(
      selectedCategories.filter((item) => item !== category)
    );
  } else {
    setSelectedCategories([
      ...selectedCategories,
      category,
    ]);
  }
}

  let filteredProducts = [...products];

  

  // Category Filter
if (selectedCategories.length > 0) {
  filteredProducts = filteredProducts.filter((product) =>
    selectedCategories.includes(product.category)
  );
}

  // Rating Filter
  filteredProducts = filteredProducts.filter(
    (product) => product.rating >= rating
  );

  // Sort
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  //search Filter
  if(search){
    filteredProducts = filteredProducts.filter(product =>
      product.name
      .toLowerCase()
      .includes(search.toLowerCase())||
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
    );
}


  function clearFilters() {
    setSelectedCategories([]);;
    setRating(1);
    setSort("");
  }

  if (productLoading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container-fluid mt-4">

      <div className="row g-4">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 border-end">
          <FilterSidebar
            categories={categories}
            selectedCategories={selectedCategories}
            handleCategory={handleCategory}
            rating={rating}
            setRating={setRating}
            sort={sort}
            setSort={setSort}
            clearFilters={clearFilters}
          />
        </div>

        <div className="col-md-9">
          <div className="d-flex align-items-center gap-3 mb-4">
            <h3 className="mb-0">
              {selectedCategories === ""
                ? "Showing All Products"
                : `Showing ${selectedCategories.join(", ")}`}
            </h3>
            <span className="text-muted">
              {filteredProducts.length} Products
            </span>
          </div>

          <div className="row">
            {filteredProducts.length===0 ?(
              <div className="text-center mt-5">
              <h4>No Products Found</h4>
              <p>Try another search or filter.</p>
              </div>):(filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                filters={{
                selectedCategories,
                 rating,
                 sort,
                 search,
               }}
              />
              ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
