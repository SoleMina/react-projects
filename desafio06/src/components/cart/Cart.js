import React from "react";
import { useCartContext } from "../../contexts/cartContext";

const Cart = () => {
  const { cart, removeCart } = useCartContext();

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <div key={item.id}>
            <img src={item.pictureUrl} width="100" />
            <p>Nombre: {item.title}</p>
            <p>Precio: {item.price}</p>
          </div>
        ))}
      </ul>
      <button onClick={removeCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
