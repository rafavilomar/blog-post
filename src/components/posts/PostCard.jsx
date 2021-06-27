import React from "react";
import "../../assets/styles/post.scss";
const PostCard = ({ post }) => {
  const handleTitle = () => {
    let title;
    post.title.length > 26
      ? (title = post.title.substr(0, 26) + "...")
      : (title = post.title);
    return title;
  };
  const handleBody = () => {
    let body;
    post.body.length > 60
      ? (body = post.body.substr(0, 60) + "...")
      : (body = post.body);
    return body;
  };

  return (
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
  );
};
export default PostCard;
