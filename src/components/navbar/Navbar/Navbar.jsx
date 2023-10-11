import React from "react";
import "./narbar.scss";
import { BsSearch } from "react-icons/bs";
import l1 from "../../../assets/images/demo/logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logoDiv">
        <img src={l1} alt="" />
      </div>

      <div className="menu">
        <ul>
          <li className="navList">Home</li>
          <li className="navList">Courses</li>
          <li className="navList">Instuctors</li>
          <li className="navList">Schedules</li>
          <li className="navList">Contact Us</li>
        </ul>
      </div>

      <div className="landr">
        <BsSearch className="icon" />
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
