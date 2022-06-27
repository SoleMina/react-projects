import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
  const [showCount, setShowCount] = useState(true);
  const { cart, addToCart } = useCartContext();

  const onHandlerPurchase = () => {
    setShowCount(false);
  };

  const onAdd = (cant) => {
    addToCart({ ...item, quantity: cant });
  };
  console.log(cart);

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
    </>
  );
};

export default ItemDetail;
