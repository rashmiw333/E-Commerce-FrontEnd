import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <div className="col-md-2">

      <Link
        to={`/products?category=${category.name}`}
        className="text-decoration-none">
        <div className="card">

          <img
            src={category.image}
            className="card-img-top"
            height="140"
          />

          <div className="card-body text-center">

            <h6>{category.name}</h6>

          </div>

        </div>
      </Link>

    </div>
  );
}