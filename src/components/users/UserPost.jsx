import React from "react";
import "../../assets/styles/user.scss";
import moment from "moment";
import { Link } from "react-router-dom";

const UserPost = ({ post }) => {
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
          post.body.slice(1).substr(0, 100) +
          "...")
      : (body = post.body.charAt(0).toUpperCase() + post.body.slice(1));
    return body;
  };

  return (
    <Link to={`/posts/${post.id}`}>
      <article className="userPost">
        <div className="userPost__image"></div>
        <div className="userPost__info">
          <h6>{randomDate()}</h6>
          <h4>{handleTitle()}</h4>
          <p>{handleBody()}</p>
        </div>
      </article>
    </Link>
  );
};
export default UserPost;
