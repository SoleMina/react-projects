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
    <div className={styles.item__detail + " pt-4"}>
      <div className={styles.item__count + " w-50"}>
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
      </div>
      <div className="w-50">
        <h2 className={styles.item__headliner + (showCount ? "" : " mt-4")}>
          Item Detail
        </h2>
        <h4>{item.name}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum
          dolorem voluptate at distinctio. Cum veniam impedit non iure.
          Reprehenderit, mollitia cupiditate debitis voluptatum ducimus
          voluptate veniam dolorum exercitationem fuga!
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
