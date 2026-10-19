import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { researchAreas } from "../data/researchAreas";

const positions = [[23, 23], [77, 23], [23, 77], [77, 77]];

export default function ResearchExplorer({ onResearchPage = false }) {
    const { hash } = useLocation();
    const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState(null);
    const area = researchAreas[selected];
    const highlighted = hovered === null ? selected : hovered;
    const panelId = "research-map-detail";

    useEffect(() => {
        const index = researchAreas.findIndex((topic) => `#${topic.id}` === hash);
        if (onResearchPage && index !== -1) setSelected(index);
    }, [hash, onResearchPage]);

    return (
        <section className="research-explorer" aria-labelledby="research-map-title">
            <div className="section-heading-row">
                <div>
                    <p className="section-kicker">Connected ideas</p>
                    <h2 id="research-map-title">Explore research</h2>
                </div>
                <p className="map-hint">Select a node to explore.</p>
            </div>
            <div className="research-map-layout">
                <div className="research-map" role="group" aria-label="Research topics">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <path className="map-orbit" d="M23 23 L77 23 L77 77 L23 77 Z" />
                        {positions.map(([x, y], index) => (
                            <path key={index} className={`map-edge${highlighted === index ? " is-highlighted" : ""}`} d={`M50 50 L${x} ${y}`} />
                        ))}
                    </svg>
                    <div className="map-center" aria-hidden="true"><span>Multi-agent</span><span>systems</span></div>
                    {researchAreas.map((topic, index) => (
                        <button
                            className="map-node"
                            key={topic.id}
                            type="button"
                            style={{ left: `${positions[index][0]}%`, top: `${positions[index][1]}%` }}
                            aria-pressed={selected === index}
                            aria-controls={panelId}
                            onClick={() => setSelected(index)}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            onFocus={() => setHovered(index)}
                            onBlur={() => setHovered(null)}
                        >
                            <span className="map-node-dot" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                            <span>{topic.shortTitle}</span>
                        </button>
                    ))}
                </div>
                <div className="map-detail" id={panelId}>
                    <div aria-live="polite" aria-atomic="true">
                        <p className="section-kicker">0{selected + 1} / 04</p>
                        <h3>{area.title}</h3>
                        <p>{area.explanation}</p>
                    </div>
                    {onResearchPage ? (
                        <a className="button-secondary" href={`#${area.id}`}>Explore this area <span aria-hidden="true">↓</span></a>
                    ) : (
                        <Link className="button-secondary" to={`/research#${area.id}`}>Explore this area <span aria-hidden="true">→</span></Link>
                    )}
                </div>
            </div>
        </section>
    );
}
