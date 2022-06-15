import React, { useState } from "react";
import styles from "./ItemCount.module.scss";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);
  const onAdd = () => {
    stock > count && setCount(count + 1);
  };
  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <div>
      <div className={styles.count}>
        <button onClick={() => handleDecrement()}>-</button>
        <p>{count}</p>
        <button onClick={() => onAdd()}>+</button>
      </div>
      <button className={styles.count__addButton}>Agregar a carrito</button>
    </div>
  );
};

export default ItemCount;
