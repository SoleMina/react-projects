import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
  const [showCount, setShowCount] = useState(true);

  const onHandlerPurchase = () => {
    setShowCount(false);
  };

  return (
    <>
      <h2 className={showCount ? "" : "text-center"}>Item Detail</h2>
      <h3>{item.name}</h3>
      <img
        src={item.pictureUrl}
        width="150"
        height="150"
        alt=""
        className={showCount ? "" : styles.img__responsive}
      />
      <p>Description: {item.description}</p>
      <p>Stock: {item.stock}</p>
      {showCount ? (
        <>
          <ItemCount stock={10} initial={1} />
          <button
            className={styles.count__addButton}
            onClick={() => onHandlerPurchase()}
          >
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
    </>
  );
};

export default ItemDetail;
