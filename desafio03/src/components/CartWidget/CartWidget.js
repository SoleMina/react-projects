import React from "react";

//Import icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartWidget.css";

const CartWidget = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} data-count="0" />
    </div>
  );
};

export default CartWidget;
