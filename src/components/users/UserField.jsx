import React from "react";
import "../../assets/styles/user.scss";

import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";

const UserField = ({ icon, title, info }) => {
  return (
    <div className="UserField">
      <span>
        <UsersIcon height={30} width={30} fill="white" />
      </span>
      <div className="UserField__content">
        <h6>{title}</h6>
        <p>{info}</p>
      </div>
    </div>
  );
};
export default UserField;
