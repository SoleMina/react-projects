import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="listContainer">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
