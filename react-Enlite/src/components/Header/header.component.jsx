import React from "react";
import Logo from "./Logo/logo.component";
import "./header.scss";
import SearchBar from "./SearchBar/searchBar.component";
import TopicMenu from "./TopicMenu/topicMenu.component";
import { Link } from "react-router-dom";
const Header = () => (
  <div className="header">
    <div className="row1">
      <div className="column1">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="column2">
        <SearchBar />
      </div>
      <div className="column3">
        <Link to="/signin" className="grow">
          Sign In
        </Link>
        <Link to="/signup" className="grow">
          Sign Up
        </Link>
      </div>
    </div>
    <TopicMenu />
  </div>
);

export default Header;
