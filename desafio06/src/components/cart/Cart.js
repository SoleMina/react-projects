import React from "react";
import { useCartContext } from "../../contexts/cartContext";
//Import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart, removeCart, deleteElement } = useCartContext();

  return (
    <div className="d-flex justify-content-center flex-column">
      {cart.length > 0 ? (
        <div className={styles.cart}>
          <h3 className="text-center m-5">Your Products</h3>
          {cart.map((item) => {
            return (
              <>
                <div key={item.id} className={styles.cartBox + " mb-4"}>
                  <img src={item.pictureUrl} width="100" />
                  <div>
                    <h5>Nombre</h5>
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <h5>Precio</h5>
                    <p>{item.price}</p>
                  </div>
                  <div>
                    <h5>Cantidad</h5>
                    <p>{item.cantidad}</p>
                  </div>
                  <div>
                    <h5>Delete</h5>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon-awesome delete-icon"
                      onClick={deleteElement}
                    />
                  </div>
                </div>
              </>
            );
          })}
          <button onClick={removeCart} className={styles.btnGeneral}>
            Vaciar carrito
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-center m-5">
            You don't have products on your cart yet
          </h2>
          <FontAwesomeIcon
            icon={faShoppingCart}
            data-count="0"
            className={styles.icon + " text-center"}
          />
        </>
      )}
    </div>
  );
};

export default Cart;
