import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useProductContext  from "../context/ProductContext";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";

export default function ProductListing() {
  const { products, categories, productLoading } = useProductContext();

  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] =
    useState(initialCategory);

  const [rating, setRating] = useState(1);

  const [sort, setSort] = useState(
    "");

  let filteredProducts = [...products];

  // Category Filter
  if (selectedCategory !== "") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
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

  function clearFilters() {
    setSelectedCategory("");
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
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
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
              {selectedCategory === ""
                ? "Showing All Products"
                : `Showing ${selectedCategory}`}
            </h3>
            <span className="text-muted">
              {filteredProducts.length} Products
            </span>
          </div>

          <div className="row">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
