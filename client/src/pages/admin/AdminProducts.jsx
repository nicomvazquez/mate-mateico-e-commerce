import React from "react";
import { Link } from "react-router-dom";

import { useProducts } from "../../context/ProductsContext.jsx";

function AdminProducts() {
  const { products, categories, deleteProduct } = useProducts();

  return (
    <div className="w-full py-10">
      <div className="w-5/6 m-auto">
        <h1 className=" text-white text-3xl mb-10 font-bold">Products</h1>
        <table class="divide-y divide-gray-200 w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-neutral-100">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {product.name}
                  </div>
                  <div class="text-sm text-gray-500">{product._id}</div>
                </td>
                <td class="px-6 py-4 text-center whitespace-nowrap">
                  {product.price}
                </td>
                <td class="px-6 py-4 text-center whitespace-nowrap">
                  {product.stock}
                </td>
                <td class="px-6 py-4 text-center whitespace-nowrap">
                  <div class="inline-flex space-x-1">
                    <Link
                      to={`/admin/edit/${product._id}`}
                      class="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        deleteProduct(product._id);
                      }}
                      class="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/admin/product/${product._id}`}
                      class="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProducts;
