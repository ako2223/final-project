import React from 'react'
import style from './Navigation.module.scss'
import { Link, NavLink } from 'react-router-dom';
import Home from '../../pages/Home/Home';

function Navgation() {
    return (
        <div>
          
                    <div className={style.navigate_links}>
                        <NavLink className={style.link} to={'/'}>Home</NavLink>
                        <NavLink className={style.link} to={'/about_us'}>About</NavLink>
                        <NavLink className={style.link} to={'/catalog'}>Catalog</NavLink>
                        <NavLink className={style.link} to={'/shop'}>Shop</NavLink>
                        <NavLink className={style.link} to={'/blog'}>Blog</NavLink>
                    </div>
                
             
        </div>
    )
}

export default Navgation
