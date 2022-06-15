import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getFetch } from "../../helpers/getFetch";
import styles from "./ItemListContainer.module.scss";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("assets/json/data.json")
      .then((res) => res.json())
      .then((res) => setProductos(res));
  }, []);

  console.log(productos);
  return (
    <>
      <h2 className="text-center p-4">{greeting}</h2>
      <div className={styles.listContainer}>
        {productos.map((item) => {
          return (
            <div key={item.id}>
              <ItemList item={item} />
              <ItemCount stock={10} initial={1} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemListContainer;
