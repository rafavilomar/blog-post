import React from "react";
import "../../assets/styles/user.scss";

const SectionAbout = ({ title, children }) => {
  return (
    <section className="userSection">
      {title && (
        <div className="userSection__header">
          <h5>{title}</h5>
        </div>
      )}
      <div className="userSection__content">{children}</div>
    </section>
  );
};
export default SectionAbout;
