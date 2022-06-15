import React from "react";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/img/sgs-logo.png" alt="" />
      </div>
      <div className="dropdown">
        <img src="/img/flag-global-black.png" alt="" />
        <p>Websites & Languages</p>
        <AiFillCaretDown />
      </div>
      <div className="search-wrapper">
        <form className="nav-form">
          <input type="text" placeholder="Search" className="input-nav" />
          <AiOutlineSearch className="search-icon" />
        </form>
      </div>
    </div>
  );
};

export default Navbar;
