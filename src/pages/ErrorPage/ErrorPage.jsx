import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
    return (
     <div><h1>404: Такой страницы не существует</h1>
     <h1>Перейдите на   <NavLink  to={"/"}>
          главную страницу: <u>Home </u>
        </NavLink></h1>
     </div>   
    )
}

export default ErrorPage
