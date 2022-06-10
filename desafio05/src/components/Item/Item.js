import React from "react";

const Item = ({ producto }) => {
  return (
    <>
      <h2>{producto.name}</h2>
      <p>Description: {producto.description}</p>
      <p>Stock: {producto.stock}</p>
    </>
  );
};

export default Item;
