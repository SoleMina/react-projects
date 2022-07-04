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
  collection
} from "firebase/firestore";

const ItemListContainer = memo(({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  console.log(categoriaId);

  //para traer uno solo
  /*
  useEffect(() => {
    const db = getFirestore(); //db - collection name - id
    const queryProduct = doc(db, "products", "5HXVtj6ZPLCaBpctsN2p");
    getDoc(queryProduct)
      .then((res) => setProductos({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));

    if (productos.length > 0) {
      setLoading(false);
    }
  }, []);
*/
  //para traer todos
  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    getDocs(queryCollection).then((res) =>
      setProductos(res.docs.map((item) => ({ id: item.id, ...item.data() })))
    );
    setLoading(false);
  }, []);
  /*
  useEffect(() => {
    getFetch().then((res) => {
      categoriaId
        ? setProductos(
            res.filter((producto) => producto.category === categoriaId)
          )
        : setProductos(res);
    });
    setLoading(false);
  }, [categoriaId]);

  */
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
