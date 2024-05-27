import React, { useState } from "react";

import ProductCard from "../components/ProductCard.jsx";

import { useProducts } from "../context/ProductsContext.jsx";

function ProductsPage() {
  const { products, categories, getProductByCategory, getProducts } =
    useProducts();

  return (
    <div className="md:w-5/6 w-full px-2 md:px-0 mx-auto py-8 gap-5">
      <div className="mb-5">
        <h1 className="text-xl pb-2">Filtrar por:</h1>
        <select
          className="bg-[#1E2019] text-white w-full max-w-xs text-lg p-2 rounded-md "
          onChange={(e) => {
            if (e.target.value == "todos") {
              getProducts();
            } else {
              getProductByCategory(e.target.value);
            }
          }}
        >
          <option value="todos">todos</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
