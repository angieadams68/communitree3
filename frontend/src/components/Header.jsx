import React from "react";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaHome,
  FaBook,
  FaTree,
  FaLayerGroup,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div className="logo">

      <Link className="home" to="/">
          <FaHome />
          Home
        </Link>
        <ul>
        <li>
        <Link to="/blog">
          <FaBook /> Post a Blog
        </Link>
        </li>
        

        
          <li>
            <Link className="login" to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <Link className="signout" to='/signout'>
              <FaSignOutAlt /> Sign Out
            </Link>
          <li>
            <Link className="register" to="/register">
              <FaUser /> Register
            </Link>
          </li>
          <li>
            <Link className="about" to="/about">
              <FaTree /> About Us
            </Link>
          </li>
          <li>
            <Link className="feed" to="/feed">
              <FaLayerGroup /> Feed
            </Link>

            
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
