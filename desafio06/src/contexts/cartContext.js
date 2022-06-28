import React, { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const isInCart = (id) => cart.some((item) => item.id === id);

  const addToCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((element) => {
        if (element.id === item.id) {
          return {
            ...item,
            cantidad: element.cantidad + cantidad
          };
        } else {
          return element;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart, count }}>
      {children}
    </CartContext.Provider>
  );
};
