import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg main-nav">
        <div className="navbar-brand nav">
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink exact className="nav-link" aria-current="page" to="/">Заметки</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">Информация</NavLink>
            </li>
      </ul>
    </nav>
)