import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./Item.module.scss";

const Item = ({ item }) => {
  return (
    <>
      <h3>{item.title}</h3>
      <img src={item.pictureUrl} width="150" height="150" alt="" />
      <p>Description: {item.description}</p>
      <p>Stock: {item.stock}</p>
      <div className="item_button">
        <Link to={`/details/${item.id}`}>
          <button className={styles.item__btn + " w-90"}>
            Detalle del producto
          </button>
        </Link>
      </div>
    </>
  );
};

export default Item;
