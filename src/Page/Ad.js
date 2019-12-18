import React from "react";

const Ad = ({
    img,
    title,
    description
}) => (
        <div className="ad-box-wrapper">
            <img src={img} />
            <div className="ad-box-text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );

export default Ad;