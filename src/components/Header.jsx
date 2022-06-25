import React from "react";

// Import react router
import { Link } from "react-router-dom";

//Import styles and image
import "./Header.css";
import logo from "../assets/img/logo-white.webp";

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="header__link">
        <h3 className="header__logo">
          <img src={logo} alt="logo" className="header__logoImg" />
        </h3>
      </Link>
      <ul className="header__listContainer">
        <Link to="hiragana-selector" className="header__link">
          <li>Hiragana</li>
        </Link>
        <Link to="katakana-selector" className="header__link">
          <li>Katakana</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
