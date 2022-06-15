import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <h2>{item.name}</h2>
      <img src={item.pictureUrl} width="150" height="150" />
      <p>Description: {item.description}</p>
      <p>Stock: {item.stock}</p>
    </>
  );
};

export default Item;
