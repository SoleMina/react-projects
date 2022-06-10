import React from "react";

const Item = ({ producto }) => {
  return (
    <>
      <h2>{producto.name}</h2>
      <img src={producto.pictureUrl} width="150" height="150" />
      <p>Description: {producto.description}</p>
      <p>Stock: {producto.stock}</p>
    </>
  );
};

export default Item;
