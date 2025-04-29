import React from "react";
import Header from "../Components/Header";
import Resume from "../Files/RiwaKaram_Resume.pdf";

const About = () => {
    return (
        <div className="container home-container">
            <Header />
            <div className="contact-wrapper">
                <h1>Contact Me</h1>
                <p className="intro-text">
                    Whether you have a question, would like to collaborate or
                    just want to say hello, feel free to reach out using the
                    methods below.
                </p>
                <div className="contact-info card-section">
                    <div className="contact-card-item">
                        <div className="contact-row">
                            <strong>UCI Email:</strong>
                            <br />
                            <a href="mailto:rwkaram@uci.edu">rwkaram@uci.edu</a>
                        </div>
                        <div className="contact-row">
                            <strong>Resume:</strong>
                            <br />
                            <a
                                href={Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download My Resume
                            </a>
                        </div>
                        <div className="contact-row">
                            <strong>LinkedIn:</strong>
                            <br />
                            <a
                                href="https://www.linkedin.com/in/riwakaram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View my LinkedIn Profile
                            </a>
                        </div>
                        <div className="contact-row">
                            <strong>Google Scholar:</strong>
                            <br />
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit my Google Scholar Page
                            </a>
                        </div>
                        <div className="contact-row">
                            <strong>GitHub:</strong>
                            <br />
                            <a
                                href="https://github.com/riwakaram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Check out my GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
