import React from "react";
import Header from "../Components/Header";
import Resume from "../Files/RiwaKaram_Resume.pdf";

const contactLinks = [
    {
        label: "UCI Email",
        value: "rwkaram [at] uci [dot] edu",
        href: "mailto:rwkaram@uci.edu",
    },
    {
        label: "Personal Email",
        value: "riwa [dot] karam [at] icloud [dot] com",
        href: "mailto:riwa.karam@icloud.com",
    },
    {
        label: "Resume",
        value: "Download PDF",
        href: Resume,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/riwakaram",
        href: "https://www.linkedin.com/in/riwakaram",
    },
    {
        label: "Google Scholar",
        value: "Scholar profile",
        href: "https://scholar.google.com/citations?user=Xt1TuawAAAAJ&hl=en",
    },
    {
        label: "GitHub",
        value: "github.com/riwakaram",
        href: "https://github.com/riwakaram",
    },
];

const About = () => {
    return (
        <main className="page-shell">
            <Header compact />
            <section className="section-intro">
                <p className="section-kicker">Contact</p>
                <h2>
                    For research questions, collaboration, or professional
                    inquiries.
                </h2>
                <p>
                    The best way to reach me is by email. I am also available
                    through the academic and professional profiles below.
                </p>
            </section>

            <section className="contact-grid">
                {contactLinks.map((item) => (
                    <a
                        className="contact-card"
                        href={item.href}
                        target={
                            item.href.startsWith("mailto:")
                                ? undefined
                                : "_blank"
                        }
                        rel={
                            item.href.startsWith("mailto:")
                                ? undefined
                                : "noopener noreferrer"
                        }
                        key={item.label}
                    >
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                    </a>
                ))}
            </section>
        </main>
    );
};

export default About;
