import React from "react";
import "../../assets/styles/user.scss";

import Avatar from "react-nice-avatar";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <Link to="/">
      <article className="userCard">
        <Avatar style={{ width: 150, height: 150 }} />
        <div className="userCard__content">
          <p className="userCard__userName">{"@" + user.username}</p>
          <h4 className="userCard__fullName">{user.name}</h4>
          <p className="userCard__posts"># Posts</p>
        </div>
      </article>
    </Link>
  );
};
export default UserCard;
