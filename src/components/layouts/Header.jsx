import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/layout/header.scss";

import IconButton from "../buttons/IconButton";
import Avatar from "react-nice-avatar";

//ICONS
import { ReactComponent as DropdownIcon } from "../../assets/icons/dropdown.svg";
import { ReactComponent as PostIcon } from "../../assets/icons/post.svg";
import { ReactComponent as UsersIcon } from "../../assets/icons/users.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Header = () => {
  return (
    <div id="header">
      <Link to='/' >
        <h1 id="brand">BlogPost</h1>
      </Link>
      <nav>
        <div id="searchBar">
          <SearchIcon className="icon" />
          <input type="text" />
        </div>
        <Link to="/">
          <IconButton
            icon={<PostIcon className="icon-active" height={22} width={22} />}
          />
        </Link>
        <Link to="/users">
          <IconButton
            icon={<UsersIcon className="icon" height={22} width={22} />}
          />
        </Link>
        <IconButton
          icon={<AddIcon className="icon" height={22} width={22} />}
        />
        <div id="profile">
          <Avatar style={{ width: 42, height: 42 }} />
          <DropdownIcon className="icon" height={18} width={18} />
        </div>
      </nav>
    </div>
  );
};
export default Header;
