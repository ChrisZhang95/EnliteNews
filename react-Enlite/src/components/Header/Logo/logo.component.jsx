import React from "react";
import logo from "./newspaper.png";
import "./logo.scss";

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="Site Name" />
    <p>ENLITE</p>
  </div>
);

export default Logo;
