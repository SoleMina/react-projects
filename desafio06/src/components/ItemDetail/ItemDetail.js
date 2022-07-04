import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
  const [showCount, setShowCount] = useState(true);
  const { cart, addToCart } = useCartContext();

  const onAdd = (cant) => {
    addToCart(item, cant);
  };
  console.log(cart);

  return (
    <>
      <h2
        className={
          styles.item__headliner + (showCount ? "" : "text-center mt-4")
        }
      >
        Item Detail
      </h2>
      <h4>{item.name}</h4>
      <img
        src={item.imgUrl}
        width="150"
        height="150"
        alt=""
        className={showCount ? "" : styles.img__responsive}
      />
      <p>Description: {item.description}</p>
      <p>Stock: {item.stock}</p>
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </>
  );
};

export default ItemDetail;
