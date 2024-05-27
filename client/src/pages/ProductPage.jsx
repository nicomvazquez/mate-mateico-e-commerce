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
      <div className="max-w-7xl m-auto gap-5 p-3 my-10 flex flex-col md:flex-row">
        <div>
          <img
            className="w-full rounded-lg"
            src={`api/img/${product.image}`}
            alt=""
          />
          <h1 className="text-3xl mt-3">{product.name}</h1>
        </div>

        <div className="w-full rounded-md p-3 border-2">
          <div>
            <p className="text-xl text-neutral-600">{product.description}</p>
          </div>

          <div>
            <p className="text-4xl my-10">${product.price}</p>

            <div className="">
              <button
                onClick={() => {
                  addToCart(product);
                  navigate("/");
                }}
                className="bg-[#ed6464] hover:bg-[#bf6370] transition-all  py-2 px-4 rounded"
              >
                Agregar al carrito
              </button>

              <p className="text-lg text-neutral-400">stock disponible: {product.stock}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
