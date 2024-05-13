import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/product/${product._id}`);
      }}
      className="bg-[#1E2019] max-w-sm rounded-md overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition duration-300"
    >
      <img
        className="w-full"
        src={`api/img/${product.image}`}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="text-white font-semibold text-3xl mb-2">{product.name}</div>
        <p className="text-slate-300 text-xl">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
