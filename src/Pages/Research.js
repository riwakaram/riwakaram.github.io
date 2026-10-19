import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import ResearchExplorer from "../Components/ResearchExplorer";
import { researchAreas } from "../data/researchAreas";

const Research = () => {
    return (
        <main className="page-shell" id="main-content" tabIndex={-1}>
            <Header compact />
            <section className="section-intro">
                <p className="section-kicker">Research Focus</p>
                <h2>
                    Robotic teams that collaborate with structure, context, and
                    purpose.
                </h2>
                <p>
                    Working at the intersection of robotics, machine learning,
                    and optimization to understand how teams collaborate—and
                    turn those ideas into algorithms, interfaces, and experiments.
                </p>
            </section>

            <ResearchExplorer onResearchPage />

            <section className="research-grid" aria-label="Research areas">
                {researchAreas.map((area, index) => (
                    <article className="research-card" id={area.id} key={area.title}>
                        <div className="research-image"><img src={area.image} alt={area.alt} loading="lazy" width="1200" height="800" /><span className="research-index">0{index + 1}</span></div>
                        <div className="research-caption">{area.caption}</div>
                        <div className="research-card-copy">
                        <h3>{area.title}</h3>
                        <p>{area.text}</p>
                        <div className="tag-row">
                            {area.tags.map((tag) => (
                                <span className="pill" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="related-research">
                            <h4>Related work</h4>
                            <ul>
                                {area.related.map((work) => (
                                    <li key={work.href}>
                                        {work.href.startsWith("/") ? (
                                            <Link to={work.href}>{work.title}<span aria-hidden="true">→</span></Link>
                                        ) : (
                                            <a href={work.href} target="_blank" rel="noopener noreferrer">{work.title}<span aria-hidden="true">↗</span></a>
                                        )}
                                        <span className="related-meta">{work.detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </article>
                ))}
            </section>

            <p className="artwork-note">Conceptual illustrations of the research areas.</p>
            <div className="research-next"><Link className="text-link" to="/publications">Explore publications & presentations <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/projects">Projects <span aria-hidden="true">↗</span></Link></div>

            <section className="feature-band">
                <div>
                    <p className="section-kicker">Current Direction</p>
                    <h2>
                        Collaboration in Multi-Agent Systems: From Assignment to
                        Learning
                    </h2>
                </div>
                <p>
                    Developing ways for robot teams to share resources and
                    combine complementary capabilities. Bringing together
                    ecology-inspired models of altruism, optimization, and
                    learning to guide when and how teams exchange robots.
                    Alongside these allocation methods, exploring intuitive
                    interfaces that let people shape collective robot behavior.
                </p>
            </section>
        </main>
    );
};

export default Research;
