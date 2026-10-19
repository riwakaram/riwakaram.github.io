import React from "react";
import NetworkArt from "./NetworkArt";

const footerGroups = [
    {
        label: "Email",
        links: [
            { label: "UCI Email", href: "mailto:rwkaram@uci.edu" },
            { label: "Personal Email", href: "mailto:riwa.karam@icloud.com" },
        ],
    },
    {
        label: "Profiles",
        links: [
            { label: "Google Scholar", href: "https://scholar.google.com/citations?user=Xt1TuawAAAAJ&hl=en" },
            { label: "ORCID", href: "https://orcid.org/0009-0009-4042-4530" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/riwakaram" },
            { label: "GitHub", href: "https://github.com/riwakaram" },
        ],
    },
];

const Footer = () => (
    <footer className="site-footer">
        <NetworkArt compact className="footer-network" />
        <div className="footer-identity">
            <strong>Riwa Karam</strong>
            <span>Electrical and Computer Engineering, UC Irvine</span>
        </div>
        <nav className="footer-links" aria-label="Contact and profiles">
            {footerGroups.map(({ label, links }) => (
                <div className="footer-link-group" key={label}>
                    <span className="footer-group-label">{label}</span>
                    <div className="footer-link-row">
                        {links.map(({ label: linkLabel, href }) => {
                            const external = !href.startsWith("mailto:");
                            return (
                                <a className="footer-link" href={href} key={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener noreferrer" : undefined}>
                                    {linkLabel}
                                </a>
                            );
                        })}
                    </div>
                </div>
            ))}
        </nav>
    </footer>
);

export default Footer;
