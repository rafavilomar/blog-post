import React, { useState, useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "../../assets/styles/post.scss";

import Avatar from "react-nice-avatar";
import { getUsersById_API } from "../../fetch";

const PostCard = ({ post }) => {
  const [userName, setUserName] = useState();

  const getUser = async () => {
    let response = await getUsersById_API(post.userId);
    setUserName(response.data[0].name);
  };

  const randomDate = () => {
    let result = new Date(
      new Date(2020, 0, 1).getTime() +
        Math.random() * (new Date().getTime() - new Date(2020, 0, 1).getTime())
    );
    return moment(result).startOf("day").fromNow();
  };

  const handleTitle = () => {
    let title;
    post.title.length > 26
      ? (title =
          post.title.charAt(0).toUpperCase() +
          post.title.slice(1).substr(0, 26) +
          "...")
      : (title = post.title.charAt(0).toUpperCase() + post.title.slice(1));
    return title;
  };

  const handleBody = () => {
    let body;
    post.body.length > 60
      ? (body =
          post.body.charAt(0).toUpperCase() +
          post.body.slice(1).substr(0, 60) +
          "...")
      : (body = post.body.charAt(0).toUpperCase() + post.body.slice(1));
    return body;
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Link to="/">
      {console.log(randomDate())}
      <article className="postCard">
        <div className="postCard__head">
          <Avatar style={{ width: 45, height: 45 }} />
          <div className="userInfo">
            <h4>{userName}</h4>
            <p>{randomDate()}</p>
          </div>
        </div>
        <span></span>
        <div className="postCard__info">
          <h3>{handleTitle()}</h3>
          <p>{handleBody()}</p>
        </div>
      </article>
    </Link>
  );
};
export default PostCard;
