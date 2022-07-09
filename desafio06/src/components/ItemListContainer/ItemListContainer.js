import React, { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import styles from "./ItemListContainer.module.scss";
import ItemList from "../ItemList/ItemList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit
} from "firebase/firestore";

const ItemListContainer = memo(({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  console.log(categoriaId);

  //para traer todos
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");

    if (categoriaId) {
      //You can use 2 where() and limit(1)
      const queryCollectionFilter = query(
        queryCollection,
        where("category", "==", categoriaId)
        //limit(10),
        //orderBy("price", "desc")
      );
      getDocs(queryCollectionFilter).then((res) =>
        setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [categoriaId]);

  console.log("AAAA", productos);
  return (
    <div>
      {loading ? (
        <SpinnerContainer text="Loading..." />
      ) : (
        <>
          <h2 className="text-center p-4">{greeting}</h2>
          <div className={styles.listContainer}>
            {productos.map((item) => {
              return (
                <div key={item.id} className={styles.item__list}>
                  <ItemList item={item} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
});

export default ItemListContainer;
