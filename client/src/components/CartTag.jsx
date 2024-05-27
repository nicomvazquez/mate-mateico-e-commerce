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
    <div className="max-w-md overflow-hidden transform hover:-translate-y-3 transition duration-300">
      <img
        src={`api/img/${item.product.image}`}
        alt=""
        className="w-full rounded-md"
      />
      <div>
        <div>
          <h1 className="font-semibold text-2xl ">{item.product.name}</h1>
          <p className="text-lg text-neutral-400">${item.product.price}</p>
        </div>

        <div className="flex gap-5 my-3">
          <label className="text-xl">cantidad:</label>
          <input
            type="number"
            min={1}
            onChange={(e) => {
              handleQuantityChange(item.product._id, e);
            }}
            value={item.cuantity}
            className="border-2 border-black text-xl rounded-sm w-10"
          />
        </div>
        <button
          onClick={() => {
            removeFromCart(item.product);
          }}
          className="bg-red-500 px-2 py-1 rounded-md"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CartTag;
