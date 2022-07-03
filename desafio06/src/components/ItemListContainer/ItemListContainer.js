import React, { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch";
import styles from "./ItemListContainer.module.scss";
import ItemList from "../ItemList/ItemList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";

const ItemListContainer = memo(({ greeting }) => {
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
    setLoading(false);
  }, [categoriaId]);
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
