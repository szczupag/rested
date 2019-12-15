import React from 'react'
import NavBarItem from './NavBarItem'
import nap from '../../assets/nap.svg'
import sleep from '../../assets/sleep.svg'
import plan from '../../assets/plan.svg'
import report from '../../assets/report.svg'

const NavBar = () => (
    <div className="navbar-wrapper">
        <ul className="navbar mobile-container">
            <NavBarItem name="sleep" icon={sleep} />
            <NavBarItem name="report" icon={report} />
            <NavBarItem name="nap" icon={nap} />
            <NavBarItem name="plan" icon={plan} />
        </ul>
    </div>
)

export default NavBar