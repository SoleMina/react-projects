import React, { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = memo(() => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

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
    getFetch();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className={styles.listContainer}>
      {loading ? (
        <SpinnerContainer text="Loading..." />
      ) : (
        <ItemDetail item={item} />
      )}
    </div>
  );
});

export default ItemDetailContainer;
