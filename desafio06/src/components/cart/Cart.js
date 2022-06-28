import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart, removeCart } = useCartContext();

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <div key={item.id}>
            <img src={item.pictureUrl} width="100" />
            <h5>Nombre: {item.title}</h5>
            <p>Precio: {item.price}</p>
            <p>Cantidad: {item.cantidad}</p>
          </div>
        ))}
      </ul>
      <button onClick={removeCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
