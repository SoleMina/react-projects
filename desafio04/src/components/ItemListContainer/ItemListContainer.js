import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemListContainer.module.scss";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.listContainer}>
      <h2 className="text-center">{greeting}</h2>
      <ItemCount stock={10} initial={1} />
    </div>
  );
};

export default ItemListContainer;
