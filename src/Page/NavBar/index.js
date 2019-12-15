import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => (
    <div className="navbar-wrapper">
        <ul className="navbar mobile-container">
            <NavBarItem name="sleep" />
            <NavBarItem name="report" />
            <NavBarItem name="nap" />
            <NavBarItem name="plan" />
        </ul>
    </div>
)

export default NavBar