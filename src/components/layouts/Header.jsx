import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/layout/header.scss'

const Header = () => {
  return (
    <div id='header'>
      <h1 id='brand' >BlogPost</h1>
      <div style={{width: 200, backgroundColor: 'red', height: 50}} ></div>
    <nav>
      <Link to="/users">Users</Link>
      <Link to="/posts">Posts</Link>
    </nav>
    </div>
  );
};
export default Header;
