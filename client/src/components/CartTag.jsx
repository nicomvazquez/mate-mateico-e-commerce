import React from "react";

import { useCart } from "../context/CartContext.jsx";

function CartTag({ item }) {
  const { cart, setCart, removeFromCart } = useCart();

  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    setCart(
      cart.map((item) =>
        item.product._id === productId
          ? { ...item, cuantity: newQuantity }
          : item
      )
    );
  };

  return (
    <div className="bg-[#1E2019] flex p-5 rounded-md">
      <img src={`api/img/${item.product.image}`} alt="" className="max-w-xs" />
      <div className="ml-5 flex flex-col justify-between">
        <div>
          <h1 className="text-white font-semibold text-4xl ">
            {item.product.name}
          </h1>
          <p className="text-xl text-neutral-300">${item.product.price}</p>
        </div>
        <div className="flex gap-5 justify-center">
          <h1 className="text-white text-2xl">cantidad:</h1>
          <input
            type="number"
            min={1}
            onChange={(e) => {
              handleQuantityChange(item.product._id, e);
            }}
            value={item.cuantity}
            className="border-2 border-green-600 text-3xl rounded-md w-10"
          />
          <button
            onClick={() => {
              removeFromCart(item.product);
            }}
            className="bg-red-600 px-3 py-2"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTag;
