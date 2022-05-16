import React from "react";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaHome,
  FaBook,
  FaTree,
  FaLayerGroup,
  FaHeart,
  FaImages
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <Link className="home" to="/"><FaHome /> Home </Link>
        <Link className="blogy"to="/blog"><FaBook /> Post a Blog </Link>
        <Link className="feed" to="/feed"><FaLayerGroup /> Feed </Link>
        <Link className="about" to="/about"><FaTree /> About Us </Link>
        <Link classname="sneak" to='/sneak'><FaImages /> Site Sneak Peek </Link>
        <Link className="help" to='/counseling'><FaHeart /> Counseling </Link>
        <Link className="register" to="/register"><FaUser /> Register </Link>
        <Link className="login" to="/login"><FaSignInAlt /> Login </Link>
        <Link className="signout" to="/signout"><FaSignOutAlt /> Sign Out </Link>
       
        
        
      </div>
      
    </header>
    
  );
}

export default Header;
