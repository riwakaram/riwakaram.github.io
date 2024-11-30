import React from "react";

const Card = ({ title, text }) => {
    return (
        <div className="card my-3 p-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <button className="btn">Learn More</button>
        </div>
    );
};

export default Card;
