import React, { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import styles from "./ItemDetailContainer.module.scss";

const ItemDetailContainer = memo(() => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  //para traer uno solo

  useEffect(() => {
    const db = getFirestore(); //db - collection name - id
    const queryProduct = doc(db, "products", "5HXVtj6ZPLCaBpctsN2p");
    getDoc(queryProduct)
      .then((res) => setItem({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  /*
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

    */

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
