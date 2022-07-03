import React from "react";
import { useCartContext } from "../../contexts/cartContext";
//Import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartWidget.scss";

const CartWidget = (props) => {
  const { count, cart } = useCartContext();
  return (
    <div className="cartwidget">
      <FontAwesomeIcon
        className="cart__icon"
        icon={props.icon}
        data-count="0"
      />
      <span className="cart__counter">{cart.length > 0 ? count : 0}</span>
    </div>
  );
};

export default CartWidget;
