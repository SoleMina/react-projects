import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ItemCount.module.scss";

const ItemCount = ({ stock, initial, onAdd, item }) => {
  const [showCount, setShowCount] = useState(true);
  const [count, setCount] = useState(initial);

  const onAddition = () => {
    stock > count && setCount(count + 1);
  };
  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };
  const agregar = () => {
    if (count) {
      onAdd(count);
      setShowCount(false);
    }
  };

  return (
    <div>
      <div className={styles.count + " w-50 mb-2"}>
        <button onClick={() => handleDecrement()}>-</button>
        <p>{count}</p>
        <button onClick={() => onAddition()}>+</button>
      </div>
      {showCount ? (
        <>
          <button className="w-50" onClick={() => agregar(count)}>
            Agregar al carrito
          </button>
        </>
      ) : (
        <div className={styles.btn__container}>
          <Link to="/cart">
            <button className="w-50 mb-2">Terminar compra</button>
          </Link>
          <br />
          <Link to="/">
            <button className="w-50">Seguir comprando</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
