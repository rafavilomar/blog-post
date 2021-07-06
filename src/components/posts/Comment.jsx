import React from "react";
import "../../assets/styles/comment.scss";

import Avatar from "react-nice-avatar";

const Comment = ({ body, name }) => {
  return (
    <article className="comment">
    <Avatar style={{ width: 62, height: 62 }} />
      <div className="comment__content">
        <h6 className="comment__name"> {name} </h6>
        <p className="comment__body">
          {body}
        </p>
      </div>
    </article>
  );
};
export default Comment;
