export default function FilterSidebar({
  categories,
  selectedCategories,
  handleCategory,
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
            checked={selectedCategories.includes(category.name)}
            onChange={() => handleCategory(category.name)}/>
          <label className="form-check-label">{category.name}</label>
        </div>
      ))}
      <hr />

      <h5 className="mt-4">Minimum Rating</h5>

        <input type="range" className="form-range"
       min="1" max="5" step="1" 
       value={rating}
         onChange={(e)=>setRating(Number(e.target.value))}
        />

      <p>{rating} ★ & Above</p>

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
