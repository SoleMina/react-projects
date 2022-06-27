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
      let producto = queryFetchParse.productos;
      producto = producto.find((prod) => parseInt(prod.id) === parseInt(id));
      setItem(producto);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getFetch();
    }, 1000);
  }, []);

  return (
    <div className={styles.listContainer}>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
