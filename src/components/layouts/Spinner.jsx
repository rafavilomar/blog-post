import React from "react";
import "../../assets/styles/layout/spinner.scss";

const Spinner = () => (
  <div className="spinner">
    <div className="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Spinner;
