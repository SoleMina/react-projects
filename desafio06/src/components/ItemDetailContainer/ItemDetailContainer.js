import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  const getFetch = async () => {
    try {
      const queryFetch = await fetch(
        "https://raw.githubusercontent.com/SoleMina/react-projects/main/desafio06/assets/json/data.json"
      );
      const queryFetchParse = await queryFetch.json();
      const producto = queryFetchParse.productos.find(
        (producto) => producto.id === id
      );
      console.log(producto);
      setItem(producto);
      console.log(item);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getFetch();
    }, 2000);
  }, []);

  return (
    <div className={styles.listContainer}>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
