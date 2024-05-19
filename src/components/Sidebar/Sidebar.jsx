import React from "react";
import style from "./Sidebar.module.scss";
import Navigation from "../Navigation/Navgation";
import img from "../../assets/img/anbunet.png"

function Sidebar() {
  return (
    <div className={style.sidebar}>
    <img className={style.logo__img} src={require('../../assets/img/anbunet.png')} alt="anbunet logo" />
    <h3 className={style.anbunet}>Anbunet</h3>
      <Navigation />
    </div>
  );
}

export default Sidebar;
