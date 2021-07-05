import React, { useEffect, useState } from "react";
import "../../assets/styles/user.scss";

import Avatar from "react-nice-avatar";
import { Link } from "react-router-dom";
import { getPost_API } from "../../fetch";

const UserCard = ({ user }) => {
  const [totalPost, setTotalPost] = useState();

  const getTotalPosts = async () => {
    let response = await getPost_API(user && user.id);
    setTotalPost(response.data.length);
  };

  useEffect(async () => await getTotalPosts(), []);

  return (
    <Link to="/">
      <article className="userCard">
        <Avatar style={{ width: 150, height: 150 }} />
        <div className="userCard__content">
          <p className="userCard__userName">{`@${user && user.username}`}</p>
          <h4 className="userCard__fullName">{user && user.name}</h4>
          <p className="userCard__posts">{`${totalPost} Posts`}</p>
        </div>
      </article>
    </Link>
  );
};
export default UserCard;
