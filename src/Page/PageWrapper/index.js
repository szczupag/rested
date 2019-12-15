import React from 'react'
import NavBar from '../NavBar'

const PageWrapper = ({ children }) => (
    <div className="page-wrapper">
        <NavBar />
        <div className="mobile-container content-wrapper">{children}</div>
    </div>
)

export default PageWrapper