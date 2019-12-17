import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ children, to, onClick }) => (
    <div className="btn-wrapper">
        {to ? <NavLink to={to}>{children}</NavLink> : <button onClick={onClick}>{children}</button>}
    </div>
)

export default Button