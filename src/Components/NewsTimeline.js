import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NewsEntryHeading from "./NewsEntryHeading";

export default function NewsTimeline({ entries, renderLinks }) {
    const { hash } = useLocation();
    const years = [...new Set(entries.map((entry) => entry.date.match(/\d{4}/g).slice(-1)[0]))];
    const [expanded, setExpanded] = useState(() => [...new Set([years[0], ...years.filter((year) => hash === `#news-${year}`)])]);
    const allExpanded = years.every((year) => expanded.includes(year));

    return (
        <div className="cv-layout news-archive">
            <nav className="cv-nav" aria-label="News years">
                <p className="section-kicker">Explore the timeline</p>
                {years.map((year) => (
                    <a key={year} href={`#news-${year}`} onClick={() => setExpanded((current) => current.includes(year) ? current : [...current, year])}>
                        {year}<span>{entries.filter((entry) => entry.date.endsWith(year)).length} updates</span>
                    </a>
                ))}
            </nav>
            <div>
                <div className="cv-toolbar">
                    <span>Research, experience & milestones</span>
                    <button type="button" onClick={() => setExpanded(allExpanded ? [] : years)}>
                        {allExpanded ? "Collapse years" : "Expand all years"}<span aria-hidden="true">{allExpanded ? "−" : "+"}</span>
                    </button>
                </div>
                {years.map((year) => (
                    <section className="cv-section cv-detail news-year" id={`news-${year}`} key={year} aria-labelledby={`news-heading-${year}`}>
                        <h2 id={`news-heading-${year}`}>
                            <button type="button" aria-expanded={expanded.includes(year)} aria-controls={`news-body-${year}`} onClick={() => setExpanded((current) => current.includes(year) ? current.filter((item) => item !== year) : [...current, year])}>
                                <span className="news-year-label">{year}</span><span aria-hidden="true">{expanded.includes(year) ? "−" : "+"}</span>
                            </button>
                        </h2>
                        <div id={`news-body-${year}`} hidden={!expanded.includes(year)}>
                            <div className="cv-timeline">
                                <div className="card-section">
                                    {entries.filter((entry) => entry.date.endsWith(year)).map((entry) => (
                                        <article className={`card-item news-entry-card${entry.media ? " has-media" : ""}`} key={`${entry.date}-${entry.title}`}>
                                            <div className="news-entry-content">
                                                <NewsEntryHeading entry={entry} />
                                                <p>{entry.text}</p>
                                                {renderLinks(entry)}
                                            </div>
                                            {entry.media && <div className="news-entry-media">{entry.media}</div>}
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
