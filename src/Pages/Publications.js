import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";

const Publications = () => {
    const sections = [
        {
            id: "conference",
            title: "Conference Proceedings",
            content: <div className="card-section">Coming Soon!</div>,
        },
        {
            id: "journal",
            title: "Journal Papers",
            content: <div className="card-section">Coming Soon!</div>,
        },
        {
            id: "talks",
            title: "Invited Talks",
            content: (
                <div className="card-section">
                    <ul className="card-list">
                        <li>
                            45th Southern California Control Workshop |
                            University of California, San Diego | April 18, 2025
                            <br />
                            <b>R. Karam</b>, R.Lin, B.A. Butler, M. Egerstedt,{" "}
                            <i>
                                "Resource allocation with multi-team
                                collaboration based on Hamilton’s rule"
                            </i>
                        </li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div className="container home-container">
            {/* Header Section */}
            <Header />
            <Accordion sections={sections} />
        </div>
    );
};

export default Publications;
