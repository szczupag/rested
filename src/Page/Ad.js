import React from "react";

const Ad = ({
    img,
    title,
    description
}) => (
    <div className="ad-wrapper">
        <img src={img} />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
);

export default Ad;