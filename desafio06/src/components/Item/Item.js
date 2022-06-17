import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./Item.module.scss";

const Item = ({ item }) => {
  return (
    <>
      <h2>{item.name}</h2>
      <img src={item.pictureUrl} width="150" height="150" alt="" />
      <p>Description: {item.description}</p>
      <p>Stock: {item.stock}</p>
      <div className="item_button">
        <Link to={`/details/${item.id}`}>
          <button className={styles.item__btn + " mb-2"}>
            Detalle del producto
          </button>
        </Link>
      </div>
      <ItemCount stock={item.stock} initial={1} />
    </>
  );
};

export default Item;
