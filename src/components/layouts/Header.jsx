import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/layout/header.scss";

import IconButton from "../buttons/IconButton";

//ICONS
import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown.svg";
import { ReactComponent as PostIcon } from "../../assets/icons/post.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

const Header = () => {
  return (
    <div id="header">
      <h1 id="brand">BlogPost</h1>
      <div id='searchBar'></div>
      <nav>
        <Link to="/">
          <IconButton icon={<PostIcon className="icon-active" height={22} width={22} />} />
        </Link>
        <Link to="/users">
          <IconButton icon={<UsersIcon className="icon" height={22} width={22} />} />
        </Link>
        <IconButton icon={<AddIcon className="icon" height={22} width={22} />} />
        <div id='profile' >
          <span></span>
            <DropdownIcon className='icon'/>
        </div>
      </nav>
    </div>
  );
};
export default Header;
