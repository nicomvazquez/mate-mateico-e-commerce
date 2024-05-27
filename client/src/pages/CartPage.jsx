import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import CartTag from "../components/CartTag.jsx";

import { useCart } from "../context/CartContext.jsx";

function CartPage() {
  const { cart, total } = useCart();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-full md:w-4/6 mx-auto py-8 px-2">
      <h1 className="text-4xl font-semibold">Carrito</h1>
      <div className="w-full flex flex-col md:flex-row my-10 gap-5 justify-between">
        <div className="grid grid-cols-2 gap-5">
          {cart.map((item) => (
            <CartTag item={item} key={item.product._id} />
          ))}
        </div>

        <form
          onSubmit={handleSubmit((values) => {
            console.log(values);
            navigate("/checkout");
          })}
          className="border-2 rounded-md border-[#87586c] max-w-md p-5 w-full flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="Nombre y apellido"
            className="w-full text-2xl border-2 rounded-md p-1 border-[#ed6464] focus:border-[#bf6370]"
            {...register("client_name", {
              required: true,
            })}
          />
          {errors.client_name && (
            <span className="text-red-500">Nombre es requerido</span>
          )}

          <input
            type="number"
            placeholder="Telefono de contacto"
            className="w-full text-2xl border-2 rounded-md p-1 border-[#ed6464] focus:border-[#bf6370]"
            {...register("client_tel", { required: true })}
          />
          {errors.client_tel && (
            <span className="text-red-500">Telefono es requerido</span>
          )}

          <input
            type="text"
            placeholder="Direccion"
            className="w-full text-2xl border-2 rounded-md p-1 border-[#ed6464] focus:border-[#bf6370]"
            {...register("adress", { required: true })}
          />
          {errors.adress && (
            <span className="text-red-500">Direccion es requerido</span>
          )}

          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Ciudad"
              className="text-2xl border-2 rounded-md p-1 border-[#ed6464] focus:border-[#bf6370]"
              {...register("city", { required: true })}
            />

            <input
              type="number"
              placeholder="Codigo postal"
              className="text-2xl border-2 rounded-md p-1 border-[#ed6464] focus:border-[#bf6370]"
              {...register("zipcode", { required: true })}
            />
          </div>
          {errors.city && (
            <span className="text-red-500">Ciudad es requerido</span>
          )}
          {errors.zipcode && (
            <span className="text-red-500">Codigo postal es requerido</span>
          )}

          <h1 className="text-xl">Total: ${total}</h1>

          <button className="py-2 transition-all px-3 rounded-md bg-[#ed6464] hover:bg-[#bf6370]">
            compar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
