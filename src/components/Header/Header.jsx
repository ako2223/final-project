import React from "react";
import style from "./Header.module.scss";
import Navigation from "../Navigation/Navgation";

function Header() {
  return (
    <div className={style.header}>
      <p className={style.logo__text}>BAS</p>
      <Navigation />
    </div>
  );
}

export default Header;
