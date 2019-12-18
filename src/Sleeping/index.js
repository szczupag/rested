import React from 'react'

import './style.css'

const Sleeping = ({ children }) => (
    <div className="spinner-wrapper">
        <div className="spinner-box">
            <div className="circle-border">
                <div className="circle-core"></div>
            </div>
        </div>
        <div className="spinner-content">{children}</div>
    </div>
)

export default Sleeping;
