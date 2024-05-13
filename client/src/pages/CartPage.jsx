import React from "react";

import CartTag from "../components/CartTag.jsx";

import { useCart } from "../context/CartContext.jsx";

function CartPage() {
  const { cart, total } = useCart();

  return (
    <div className="w-4/6 mx-auto py-8 gap-5">
      <h1 className="text-white text-7xl font-semibold">Carrito</h1>
      <div className="my-10 flex flex-col gap-5">
        {cart.map((item) => (
          <CartTag item={item} key={item.product._id} />
        ))}
      </div>
      <h1 className="text-white text-5xl font-medium">Total: ${total}</h1>
    </div>
  );
}

export default CartPage;
