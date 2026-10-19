import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Resume from "../Files/Riwa_Karam_Resume.pdf";

const profileGroups = [
    {
        title: "Research profiles",
        description: "You can find papers and publication details here.",
        links: [
            { label: "Google Scholar", detail: "Publications and citations", href: "https://scholar.google.com/citations?user=Xt1TuawAAAAJ&hl=en" },
            { label: "ORCID", detail: "Researcher profile · 0009-0009-4042-4530", href: "https://orcid.org/0009-0009-4042-4530" },
        ],
    },
    {
        title: "Stay in touch",
        description: "More places to connect, share ideas, and explore code.",
        links: [
            { label: "LinkedIn", detail: "Professional background and updates", href: "https://www.linkedin.com/in/riwakaram" },
            { label: "GitHub", detail: "Repositories and development activity", href: "https://github.com/riwakaram" },
        ],
    },
];

export default function About() {
    return (
        <main className="page-shell" id="main-content" tabIndex={-1}>
            <Header compact />
            <section className="contact-invitation" aria-labelledby="contact-invitation-title">
                <div className="contact-intro">
                    <p className="section-kicker">Get in touch</p>
                    <h2 id="contact-invitation-title">Say Hello!</h2>
                    <p>
                        Curious about a paper, interested in working together, or just
                        want to chat about robotics? Feel free to send a message.
                        Happy to exchange ideas and see where the conversation leads.
                    </p>
                    <Link className="contact-inline-link" to="/research">Research interests <span aria-hidden="true">→</span></Link>
                </div>
                <div className="contact-email-panel">
                    <p className="section-kicker">Send a note</p>
                    <a className="contact-email-address" href="mailto:rwkaram@uci.edu">rwkaram@uci.edu</a>
                    <p>Questions, ideas, or a quick hello.</p>
                    <a className="button-primary" href="mailto:rwkaram@uci.edu">Send an email <span aria-hidden="true">↗</span></a>
                    <div className="contact-alternative">
                        <span>You can also reach out here:</span>
                        <a href="mailto:riwa.karam@icloud.com">riwa.karam@icloud.com</a>
                    </div>
                </div>
            </section>

            <div className="contact-profile-groups">
                {profileGroups.map((group, index) => (
                    <section className="contact-profile-group" key={group.title} aria-labelledby={`contact-group-${index}`}>
                        <h2 id={`contact-group-${index}`}>{group.title}</h2>
                        <p>{group.description}</p>
                        <div className="contact-profile-links">
                            {group.links.map((item) => (
                                <a className="contact-card" href={item.href} target="_blank" rel="noopener noreferrer" key={item.label}>
                                    <strong>{item.label}</strong>
                                    <span>{item.detail}</span>
                                    <span className="visually-hidden"> (opens in a new tab)</span>
                                </a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <section className="contact-background" aria-labelledby="contact-background-title">
                <div>
                    <h2 id="contact-background-title">A bit more background</h2>
                    <p>The CV brings together education, experience, and service. For a shorter introduction, take a look at the résumé.</p>
                </div>
                <div className="contact-background-actions">
                    <Link className="button-secondary" to="/vitae">View the CV <span aria-hidden="true">→</span></Link>
                    <a className="button-secondary" href={Resume} target="_blank" rel="noopener noreferrer">Résumé (PDF) <span aria-hidden="true">↗</span><span className="visually-hidden"> (opens in a new tab)</span></a>
                </div>
            </section>
        </main>
    );
}
