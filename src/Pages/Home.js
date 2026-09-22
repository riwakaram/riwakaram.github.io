import React from "react";
import { Link } from "react-router-dom";
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
            title: "Second Conference: IEEE CDC 2026",
            text: "I will be attending the IEEE Conference on Decision and Control (CDC) 2026 in Hawaï. Excited to attend this conference this year and reconnect with peers and fellow researchers as well as attending interesting talks.",
        },
        {
            date: "September 15, 2026",
            title: "Invited ARM RoboTalk",
            text: 'I gave an invited ARM RoboTalk in Austin, TX, titled "Collaboration in Multi-Agent Systems," sharing my research on collaboration across multi-agent systems.',
        },
        {
            date: "September 10, 2026",
            title: "New arXiv Preprint: Freehand Sketching for Robot Swarms",
            text: 'Our paper, "Freehand Sketching for End-User Programming of Robot Swarms," is now available on arXiv. We explore how users can specify robot swarm formations through freehand drawings.',
        },
    ];

    const [latestUpdate, ...recentUpdates] = news;

    return (
        <main className="page-shell">
            <section className="hero-section">
                <div className="hero-copy">
                    <p className="eyebrow">
                        Multi-agent systems, robotics and machine learning
                    </p>
                    <h1>Riwa Karam</h1>
                    <p className="hero-lede">
                        I study how robotic teams collaborate and adapt across
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
                            Research
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
                            CV
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

            <section className="content-split">
                <div>
                    <p className="section-kicker">About</p>
                    <h2>
                        Building rigorous robotics research with practical
                        systems experience
                    </h2>
                </div>
                <div className="about-inline-links">
                    <p>
                        I am a fourth-year PhD candidate in the{" "}
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
                        . I am a member of the{" "}
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
                        . My research spans collaborative multi-agent systems,
                        optimization, machine learning, ecology robotics,
                        coverage control, formation control, and human-swarm
                        interaction.
                    </p>

                    <p>
                        Before my PhD, I earned a B.S. in Computer Engineering
                        from the{" "}
                        <a
                            href="https://www.balamand.edu.lb/home/Pages/default.aspx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            University of Balamand
                        </a>
                        , graduating as valedictorian, and completed an M.S. in
                        Electrical and Computer Engineering at{" "}
                        <a
                            href="https://www.uci.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            UC Irvine
                        </a>
                        . I have also worked in software engineering and
                        mechatronics research roles, including two internships
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
