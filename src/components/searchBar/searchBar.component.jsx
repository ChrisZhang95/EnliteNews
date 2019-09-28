import React from "react";
import "./searchBar.scss";

const SearchBar = () => (
  <div className="searchBar">
    <div className="logoIcon grow">
      <i className="fas fa-search"></i>
    </div>
    <form className="searchSpace">
      <input
        className="input"
        type="text"
        placeholder="Search news, articles & sources"
        aria-label="Search"
      />
    </form>
  </div>
);

export default SearchBar;
