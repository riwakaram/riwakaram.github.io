import React from "react";
import { Link } from "react-router-dom";
import Photo from "../Images/Profile Pic.jpg";
import Resume from "../Files/RiwaKaram_Resume.pdf";

const Home = () => {
    const highlights = [
        "PhD candidate in Electrical Engineering and Computer Science at UC Irvine",
        "Member of the UCI Robot Ecology Lab advised by Professors Magnus Egerstedt and Yanning Shen",
        "Researching multi-agent systems, optimization, machine learning, ecology robotics, coverage control, formation control, and human-swarm interaction",
    ];

    const news = [
        {
            date: "May 21, 2026",
            title: "Passed my PhD Qualifying Exam",
        },
        {
            date: "December 8-12, 2025",
            title: "Presented my first-author paper at IEEE CDC 2025",
        },
        {
            date: "September 10, 2025",
            title: "Completed my second ASML internship",
        },
    ];

    return (
        <main className="page-shell">
            <section className="hero-section">
                <div className="hero-copy">
                    <p className="eyebrow">
                        Robotics, Machine Learning, and Multi-Agent Systems
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
                <div>
                    <p>
                        I am a third-year PhD candidate in the Electrical
                        Engineering and Computer Science Department at the
                        University of California, Irvine, and a member of the
                        UCI Robot Ecology Lab, advised by Professors Magnus
                        Egerstedt and Yanning Shen. My research spans
                        collaborative multi-agent systems, optimization, machine
                        learning, ecology robotics, coverage control, formation
                        control, and human-swarm interaction.
                    </p>
                    <p>
                        Before my PhD, I earned a B.S. in Computer Engineering
                        from the University of Balamand, graduating as
                        valedictorian, and completed an M.S. in Electrical and
                        Computer Engineering at UC Irvine. I have also worked in
                        software engineering and mechatronics research roles,
                        including two internships at ASML focused on
                        high-precision systems, statistical modeling, and
                        Bayesian machine learning.
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
                <div className="timeline compact-timeline">
                    {news.map((item) => (
                        <article className="timeline-item" key={item.title}>
                            <time>{item.date}</time>
                            <h3>{item.title}</h3>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
