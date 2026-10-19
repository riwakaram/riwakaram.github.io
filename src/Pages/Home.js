import React from "react";
import { Link } from "react-router-dom";
import ResearchExplorer from "../Components/ResearchExplorer";
import NetworkArt from "../Components/NetworkArt";
import Photo from "../Images/Profile_Pic.jpg";
import Resume from "../Files/Riwa_Karam_Resume.pdf";

const Home = () => {
    const highlights = [
        "PhD Candidate in Electrical Engineering and Computer Science at UC Irvine",
        "Member of the UCI Robot Ecology Lab advised by Professors Magnus Egerstedt and Yanning Shen",
        "Researching multi-agent systems, machine learning, ecology robotics, and human-swarm interaction",
    ];

    const news = [
        {
            date: "December 14-18, 2026",
            title: "Upcoming: IEEE CDC 2026",
            text: "Getting ready for IEEE CDC 2026 in Hawaii! After a first CDC presentation in Rio de Janeiro in 2025, another chance to catch up with the control community and exchange ideas is ahead.",
        },
        {
            date: "October 23, 2026",
            title: "Upcoming: SoCal Control Workshop at UC Santa Barbara",
            text: "Heading to UCSB for the Southern California Control Workshop! Looking forward to new ideas and conversations with the regional control community at Loma Pelona.",
        },
        {
            date: "September 15, 2026",
            title: "Invited ARM RoboTalk: Collaboration in Multi-Agent Systems",
            text: "Shared ideas on multi-agent collaboration at an invited ARM RoboTalk in Austin, TX—from complementary robot capabilities to ecology-inspired resource sharing and graph neural networks.",
        },
    ];

    const [latestUpdate, ...recentUpdates] = news;

    return (
        <main className="page-shell" id="main-content" tabIndex={-1}>
            <section className="hero-section">
                <NetworkArt className="hero-network" />
                <div className="hero-copy">
                    <p className="eyebrow">
                        Multi-agent systems, robotics and machine learning
                    </p>
                    <h1>Riwa Karam<span className="accent-dot" aria-hidden="true">.</span></h1>
                    <p className="hero-lede">
                        Exploring how robotic teams collaborate and adapt across
                        complex environments.
                    </p>
                    <div className="tag-row">
                        <span className="pill">Multi-Agent Systems</span>
                        <span className="pill">Machine Learning</span>
                        <span className="pill">Optimization</span>
                        <span className="pill">Human-Swarm Interaction</span>
                    </div>
                    <div className="hero-actions">
                        <Link className="button-primary" to="/research">
                            Explore research <span aria-hidden="true">↗</span>
                        </Link>
                        <Link className="button-secondary" to="/publications">
                            Publications
                        </Link>
                        <a
                            className="button-secondary"
                            href={Resume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume (PDF)
                        </a>
                    </div>
                </div>
                <div className="hero-media">
                    <img
                        src={Photo}
                        alt="Riwa Karam"
                        className="profile-image"
                        loading="eager"
                    />
                </div>
            </section>

            <section className="summary-grid">
                {highlights.map((highlight) => (
                    <article className="summary-card" key={highlight}>
                        <p>{highlight}</p>
                    </article>
                ))}
            </section>

            <ResearchExplorer />

            <section className="content-split">
                <div>
                    <p className="section-kicker">About</p>
                    <h2>
                        Robotics research grounded in
                        practical experience
                    </h2>
                </div>
                <div className="about-inline-links">
                    <p>
                        Fourth-year PhD candidate in the{" "}
                        <a
                            href="https://engineering.uci.edu/dept/eecs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Electrical Engineering and Computer Science
                            Department
                        </a>{" "}
                        at the{" "}
                        <a
                            href="https://www.uci.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            University of California, Irvine
                        </a>
                        . Member of the{" "}
                        <a
                            href="https://faculty.sites.uci.edu/robotecology/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UCI Robot Ecology Lab
                        </a>{" "}
                        and part of the{" "}
                        <a
                            href="https://robotics.eng.uci.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Center for Resilient Autonomous Systems
                        </a>{" "}
                        at UCI, advised by Professors{" "}
                        <a
                            href="https://www.linkedin.com/in/magnus-egerstedt-26a46795/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Magnus Egerstedt
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://engineering.uci.edu/users/yanning-shen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Yanning Shen
                        </a>
                        . Exploring collaborative multi-agent systems,
                        optimization, machine learning, ecology robotics,
                        coverage control, formation control, and human-swarm
                        interaction.
                    </p>

                    <p>
                        Earned a B.S. in Computer Engineering
                        from the{" "}
                        <a
                            href="https://www.balamand.edu.lb/home/Pages/default.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            University of Balamand
                        </a>
                        , graduating as valedictorian, followed by an M.S. in
                        Electrical and Computer Engineering at{" "}
                        <a
                            href="https://www.uci.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UC Irvine
                        </a>
                        . Bringing experience from software engineering and
                        mechatronics research, including two internships
                        at{" "}
                        <a
                            href="https://www.asml.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ASML
                        </a>{" "}
                        focused on high-precision systems, statistical modeling,
                        and Bayesian machine learning.
                    </p>
                </div>
            </section>

            <section className="latest-section">
                <div className="section-heading-row">
                    <div>
                        <p className="section-kicker">Latest</p>
                        <h2>Recent updates</h2>
                    </div>
                    <Link to="/news" className="text-link">
                        View all news
                    </Link>
                </div>
                <div className="home-news-grid">
                    <article className="home-news-feature">
                        <time>{latestUpdate.date}</time>
                        <h3>{latestUpdate.title}</h3>
                        <p>{latestUpdate.text}</p>
                    </article>
                    <div className="home-news-list">
                        {recentUpdates.map((item) => (
                            <article
                                className="home-news-card"
                                key={item.title}
                            >
                                <time>{item.date}</time>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
