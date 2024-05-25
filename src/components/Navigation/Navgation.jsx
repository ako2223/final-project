import React from "react";
import style from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { CgSmartHomeCooker } from "react-icons/cg";
import { AiOutlineLogin } from "react-icons/ai";
import { FcHome, FcSearch, FcBinoculars, FcAbout, FcGlobe, FcMultipleCameras, FcLike, FcButtingIn, FcRegisteredTrademark } from "react-icons/fc";


function Navgation() {
  return (
    <div>
      <div className={style.navigate_links}>
        <NavLink className={style.link} to={"/"}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><FcHome size={20} />Главная</div>
        </NavLink>
        <NavLink className={style.link} to={"/about_us"}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><FcSearch size={20} /> Поиск</div>
        </NavLink>
        <NavLink className={style.link} to={'/catalog'}><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><FcBinoculars size={20} /> Интересное</div></NavLink>
                        <NavLink className={style.link} to={'/shop'}> <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><FcAbout size={20} /> Сообщения</div></NavLink>
                        <NavLink className={style.link} to={'/blog'}><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><FcLike size={20} /> Уведомления</div></NavLink>
                        <NavLink className={style.link} to={'/newpost'}><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><FcMultipleCameras size={20} /> Новый пост</div></NavLink>
                        <NavLink className={style.link} to={'/contacts'}><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><FcButtingIn size={20} /> Профиль</div></NavLink>
                        <NavLink className={style.link} to={'/login'}><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><AiOutlineLogin size={20} /> Вход</div></NavLink>
                        <NavLink className={style.link} to={'/registration'}><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><FcRegisteredTrademark size={20} /> Регистрация</div></NavLink>
      </div>
    </div>
  );
}

export default Navgation;
