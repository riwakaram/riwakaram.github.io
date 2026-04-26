import React from "react";
import Header from "../Components/Header";
import CDC2025Paper from "../Files/CDC2025.pdf";
import CDC2025Presentation from "../Files/CDC2025Pres.pdf";
import GEECSANTSPoster from "../Files/GEECSANTS Poster 2025.pdf";
import MSThesis from "../Files/MS-Thesis.pdf";
import SCCW2025Presentation from "../Files/SCCW2025.pdf";
import SurveyPaper from "../Files/Survey.pdf";

const publications = [
    {
        type: "Preprint",
        status: "Submitted",
        title: "Learning Altruistic Collaboration in Heterogeneous Multi-Team Systems",
        authors: "R. Karam, R. Lin, B. A. Butler, M. Egerstedt",
        venue: "arXiv preprint",
        // links: [
        //     {
        //         href: "#",
        //         text: "PDF",
        //     },
        //     {
        //         href: "#",
        //         text: "DOI",
        //     },
        // ],
    },
    {
        type: "Preprint",
        status: "Submitted",
        title: "Collaboration in Multi-Robot Systems: Taxonomy and Survey over Frameworks for Collaboration",
        authors:
            "R. Karam, A. A. Nguyen, R. Lin, D. R. Martin, D. Morales, B. A. Butler, M. Egerstedt",
        venue: "arXiv preprint",
        links: [
            {
                href: SurveyPaper,
                text: "PDF",
            },
            {
                href: "https://doi.org/10.48550/arXiv.2603.23898",
                text: "DOI",
            },
        ],
    },
    {
        type: "Conference Paper",
        status: "Accepted",
        title: "Resource Allocation for Multi-Team Collaboration Based on Hamilton's Rule",
        authors: "R. Karam, R. Lin, B. A. Butler, M. Egerstedt",
        venue: "IEEE 64th Conference on Decision and Control, Rio de Janeiro, Brazil, 2025, pp. 6891-6898",
        links: [
            {
                href: CDC2025Paper,
                text: "PDF",
            },
            {
                href: "https://doi.org/10.1109/CDC57313.2025.11312845",
                text: "DOI",
            },
        ],
    },
    {
        type: "Thesis",
        status: "Completed",
        title: "A Graphical Interface for Specifying and Establishing Multi-Robot Formations",
        authors: "R. Karam",
        venue: "M.S. Thesis, University of California, Irvine, 2025",
        links: [
            {
                href: MSThesis,
                text: "PDF",
            },
            {
                href: "https://escholarship.org/uc/item/25p8p0kq",
                text: "Official Record",
            },
        ],
    },
];

const presentations = [
    {
        type: "PhD Requirement",
        title: "Collaboration in Multi-Agent Systems: From Assignment to Learning",
        venue: "PhD Qualifying Examination",
        location: "University of California, Irvine",
        date: "May 21, 2026",
    },
    {
        type: "Conference Presentation",
        title: "Resource Allocation for Multi-Team Collaboration Based on Hamilton's Rule",
        venue: "IEEE 64th Conference on Decision and Control (CDC)",
        location: "Rio De Janeiro, Brazil",
        date: "December 12, 2025",
        links: [
            {
                href: CDC2025Presentation,
                text: "Slides",
            },
            {
                href: "https://youtu.be/BP2W7RUw0c4",
                text: "Recording",
            },
        ],
    },
    {
        type: "Poster",
        title: "A Graphical Interface for Specifying and Establishing Multi-Robot Formations",
        venue: "GEECS Annual Technology Showcase",
        location: "University of California, Irvine",
        date: "June 6, 2025",
        linkText: "Poster PDF",
        links: [
            {
                href: GEECSANTSPoster,
                text: "Poster PDF",
            },
        ],
    },
    {
        type: "Invited Talk",
        title: "Resource Allocation for Multi-Team Collaboration Based on Hamilton's Rule",
        venue: "45th Southern California Control Workshop",
        location: "University of California, San Diego",
        date: "April 18, 2025",
        links: [
            {
                href: SCCW2025Presentation,
                text: "Slides",
            },
        ],
    },
];

const PublicationCard = ({ item }) => (
    <article className="publication-card">
        <div className="publication-meta">
            <span>{item.type}</span>
            {item.status && <span>{item.status}</span>}
        </div>
        <h3>{item.title}</h3>
        {item.authors && <p className="authors">{item.authors}</p>}
        <p>{item.venue}</p>
        {(item.location || item.date) && (
            <p className="muted">
                {[item.location, item.date].filter(Boolean).join(" | ")}
            </p>
        )}
        {(item.links || item.link) && (
            <div className="publication-links">
                {item.links ? (
                    item.links.map((link) => (
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={link.text}
                        >
                            {link.text}
                        </a>
                    ))
                ) : (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.linkText}
                    </a>
                )}
            </div>
        )}
    </article>
);

const Publications = () => {
    return (
        <main className="page-shell">
            <Header compact />
            <section className="section-intro">
                <p className="section-kicker">Publications & Talks</p>
                <h2>Research outputs, presentations, and posters.</h2>
                <p>
                    A curated list of peer-reviewed publications and selected
                    research presentations.
                </p>
            </section>

            <section className="publication-section">
                <div className="section-heading-row">
                    <h2>Publications</h2>
                </div>
                <div className="publication-grid">
                    {publications.map((publication) => (
                        <PublicationCard
                            item={publication}
                            key={publication.title}
                        />
                    ))}
                </div>
            </section>

            <section className="publication-section">
                <div className="section-heading-row">
                    <h2>Presentations</h2>
                </div>
                <div className="publication-grid">
                    {presentations.map((presentation) => (
                        <PublicationCard
                            item={presentation}
                            key={presentation.title}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Publications;
