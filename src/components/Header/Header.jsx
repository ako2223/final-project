import React from 'react'
import style from "./Header.module.scss"
import Navigation from '../Navigation/Navgation'
import { BrowserRouter } from 'react-router-dom'

function Header() {
    return (
       <div className={style.header}>
       <p className={style.logo__text}>BAS</p>
       <BrowserRouter>
       <Navigation/>
       </BrowserRouter>
       </div> 
    )
}

export default Header
