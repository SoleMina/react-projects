import React from "react";

//Import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartWidget.scss";

const CartWidget = (props) => {
  return (
    <div className="cartwidget">
      <FontAwesomeIcon icon={props.icon} data-count="0" />
      <span>0</span>
    </div>
  );
};

export default CartWidget;
