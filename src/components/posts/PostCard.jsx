import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/post.scss";
const PostCard = ({ post }) => {
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

  return (
    <Link to="/">
      <article className="postCard">
        <div className="postCard__head">
          <span></span>
          <div className="userInfo">
            <h4>@username</h4>
            <p>A few minutes ago</p>
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
