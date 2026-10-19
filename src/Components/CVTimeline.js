import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const timelineSections = ["education", "academic", "industry", "teaching", "volunteering"];

export default function CVTimeline({ sections }) {
    const { hash } = useLocation();
    const [expanded, setExpanded] = useState(() => sections.filter((section) => hash === `#cv-${section.id}`).map((section) => section.id));
    const details = sections.filter((section) => !timelineSections.includes(section.id));
    const allExpanded = details.every((section) => expanded.includes(section.id));
    return <div className="cv-layout">
        <nav className="cv-nav" aria-label="CV sections">
            <p className="section-kicker">Explore the CV</p>
            {sections.map((section, i) => <a key={section.id} href={`#cv-${section.id}`} onClick={() => setExpanded((current) => current.includes(section.id) ? current : [...current, section.id])}><span>{String(i + 1).padStart(2, "0")}</span>{section.title}</a>)}
        </nav>
        <div className="cv-sections">
            <div className="cv-toolbar"><span>Experience, milestones & more</span><button type="button" onClick={() => setExpanded(allExpanded ? [] : details.map((section) => section.id))}>{allExpanded ? "Collapse details" : "Expand all details"}<span aria-hidden="true"> {allExpanded ? "−" : "+"}</span></button></div>
            {sections.map((section, i) => timelineSections.includes(section.id) ?
                <section className="cv-section cv-timeline" id={`cv-${section.id}`} key={section.id} aria-labelledby={`cv-heading-${section.id}`}>
                    <div className="cv-section-heading"><span>{String(i + 1).padStart(2, "0")}</span><h2 id={`cv-heading-${section.id}`}>{section.title}</h2></div>
                    {section.content}
                </section> :
                <section className="cv-section cv-detail" id={`cv-${section.id}`} key={section.id}>
                    <h2><button type="button" aria-expanded={expanded.includes(section.id)} aria-controls={`cv-body-${section.id}`} onClick={() => setExpanded((current) => current.includes(section.id) ? current.filter((id) => id !== section.id) : [...current, section.id])}><span className="cv-detail-title"><span className="cv-number">{String(i + 1).padStart(2, "0")}</span>{section.title}</span><span aria-hidden="true">{expanded.includes(section.id) ? "−" : "+"}</span></button></h2>
                    <div id={`cv-body-${section.id}`} hidden={!expanded.includes(section.id)}>{section.content}</div>
                </section>
            )}
        </div>
    </div>;
}
