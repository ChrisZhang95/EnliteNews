import React from "react";
import Logo from "../logo/logo.component";
import "./header.scss";
import SearchBar from "../searchBar/searchBar.component";
import TopicMenu from "../topicMenu/topicMenu.component";

const Header = () => (
  <div className="header">
    <div className="row1">
      <div className="column1">
        <Logo />
      </div>
      <div className="column2">
        <SearchBar />
      </div>
      <div className="column3">
        <ul>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
    <TopicMenu />
  </div>
);

export default Header;
