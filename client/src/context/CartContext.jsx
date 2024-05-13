import { useContext, createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart([{ product, cuantity: 1 }, ...cart]);   
  };

  const handleQuantityChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    setCart(cart.map(item => 
      item.product._id === productId ? { ...item, cuantity: newQuantity } : item
    ));
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.product._id!== product._id));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.product.price * item.cuantity, 0));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        total,
        addToCart,
        handleQuantityChange,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
