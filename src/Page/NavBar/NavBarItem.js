import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const NavBarItem = ({ name, location, icon }) => {
    const path = `/${name}`
    return (
        <li className={location.pathname === path ? "active" : ""}>
            <NavLink to={path}>
                <img src={icon} />
                {name}
            </NavLink>
        </li>
    )
}

export default withRouter(NavBarItem)
