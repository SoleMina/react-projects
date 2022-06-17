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
    getFetch().then((res) => {
      categoriaId
        ? setProductos(
            res.filter((producto) => producto.category === categoriaId)
          )
        : setProductos(res);
    });
  }, [categoriaId]);
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
