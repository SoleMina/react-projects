import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <>
      <h2>Item Detail</h2>
      <h3>{item.name}</h3>
      <img src={item.pictureUrl} width="150" height="150" alt="" />
      <p>Description: {item.description}</p>
      <p>Stock: {item.stock}</p>
      <ItemCount stock={10} initial={1} />
    </>
  );
};

export default ItemDetail;
