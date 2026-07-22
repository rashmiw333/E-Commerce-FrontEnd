export default function FilterSidebar({
  categories,
  selectedCategory,
  setSelectedCategory,
  rating,
  setRating,
  sort,
  setSort,
  clearFilters,
}) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Filters</h4>
        <button className="btn btn-link btn-sm" onClick={clearFilters}>Clear</button>
      </div>
      <hr />

      <h5>Category</h5>
      {categories.map((category) => (
        <div className="form-check" key={category._id}>
          <input
            className="form-check-input"
            type="checkbox"
            checked={selectedCategory === category.name}
            onChange={() =>
              setSelectedCategory(
                selectedCategory === category.name ? "": category.name)}/>
          <label className="form-check-label">{category.name}</label>
        </div>
      ))}
      <hr />

      <h5>Rating</h5>
      {[4, 3, 2, 1].map((star) => (
        <div className="form-check" key={star}>

          <input
            type="radio"
            className="form-check-input"
            checked={rating === star}
            onChange={() => setRating(star)}
          />

          <label>{star} ★ & Above</label>
        </div>
      ))}

      <hr />

      <h5>Sort By Price</h5>

      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          checked={sort === "low"}
          onChange={() => setSort("low")}
        />

        <label>Low to High</label>
      </div>

      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          checked={sort === "high"}
          onChange={() => setSort("high")}
        />
        <label>High to Low</label>
      </div>
    </>
  );
}