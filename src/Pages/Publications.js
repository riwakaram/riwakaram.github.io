import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import GEECSANTSPoster from "../Files/GEECSANTS Poster 2025.pdf";

const Publications = () => {
    const sections = [
        {
            id: "conference",
            title: "Conference Proceedings",
            content: (
                <div className="card-section">
                    <ul className="card-list">
                        <li>
                            <b>R. Karam</b>, R. Lin, B.A. Butler, M. Egerstedt,
                            "Resource Allocation with Multi-Team Collaboration
                            based on Hamilton's Rule,"{" "}
                            <i>2025 IEEE Conference on Decision and Control</i>{" "}
                            (Under Review)
                        </li>
                        <li>
                            <b>R. Karam</b>, M. Egerstedt, "A Graphical
                            Interface for Specifying and Establishing
                            Multi-Robot Formations,"{" "}
                            <i>
                                2025 IEEE/RSJ International Conference on
                                Intelligent Robots and Systems
                            </i>{" "}
                            (Under Review)
                        </li>
                    </ul>
                </div>
            ),
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
                            <b>R. Karam</b>, R.Lin, B.A. Butler, M. Egerstedt,
                            "Resource Allocation with Multi-Team Collaboration
                            based on Hamilton’s Rule."
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "posters",
            title: "Poster Presentations",
            content: (
                <div className="card-section">
                    <ul className="card-list">
                        <li>
                            GEECS Annual Technology Showcase (GEECSANTS) 2025 |
                            University of California, Irvine | June 6, 2025
                            <br />
                            <b>R. Karam</b> and Magnus Egerstedt, "A Graphical
                            Interface for Specifying and Establishing
                            Multi-Robot Formations"
                            <br />
                            Check out the poster{" "}
                            <a
                                href={GEECSANTSPoster}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here
                            </a>
                            .
                        </li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div className="container home-container">
            <Header />
            <Accordion sections={sections} />
        </div>
    );
};

export default Publications;
