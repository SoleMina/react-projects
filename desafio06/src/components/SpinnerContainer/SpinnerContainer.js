import React from "react";

//Import Spinner from bootstrap
import Spinner from "react-bootstrap/Spinner";

import styles from "./SpinnerContainer.module.scss";

const SpinnerContainer = ({ text }) => {
  return (
    <div className={styles.spinner}>
      <Spinner animation="border" role="status"></Spinner>
      <span className={`spinner__text mr-auto m-2 ${styles.size}`} size="lg">
        {text}
      </span>
    </div>
  );
};

export default SpinnerContainer;
