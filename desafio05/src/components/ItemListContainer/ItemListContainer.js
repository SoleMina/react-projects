import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getFetch } from "../../helpers/getFetch";
import styles from "./ItemListContainer.module.scss";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getFetch() //llamada a la api
      .then((resp) => setProductos(resp))
      .catch((err) => console.log.log(err))
      .finally(() => console.log("La llamada del producto se ha completado"));
  }, []);

  console.log(productos);
  return (
    <>
      <h2 className="text-center p-4">{greeting}</h2>
      <div className={styles.listContainer}>
        {productos.map((producto) => {
          return (
            <div key={producto.id}>
              <ItemList producto={producto} />
              <ItemCount stock={10} initial={1} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemListContainer;
