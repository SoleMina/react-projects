import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  //Sum price of all the products in the cart
  const [totalPrice, setTotalPrice] = useState(0);

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
      setCart((prev) => [...prev, { ...item, cantidad }]);
    }
  };

  const removeCart = () => {
    setCart([]);
  };

  const deleteElement = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateItems = () => {
    let totalProducts = cart.reduce((a, b) => a + b.cantidad, 0);
    setCount(totalProducts);
    console.log("COUNT", count);
  };

  //Get price from a especific item of the array
  const getPrice = () => {
    const total = cart.reduce((a, item) => a + item.price * item.cantidad, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    updateItems();
    getPrice();
  });

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeCart, count, deleteElement }}
    >
      {children}
    </CartContext.Provider>
  );
};
