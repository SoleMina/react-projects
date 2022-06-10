import React from "react";
import Item from "../Item/Item";

const ItemList = ({ producto }) => {
  return (
    <>
      <Item producto={producto} />
    </>
  );
};

export default ItemList;
