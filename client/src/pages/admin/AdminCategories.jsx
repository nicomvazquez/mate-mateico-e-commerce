import React from "react";
import { useForm } from "react-hook-form";

import { useProducts } from "../../context/ProductsContext.jsx";

function AdminCategories() {
  const { categories, createCategory, deleteCategory } = useProducts();

  const { register, handleSubmit, formState: error } = useForm();

  return (
    <div className="w-5/6 m-auto min-h-screen py-10">
      <h1 className="text-4xl font-bold mb-2 text-white">Admin Categories</h1>

      <form
        onSubmit={handleSubmit(async (values) => {
          await createCategory(values);
        })}
        className="flex flex-col my-10 max-w-lg rounded-md"
      >
        <label htmlFor="categoryName" className="text-white text-2xl py-3">
          Name category:
        </label>
        <input
          id="categoryName"
          type="text"
          {...register("name", { required: true })}
          className="h-10 bg-inherit border-b-2 border-b-[#CFEE9E] focus:bg-[#555f4b] text-white"
        />
        {error.name && (
          <span className="text-red-500">The name is required</span>
        )}

        <button
          type="submit"
          className="py-3 px-4 mt-3 rounded-md w-40 bg-[#587B7F] hover:bg-[#385254] text-white"
        >
          Create Category
        </button>
      </form>

      <table className="divide-y divide-gray-200 w-full my-5">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {categories.map((category) => (
            <tr key={category._id} className="hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap">{category._id}</td>
              <td class="px-6 py-4 text-center whitespace-nowrap font-semibold">
                {category.name}
              </td>
              <td class="px-6 py-4 text-center whitespace-nowrap">
                <button
                  onClick={async () => {
                    await deleteCategory(category._id);
                  }}
                  class="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminCategories;
