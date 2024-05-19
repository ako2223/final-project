import React from "react";
import style from "./Sidebar.module.scss";
import Navigation from "../Navigation/Navgation";
import img from "../../assets/img/anbunet.jpg"

function Sidebar() {
  return (
    <div className={style.sidebar}>
    <img className={style.logo__img} src={require('../../assets/img/anbunet.jpg')} alt="anbunet logo" />
      <Navigation />
    </div>
  );
}

export default Sidebar;
