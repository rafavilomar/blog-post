import React from "react";
import "../../assets/styles/comment.scss";

const Comment = ({ body, name }) => {
  return (
    <article className="comment">
      <div className="comment__image"></div>
      <div className="comment__content">
        <h6 className="comment__name"> {name} </h6>
        <p className="comment__body">
          laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora
          quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente
          accusantium
        </p>
      </div>
    </article>
  );
};
export default Comment;
