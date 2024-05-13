import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useProducts } from "../context/ProductsContext.jsx";
import { useCart } from "../context/CartContext.jsx";

function AdminProduct() {
  const [product, setProduct] = useState({});
  
  const { getProductById } = useProducts();
  
  const { id } = useParams();

  const navigate = useNavigate();

  const { cart, addToCart } = useCart();

  useEffect(() => {
    const fethProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res);
      } catch (error) {
        console.log(error);
      }
    };
    fethProduct();
  }, [getProductById, id]);

  return (
    <div className="w-full">
      <div className="max-w-7xl bg-[#1E2019] m-auto my-10 flex p-10">
        <div>
          <img
            className="max-w-xl w-screen"
            src={`/api/img/${product.image}`}
            alt=""
          />
        </div>
        <div className="pl-6 w-full flex flex-col justify-between">
          <div>
            <h1 className="text-white text-6xl">{product.name}</h1>
            <p className="text-2xl text-neutral-400">{product.description}</p>
          </div>
          <div>
            <p className="text-white text-6xl my-10">${product.price}</p>
            <div className="flex w-full justify-between items-center bottom-0">
              <button
                onClick={() => {
                  addToCart(product);
                  navigate("/")
                }}
                className="bg-[#587B7F] hover:bg-[#385254] text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
              <p className="text-xl text-white">
                stock disponible: {product.stock}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
