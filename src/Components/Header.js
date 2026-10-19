import React from "react";
import { useLocation } from "react-router-dom";
import NetworkArt from "./NetworkArt";

const titles = { "/research": "Research", "/vitae": "Curriculum vitae", "/publications": "Publications", "/news": "News & milestones", "/about": "Let’s connect", "/projects": "Projects" };
const graphVariants = { "/research": "research", "/vitae": "vitae", "/publications": "publications", "/news": "news", "/about": "contact", "/projects": "projects" };

const Header = ({ compact = false }) => {
    const { pathname: rawPathname } = useLocation();
    const pathname = rawPathname.replace(/\/+$/, "") || "/";
    return (
        <header className={`site-header ${compact ? "site-header-compact" : ""}`}>
            <div className="page-heading-copy">
                <p className="eyebrow">
                    Multi-agent systems, robotics and machine learning
                </p>
                <h1 className="name">{titles[pathname] || "Riwa Karam"}<span className="accent-dot" aria-hidden="true">.</span></h1>
                <p className="description">
                    Riwa Karam · PhD Candidate at the University of California, Irvine
                </p>
            </div>
            <NetworkArt className="page-heading-network" variant={graphVariants[pathname]} />
        </header>
    );
};

export default Header;
