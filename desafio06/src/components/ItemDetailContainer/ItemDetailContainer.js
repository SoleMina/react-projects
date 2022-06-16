import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const getFetch = async () => {
    try {
      const queryFetch = await fetch(
        "https://raw.githubusercontent.com/SoleMina/react-projects/main/desafio06/assets/json/data.json"
      );
      const queryFetchParse = await queryFetch.json();
      setItem(queryFetchParse.productos[0]);
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
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
