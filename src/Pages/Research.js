import React from "react";
import Header from "../Components/Header";

const researchAreas = [
    {
        title: "Collaborative Multi-Agent Systems",
        text: "Designing algorithms for teams of robots and agents that collaborate across different capabilities, objectives, and operating conditions.",
        tags: ["cooperation", "coordination", "capability complementarity"],
    },
    {
        title: "Learning for Robotic Behavior",
        text: "Exploring machine learning methods for robotic systems and collaborative behavior.",
        tags: ["robot learning", "NP-hardness", "ecology-inspired robotics"],
    },
    {
        title: "Robotarium and Hardware Systems",
        text: "Supporting experimental infrastructure for multi-robot demonstrations, lab tours, reproducible workflows, robot maintenance, and robotics research.",
        tags: ["testbeds", "debugging", "Vicon system", "documentation"],
    },
    {
        title: "Human-Swarm Interaction",
        text: "Building interfaces and methods that help people specify, supervise, and reason about collective robot behavior.",
        tags: ["user study", "interfaces", "robot swarms"],
    },
];

const Research = () => {
    return (
        <main className="page-shell">
            <Header compact />
            <section className="section-intro">
                <p className="section-kicker">Research Focus</p>
                <h2>
                    Robotic teams that collaborate with structure, context, and
                    purpose.
                </h2>
                <p>
                    My research sits at the intersection of robotics, machine
                    learning, and optimization, with an emphasis on multi-agent
                    systems that collaborate across diverse tasks, team
                    structures, and experimental platforms.
                </p>
            </section>

            <section className="research-grid">
                {researchAreas.map((area) => (
                    <article className="research-card" key={area.title}>
                        <h3>{area.title}</h3>
                        <p>{area.text}</p>
                        <div className="tag-row">
                            {area.tags.map((tag) => (
                                <span className="pill" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </section>

            <section className="feature-band">
                <div>
                    <p className="section-kicker">Current Direction</p>
                    <h2>
                        Collaboration in Multi-Agent Systems: From Assignment to
                        Learning
                    </h2>
                </div>
                <p>
                    Recent research explores different ways of achieving
                    collaborative behavior in complex multi-agent systems. In
                    particular, collaboration arises when interaction expands
                    the agents' effective action sets, enabling collective
                    outcomes that would be unattainable through isolated
                    individual actions. My current research explores this
                    concept in applications such as resource allocation with
                    ecology-inspired models of altruism, as well as human-swarm
                    interaction.
                </p>
            </section>
        </main>
    );
};

export default Research;
