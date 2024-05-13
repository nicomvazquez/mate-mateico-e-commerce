import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useProducts } from "../../context/ProductsContext.jsx";

function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  const {
    createProduct,
    categories,
    getCategories,
    updateProduc,
    getProductById,
  } = useProducts();

  useEffect(() => {
    const loadCategories = async () => {
      await getCategories();
    };
    loadCategories();
  }, []);

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const product = await getProductById(params.id);
        setValue("name", product.name);
        setValue("description", product.description);
        setValue("price", product.price);
        setValue("category", product.category);
        setValue("stock", product.stock);
      }
    }
    loadProduct();
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(async (values) => {
          console.log(values);
          const formdata = new FormData();
          formdata.append("name", values.name);
          formdata.append("description", values.description);
          formdata.append("price", values.price);
          formdata.append("category", values.category);
          formdata.append("img", values.img[0]);
          formdata.append("stock", values.stock);

          console.log(formdata);

          if (params.id) {
            await updateProduc(params.id, formdata);
          } else {
            await createProduct(formdata);
          }
          navigate("/admin");
        })}
        className="text-white flex flex-col max-w-3xl w-full bg-[#1E2019] p-5 m-auto rounded-md"
      >
        <h1 className="text-4xl font-semibold">new product</h1>
        <label htmlFor="" className="text-xl py-3">
          nombre del producto
        </label>
        <input
          type="text"
          className="h-8 bg-inherit border-b-2 border-b-[#CFEE9E] focus:bg-[#394032]"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-500 text-xs">El nombre es requerido</p>
        )}

        <label htmlFor="" className="text-xl py-3">
          descripcion
        </label>
        <textarea
          type="text"
          className="h-20 bg-inherit border-2 border-b-[#CFEE9E] focus:bg-[#394032]"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p className="text-red-500 text-xs">La descripcion es requerida</p>
        )}

        <label htmlFor="" className="text-xl py-3">
          categoria
        </label>
        <select
          className="h-8 bg-inherit border-b-2 border-b-[#CFEE9E] focus:bg-[#394032]"
          {...register("category")}
        >
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        <label htmlFor="" className="text-xl py-3">
          precio
        </label>
        <input
          type="number"
          className="h-8 bg-inherit border-b-2 border-b-[#CFEE9E] focus:bg-[#394032]"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <p className="text-red-500 text-xs">El precio es requerido</p>
        )}

        <label htmlFor="" className="text-xl py-3">
          stock
        </label>
        <input
          type="number"
          className="h-8 bg-inherit border-b-2 border-b-[#CFEE9E] focus:bg-[#394032]"
          {...register("stock", { required: true })}
        />
        {errors.stock && (
          <p className="text-red-500 text-xs">El stock es requerido</p>
        )}

        <label htmlFor="" className="text-xl py-3">
          imagen
        </label>
        <input type="file" {...register("img", { required: true })} />
        {errors.img && (
          <p className="text-red-500 text-xs">La imagen es requerida</p>
        )}

        <button
          type="submit"
          className="py-2 mt-10 rounded-md w-32 bg-[#587B7F] hover:bg-[#385254]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
