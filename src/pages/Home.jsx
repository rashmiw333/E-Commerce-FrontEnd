import  useProductContext  from "../context/ProductContext";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  const {categories,products,categoryLoading,productLoading} = useProductContext();

  console.log(categories,"categories");

  if (categoryLoading || productLoading)
    return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-4">

      <h3 className="mb-4">Shop by Category</h3>

      <div className="row g-3">
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
          />
        ))}
      </div>

      <div
        className="bg-dark text-white text-center mt-5 p-5 rounded">
        <h1>Latest Electronics</h1>
        <p>
          Get Up To 50% OFF
        </p>
      </div>

      <h3 className="mt-5 mb-3">
        Featured Products
      </h3>

      <div className="row">
        {products.slice(0, 4).map((product) => (
          <div className="col-md-3" key={product._id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                height="220"/>

              <div className="card-body">
                <h6>{product.name}</h6>
                <h5>${product.price}</h5>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}