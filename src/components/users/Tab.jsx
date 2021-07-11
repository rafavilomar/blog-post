import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/user.scss";

const Tab = ({ user, active }) => {
  return (
    <div className="tab">
      <Link to={`/about/${user}/about`}>
        <div
          className={`tab__option ${
            active === "about" && "tab__option-active"
          }`}
        >
          <h5>About</h5>
        </div>
      </Link>
      <Link to={`/posts/${user}/posts`}>
        <div
          className={`tab__option ${
            active === "posts" && "tab__option-active"
          }`}
        >
          <h5>Posts</h5>
        </div>
      </Link>
      <Link to={`/${user}/comments`}>
        <div
          className={`tab__option ${
            active === "comments" && "tab__option-active"
          }`}
        >
          <h5>Comments</h5>
        </div>
      </Link>
    </div>
  );
};
export default Tab;
