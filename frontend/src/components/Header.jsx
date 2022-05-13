import React from "react";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaHome,
  FaBook,
  FaTree,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <Link to="/blog">
          <FaBook /> Post a Blog
        </Link>
        <Link to="/">
          <FaHome />
          Home
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaTree /> About Us
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
