import React from "react";
import style from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

function Navgation() {
  return (
    <div>
      <div className={style.navigate_links}>
        <NavLink className={style.link} to={"/"}>
          Home
        </NavLink>
        <NavLink className={style.link} to={"/about_us"}>
          About
        </NavLink>
        <NavLink className={style.link} to={'/catalog'}>Catalog</NavLink>
                        <NavLink className={style.link} to={'/shop'}>Shop</NavLink>
                        <NavLink className={style.link} to={'/blog'}>Blog</NavLink>
                        <NavLink className={style.link} to={'/login'}>Login</NavLink>
                        <NavLink className={style.link} to={'/registration'}>Register</NavLink>
      </div>
    </div>
  );
}

export default Navgation;
