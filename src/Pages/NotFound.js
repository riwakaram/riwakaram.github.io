import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return <main className="page-shell" id="main-content" tabIndex={-1}>
        <section className="section-intro">
            <p className="section-kicker">404</p>
            <h1>Page not found</h1>
            <p>This link may be out of date. You can return home or explore research.</p>
            <div className="hero-actions">
                <Link className="button-primary" to="/">Back to home</Link>
                <Link className="button-secondary" to="/research">Explore research</Link>
            </div>
        </section>
    </main>;
}
