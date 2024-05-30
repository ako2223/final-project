import React from "react";
import style from "./Sidebar.module.scss";
import Navigation from "../Navigation/Navgation";

function Sidebar() {
  return (
    <div className={style.rebar}>
      <div className={style.sidebar}>
        <img
          className={style.logo__img}
          src={require("../../assets/img/anbunet.png")}
          alt="anbunet logo"
        />
        <h3 className={style.anbunet}>Anbunet</h3>
        <Navigation />
      </div>
    </div>
  );
}

export default Sidebar;
