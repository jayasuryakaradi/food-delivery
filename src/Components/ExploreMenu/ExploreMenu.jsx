import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>EXPLORE OUR MENU</h1>
      <p className="explore-menu-text">
        Order Food Online From Restaurants Serving In Bangalore From Swiggy
        &amp; Get 50% Off On First Order. Get Food Delivered Within 30 Mins.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((eachItem, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===eachItem.menu_name?"All":eachItem.menu_name)} className="explore-menu-list-item" key={index}>
              <img className={category===eachItem.menu_name?"active":""} src={eachItem.menu_image} alt="" />
              <p>{eachItem.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
