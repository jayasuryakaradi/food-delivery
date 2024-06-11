import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
    const[menu, setMenu]=useState("HOME")
  return (
    <nav className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("HOME")} className={menu==="HOME"?"active":""}>HOME</li>
        <li onClick={()=>setMenu("MENU")} className={menu==="MENU"?"active":""}>MENU</li>
        <li onClick={()=>setMenu("MOBILE APP")} className={menu==="MOBILE APP"?"active":""}>MOBILE APP</li>
        <li onClick={()=>setMenu("CONTACT US")} className={menu==="CONTACT US"?"active":""}>CONTACT US</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button className="">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
