import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import PublicationGraph from "../Components/PublicationGraph";
import CDC2025Paper from "../Files/CDC2025.pdf";
import CDC2025Presentation from "../Files/CDC2025Pres.pdf";
import GEECSANTS2026Poster from "../Files/GEECS_2026_Poster.pdf";
import GEECSANTSPoster from "../Files/GEECSANTS_Poster_2025.pdf";
import MSThesis from "../Files/MS_Thesis.pdf";
import SCCW2025Presentation from "../Files/SCCW2025.pdf";
import SurveyPaper from "../Files/Survey.pdf";
import TROPaper from "../Files/TRO.pdf";
import QualExam from "../Files/Qual_Exam.pdf";
import ICRAPaper from "../Files/ICRA2026.pdf";
import ARMTalkSlidesPDF from "../Files/External Talk - Collaboration in Multi-Agent Systems - Riwa Karam.pdf";

const publications = [
    {
        id: "freehand-sketching",
        year: "2026",
        topic: "Human–swarm interaction",
        graph: "sketch",
        overview: "Turning freehand drawings into robot swarm formations, with a user study exploring how accessible the interface is to non-experts.",
        type: "Preprint",
        status: "Submitted",
        title: "Freehand Sketching for End-User Programming of Robot Swarms",
        authors: "R. Karam, I. Kuo, M. Egerstedt",
        venue: "arXiv preprint",
        links: [
            {
                href: ICRAPaper,
                text: "PDF",
            },
            {
                href: "https://doi.org/10.48550/arXiv.2609.11078",
                text: "DOI",
            },
            {
                href: "https://www.youtube.com/watch?v=iVbwI8mktBI",
                text: "Experiments Video",
            },
        ],
    },
    {
        id: "altruistic-collaboration",
        year: "2026",
        topic: "Learning & resource sharing",
        graph: "learning",
        overview: "Combining Hamilton’s rule with graph neural networks to decide when heterogeneous teams should share robots.",
        type: "Preprint",
        status: "Under Review in IEEE T-RO",
        title: "Learning Altruistic Collaboration in Heterogeneous Multi-Team Systems",
        authors: "R. Karam, R. Lin, B. A. Butler, M. Egerstedt",
        venue: "arXiv preprint",
        links: [
            {
                href: TROPaper,
                text: "PDF",
            },
            {
                href: "https://doi.org/10.48550/arXiv.2605.21723",
                text: "DOI",
            },
            {
                href: "https://youtu.be/-2q-zy0wItk",
                text: "Experiments Video",
            },
        ],
    },
    {
        id: "collaboration-survey",
        year: "2026",
        topic: "A taxonomy of collaboration",
        graph: "survey",
        overview: "Distinguishing cooperation, coordination, and collaboration, and bringing together the frameworks that support them.",
        type: "Preprint",
        status: "Under Review in IEEE CSM",
        title: "Collaboration in Multi-Robot Systems: Taxonomy and Survey of Frameworks for Collaboration",
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
        id: "hamiltons-rule",
        year: "2025",
        topic: "Ecology-inspired collaboration",
        graph: "teams",
        overview: "Using the costs and benefits of robot transfers to guide resource allocation across teams with different missions.",
        type: "Conference Paper",
        status: "Published in IEEE CDC 2025",
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
        id: "masters-thesis",
        year: "2025",
        topic: "Drawing to formation",
        graph: "formation",
        overview: "Connecting a graphical interface, computer vision, and formation control to turn user-defined shapes into multi-robot formations.",
        type: "Thesis",
        status: "",
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
        type: "Invited Talk",
        title: "Collaboration in Multi-Agent Systems",
        venue: "ARM Robotalk - External Talk",
        location: "Austin, TX",
        date: "September 15, 2026",
        id: "arm-robotalk",
        links: [
            {
                href: "https://www.arm.com",
                text: "ARM Inc. Website",
            },
            {
                href: ARMTalkSlidesPDF,
                text: "Slides",
            },
        ],
    },
    {
        type: "Poster",
        title: "Learning Altruistic Collaboration in Heterogeneous Multi-Team Systems",
        venue: "GEECS Annual Technology Showcase",
        location: "University of California, Irvine",
        date: "June 5, 2026",
        id: "geecs-2026",
        relatedPaper: "altruistic-collaboration",
        links: [
            {
                href: "https://geecs.eng.uci.edu/geecsants2026/",
                text: "Showcase Website",
            },
            {
                href: GEECSANTS2026Poster,
                text: "Poster PDF",
            },
        ],
    },
    {
        type: "PhD Requirement",
        title: "Collaboration in Multi-Agent Systems: From Assignment to Learning",
        venue: "PhD Qualifying Examination",
        location: "University of California, Irvine",
        date: "May 21, 2026",
        id: "qualifying-exam",
        links: [
            {
                href: QualExam,
                text: "Slides",
            },
        ],
    },
    {
        type: "Conference Presentation",
        title: "Resource Allocation for Multi-Team Collaboration Based on Hamilton's Rule",
        venue: "IEEE 64th Conference on Decision and Control (CDC)",
        location: "Rio De Janeiro, Brazil",
        date: "December 12, 2025",
        id: "cdc-2025-talk",
        relatedPaper: "hamiltons-rule",
        links: [
            {
                href: "https://cdc2025.ieeecss.org/",
                text: "Conference Website",
            },
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
        id: "geecs-2025",
        relatedPaper: "masters-thesis",
        linkText: "Poster PDF",
        links: [
            {
                href: "https://geecs.eng.uci.edu/geecsants2025/",
                text: "Showcase Website",
            },
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
        id: "socal-2025-talk",
        relatedPaper: "hamiltons-rule",
        links: [
            {
                href: "http://terrano.ucsd.edu/jorge/sccw/index.html",
                text: "Workshop Website",
            },
            {
                href: SCCW2025Presentation,
                text: "Slides",
            },
        ],
    },
];

const filters = [
    { label: "All", type: "All" },
    { label: "Preprints", type: "Preprint" },
    { label: "Published", type: "Conference Paper" },
    { label: "Thesis", type: "Thesis" },
];

const ResourceLinks = ({ links }) => (
    <div className="publication-links">
        {links.map((link) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.text}
                className={/PDF|Slides/.test(link.text) ? "publication-document-link" : undefined}>
                {link.text}<span aria-hidden="true">↗</span>
            </a>
        ))}
    </div>
);

