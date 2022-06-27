import React, { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((element) => {
        if (element.id === item.id) {
          return {
            ...item,
            quantity: element.quantity + quantity
          };
        } else {
          return element;
        }
      });
      setCart(newCart);
    } else {
      setCart((prev) => [...prev, { ...item, quantity: quantity }]);
    }
  };

  const removeCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
