import React from "react";
import style from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { CgSmartHomeCooker } from "react-icons/cg";

function Navgation() {
  return (
    <div>
      <div className={style.navigate_links}>
        <NavLink className={style.link} to={"/"}>
          Главная
        </NavLink>
        <NavLink className={style.link} to={"/about_us"}>
          Поиск
        </NavLink>
        <NavLink className={style.link} to={'/catalog'}>Интересное</NavLink>
                        <NavLink className={style.link} to={'/shop'}> <img className={style.icon__img} src={require('../../assets/img/anbunet.png')} alt="anbunet logo" />Сообщения</NavLink>
                        <NavLink className={style.link} to={'/blog'}>Уведомления</NavLink>
                        <NavLink className={style.link} to={'/news'}><div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><CgSmartHomeCooker size={20} /> Новый пост</div></NavLink>
                        <NavLink className={style.link} to={'/contacts'}>Профиль</NavLink>
                        <NavLink className={style.link} to={'/login'}>Вход</NavLink>
                        <NavLink className={style.link} to={'/registration'}>Регистрация</NavLink>
      </div>
    </div>
  );
}

export default Navgation;
