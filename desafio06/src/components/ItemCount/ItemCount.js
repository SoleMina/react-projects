import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ItemCount.module.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [showCount, setShowCount] = useState(true);
  const [count, setCount] = useState(initial);

  const onAddition = () => {
    stock > count && setCount(count + 1);
  };
  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };
  const agregar = () => {
    onAdd(count);
    setShowCount(false);
  };

  return (
    <div>
      <div className={styles.count}>
        <button onClick={() => handleDecrement()}>-</button>
        <p>{count}</p>
        <button onClick={() => onAddition()}>+</button>
      </div>
      {showCount ? (
        <>
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
          <button className={styles.count__addButton} onClick={() => agregar()}>
            Agregar a carrito
          </button>
        </>
      ) : (
        <div className={styles.btn__container}>
          <Link to="/cart">
            <button>Ir al cart o terminar compra</button>
          </Link>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
