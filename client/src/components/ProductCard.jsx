import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/product/${product._id}`);
      }}
      className="max-w-sm overflow-hidden transform hover:-translate-y-3 transition duration-300"
    >
      <img
        className="w-full rounded-md"
        src={`api/img/${product.image}`}
        alt={product.name}
      />
      <div className="pb-4">
        <h1 className="font-semibold text-2xl">{product.name}</h1>
        <p className="font-light text-xl">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
