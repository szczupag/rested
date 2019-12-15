import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const NavBarItem = ({ name, location }) => {
    const path = `/${name}`
    return (
        <li className={location.pathname === path ? "active" : ""}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    )
}

export default withRouter(NavBarItem)
