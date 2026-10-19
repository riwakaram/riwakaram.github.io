import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import NetworkArt from "../Components/NetworkArt";

export default function Projects() {
    return <main className="page-shell" id="main-content" tabIndex={-1}>
        <Header compact />
        <section className="projects-placeholder" aria-labelledby="projects-title">
            <NetworkArt />
            <p className="section-kicker">Projects</p>
            <h2 id="projects-title">TBD<span className="accent-dot" aria-hidden="true">.</span></h2>
            <p>Project details are coming soon. In the meantime, explore research.</p>
            <Link className="button-secondary" to="/research">Explore research <span aria-hidden="true">↗</span></Link>
        </section>
    </main>;
}
