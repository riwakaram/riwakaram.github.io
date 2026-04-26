import React from "react";

const Header = ({ compact = false }) => {
    return (
        <header className={`site-header ${compact ? "site-header-compact" : ""}`}>
            <p className="eyebrow">
                Robotics, Machine Learning, and Multi-Agent Systems
            </p>
            <h1 className="name">Riwa Karam</h1>
            <p className="description">
                PhD Candidate at the University of California, Irvine
            </p>
        </header>
    );
};

export default Header;