const PublicationCard = ({ item, index }) => (
    <article className="publication-card paper-card" id={item.id} aria-labelledby={`${item.id}-title`}>
        <div className={`paper-cover paper-cover-${item.graph}`}>
            <div className="paper-cover-index"><span>{item.year}</span><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
            <PublicationGraph variant={item.graph} />
            <span className="paper-topic">{item.topic}</span>
        </div>
        <div className="paper-content">
            <div className="publication-meta"><span>{item.type}</span>{item.status && <span className="paper-status">{item.status}</span>}</div>
            <h3 id={`${item.id}-title`}>{item.title}</h3>
            <p className="authors"><strong>R. Karam</strong>{item.authors.slice("R. Karam".length)}</p>
            <p className="paper-venue">{item.venue}</p>
            <p className="paper-overview">{item.overview}</p>
            <ResourceLinks links={item.links} />
        </div>
    </article>
);

const PresentationCard = ({ item, onOpenPaper }) => (
    <article className="publication-card presentation-card" id={item.id} aria-labelledby={`${item.id}-title`}>
        <div className="presentation-card-top">
            <span className="presentation-type">{item.type}</span>
            <time>{item.date}</time>
        </div>
        <h3 id={`${item.id}-title`}>{item.title}</h3>
        <p className="presentation-venue">{item.venue}</p>
        <p className="presentation-location">{item.location}</p>
        <ResourceLinks links={item.links} />
        {item.relatedPaper && <Link className="presentation-paper-link" to={`/publications#${item.relatedPaper}`} onClick={onOpenPaper}>Explore the related {item.relatedPaper === "masters-thesis" ? "thesis" : "paper"}<span aria-hidden="true">↑</span></Link>}
    </article>
);

const Publications = () => {
    const [filter, setFilter] = useState("All");
    const { hash } = useLocation();
    useEffect(() => { setFilter("All"); }, [hash]);
    const visible = publications.filter((item) => filter === "All" || item.type === filter);
    const years = [...new Set(presentations.map((item) => item.date.slice(-4)))];

    return (
        <main className="page-shell publications-page" id="main-content" tabIndex={-1}>
            <Header compact />
            <section className="section-intro publications-intro">
                <div>
                    <p className="section-kicker">Publications & Presentations</p>
                    <h2>Ideas on paper.<br />Conversations beyond it.</h2>
                    <p>Explore papers on collaboration, learning, and human–swarm interaction, alongside the talks and posters that share those ideas.</p>
                </div>
                <nav className="publication-section-nav" aria-label="Publication sections">
                    <a href="#papers"><strong>{publications.length}</strong><span>Papers & thesis</span><span aria-hidden="true">↓</span></a>
                    <a href="#presentations"><strong>{presentations.length}</strong><span>Talks & posters</span><span aria-hidden="true">↓</span></a>
                </nav>
            </section>

            <section className="publication-section paper-section" id="papers" aria-labelledby="papers-heading">
                <div className="publication-section-heading"><div><p className="section-kicker">Read & explore</p><h2 id="papers-heading">Papers & thesis</h2></div><p>From shared resources to sketch-guided swarms.</p></div>
                <div className="publication-browser">
                    <div className="publication-filters" role="group" aria-label="Filter publications">
                        {filters.map(({ label, type }) => <button className="button-secondary" key={type} type="button" aria-pressed={filter === type} aria-controls="publication-results" onClick={() => setFilter(type)}>{label}<span className="filter-count">{type === "All" ? publications.length : publications.filter((item) => item.type === type).length}</span></button>)}
                    </div>
                    <p className="publication-result-count" role="status">Showing {visible.length} of {publications.length}</p>
                </div>
                <div className="paper-list" id="publication-results">
                    {visible.map((publication) => <PublicationCard item={publication} index={publications.indexOf(publication)} key={publication.id} />)}
                </div>
            </section>

            <section className="publication-section presentation-section" id="presentations" aria-labelledby="presentations-heading">
                <div className="publication-section-heading"><div><p className="section-kicker">Present & connect</p><h2 id="presentations-heading">Talks & posters</h2></div><p>Slides, recordings, and posters from conferences, invited talks, and academic milestones.</p></div>
                {years.map((year) => (
                    <section className="presentation-year" key={year} aria-labelledby={`presentations-${year}`}>
                        <h3 className="presentation-year-heading" id={`presentations-${year}`}><span>{year}</span><span className="presentation-year-line" aria-hidden="true" /></h3>
                        <div className="presentation-grid">{presentations.filter((item) => item.date.endsWith(year)).map((presentation) => <PresentationCard item={presentation} key={presentation.id} onOpenPaper={() => setFilter("All")} />)}</div>
                    </section>
                ))}
            </section>
        </main>
    );
};

export default Publications;
