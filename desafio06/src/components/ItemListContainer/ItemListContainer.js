import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import styles from "./ItemListContainer.module.scss";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();
  console.log(categoriaId);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/SoleMina/react-projects/proyecto/desafio06/assets/json/data.json"
    )
      .then((res) => res.json())
      .then((res) => {
        categoriaId
          ? setProductos(
              res.productos.filter(
                (producto) => producto.category === categoriaId
              )
            )
          : setProductos(res.productos);
      });
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
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemListContainer;
