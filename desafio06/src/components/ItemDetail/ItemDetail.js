import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
  const [showCount, setShowCount] = useState(true);

  const onHandlerPurchase = () => {
    setShowCount(false);
  };

  const buttonPurchase = () => {
    return (
      <>
        <button>Ir al cart o terminar compra</button>
        <button>Seguir comprando</button>
      </>
    );
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
          <button>Ir al cart o terminar compra</button>
          <button>Seguir comprando</button>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
