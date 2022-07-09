import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";
//Import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  getDocs,
  doc,
  documentId,
  query,
  where,
  writeBatch
} from "firebase/firestore";
import Swal from "sweetalert2";
import styles from "./Cart.module.scss";

const Cart = () => {
  const { cart, removeCart, deleteElement, totalPrice } = useCartContext();

  const generateOrder = async (e) => {
    e.preventDefault();
    let order = {};

    order.buyer = {
      name: "Karina",
      email: "karina@gmail.com",
      phone: "998653452"
    };
    order.total = totalPrice;

    order.items = cart.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price * cartItem.cantidad;
      const total = totalPrice;
      return { id, name, price };
    });

    //Insertar order to firestore
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then((res) => console.log(res));
    console.log(order);

    //Update stock
    const queryCollectionStock = collection(db, "products");

    const queryActulizarStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cart.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActulizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cart.find((item) => item.id === res.id).cantidad
          })
        )
      )
      .finally(() => removeCart());

    batch.commit();
  };

  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        deleteElement(id);
      }
    });
  };

  return (
    <div className="d-flex justify-content-center flex-column">
      {cart.length > 0 ? (
        <div className={styles.cart}>
          <h3 className="text-center m-5">Your Products</h3>
          {cart.map((item) => {
            return (
              <>
                <div key={item.id} className={styles.cartBox + " mb-4"}>
                  <img src={item.imgUrl} width="100" />
                  <div>
                    <h5>Nombre</h5>
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <h5>Precio</h5>
                    <p>{item.price}</p>
                  </div>
                  <div>
                    <h5>Cantidad</h5>
                    <p>{item.cantidad}</p>
                  </div>
                  <div>
                    <h5>Delete</h5>
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon-awesome delet(e-icon"
                      onClick={() => deleteItem(item.id)}
                    />
                  </div>
                </div>
              </>
            );
          })}
          <div className="cartItem">
            <div className="row">
              <div className="col-md-12 text-center">
                Monto Total:
                <p>$/. {totalPrice}</p>
                <Link
                  to={`/thankyou`}
                  onClick={generateOrder}
                  className="btn btn-primary"
                >
                  Finalize your purchase
                </Link>
              </div>
            </div>
          </div>
          <button onClick={removeCart} className={styles.btnGeneral + " mt-3"}>
            Vaciar carrito
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-center m-5">
            You don't have products on your cart yet
          </h2>
          <FontAwesomeIcon
            icon={faShoppingCart}
            data-count="0"
            className={styles.icon + " text-center"}
          />
          <Link to="/" className="text-center mt-4">
            Go back to homepage
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
