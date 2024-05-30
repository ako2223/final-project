import React from "react";
import style from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { CgSmartHomeCooker } from "react-icons/cg";
import { AiOutlineLogin } from "react-icons/ai";
import { FcHome, FcSearch, FcBinoculars, FcAbout, FcGlobe, FcMultipleCameras, FcLike, FcButtingIn, FcRegisteredTrademark } from "react-icons/fc";


function Navgation() {
  return (
    
      <div className={style.navigate_links}>
        <NavLink className={style.link} to={"/"}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><FcHome size={20} /><span className={style.hidden2}>Главная</span></div>
        </NavLink>
        <NavLink className={style.link} to={"/about_us"}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><FcSearch size={20} /> Поиск</div>
        </NavLink>
        <NavLink className={style.link} to={'/catalog'}><div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><FcBinoculars size={20} /> Интересное</div></NavLink>
                        <NavLink className={style.link} to={'/shop'}> <div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><FcAbout size={20} /> Сообщения</div></NavLink>
                        <NavLink className={style.link} to={'/blog'}><div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><FcLike size={20} /> Уведомления</div></NavLink>
                        <NavLink className={style.link} to={'/newpost'}><div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><FcMultipleCameras size={20} /> Новый пост</div></NavLink>
                        <NavLink className={style.link} to={'/contacts'}><div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><FcButtingIn size={20} /> Профиль</div></NavLink>
                        <NavLink className={style.link} to={'/login'}><div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><AiOutlineLogin size={20} /> Вход</div></NavLink>
                        <NavLink className={style.link} to={'/registration'}><div style={{display: "flex", justifyContent: "center", alignItems: "center",gap: "5px"}}><FcRegisteredTrademark size={20} /> Регистрация</div></NavLink>
      </div>
    
  );
}

export default Navgation;
