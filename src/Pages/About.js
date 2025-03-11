import React from "react";
import Header from "../Components/Header";

const About = () => {
    const sections = [
        {
            id: "education",
            title: "Education",
            content: (
                <div className="education-section">
                    <div className="education-item">
                        <h3 className="education-title">
                            Doctor of Philosophy, Electrical and Computer
                            Engineering
                        </h3>
                        <h4 className="education-subtitle">
                            University of California, Irvine | 09/2023 - 06/2028
                        </h4>
                        <p className="education-description">
                            Research in multi-agent systems, collaboration in
                            heterogenous systems, formation control, coverage
                            control, networked control systems, quantum
                            computing, graph neural networks, applied computer
                            vision and machine learning.
                        </p>
                    </div>
                    <div className="education-item">
                        <h3 className="education-title">
                            Master of Science, Electrical and Computer
                            Engineering
                        </h3>
                        <h4 className="education-subtitle">
                            University of California, Irvine | 09/2023 - 03/2025
                        </h4>
                        <p className="education-description">GPA: 3.95/4.0</p>
                        <h5 className="education-subsection-title">
                            Master Thesis:
                        </h5>
                        <ul className="education-list">
                            <li>
                                <strong>Title: </strong>A Graphical Interface
                                for Specifying and Establishing Multi-Robot
                                Formations
                            </li>
                            <li>
                                <strong>Abstract: </strong>
                                We introduce in this thesis a novel method that
                                enables users to describe desired swarm for-
                                mations in an intuitive manner through digital
                                sketches on a graphical interface. We propose a
                                method that uses computer vision techniques to
                                extract relevant, critical points, rather than
                                specifying how many robots are needed or what
                                their pre-assigned relative displace- ments
                                should be. The critical points are used to
                                construct a rigid graph, and the Hungarian
                                algorithm is then applied to solve the linear
                                assignment problem, optimally mapping robots to
                                formation nodes while ensuring spatial
                                consistency and efficient deployment. We provide
                                a theoretical analysis to ensure that the
                                formation does not undergo unintended flips. Ex-
                                perimental results demonstrate the effectiveness
                                of this approach in achieving user-defined
                                formations with high accuracy and robustness,
                                offering a scalable and interactive solution for
                                multi-agent coordination.
                            </li>
                        </ul>
                        <h5 className="education-subsection-title">Courses</h5>
                        <ul className="education-list">
                            <li>
                                Taken Courses: Computer Architecture, Design &
                                Analysis of Algorithms, Advanced System
                                Software, Control ML & AI, Energy Efficiency,
                                Linear Optimization, Quantum Computing, Network
                                Science, Master Thesis, EECS Seminar Series.
                            </li>
                            <li>
                                Audited Courses: Linear Systems, Optimization.
                            </li>
                        </ul>
                    </div>
                    <div className="education-item">
                        <h3 className="education-title">
                            Bachelor of Science, Computer Engineering
                        </h3>
                        <h4 className="education-subtitle">
                            University of Balamand, Al-Kurah | 09/2020 - 05/2023
                        </h4>
                        <p className="education-description">
                            Completed a Bachelor's degree in Computer
                            Engineering and graduated as valedictorian of class
                            2023. Worked on projects involving embedded systems,
                            computer architecture, and complex engineering
                            design.
                        </p>
                        <p className="education-description">GPA: 3.9/4.0</p>
                        <p className="education-description">
                            Activities: Varsity Volleyball Team, IEEE UoB
                            Student Member.
                        </p>
                        <h5 className="education-subsection-title">
                            Graduation Project:
                        </h5>
                        <ul className="education-list">
                            <li>
                                <strong>Title: </strong>Gamification of Virtual
                                Reality Kitchen Scenarios
                            </li>
                            <li>
                                <strong>Abstract: </strong>
                                Virtual Reality (VR) technology provides
                                promising results when employed in educational
                                applications. It offers an interactive
                                environment which improves and accelerates the
                                education and simulation experience. Thus,
                                implementing a VR Kitchen helps the users
                                acquire the skills needed to correctly utilize a
                                professional kitchen, i.e., protect oneself from
                                the steam exiting the oven and correctly
                                distinguishing and separating corrosive and
                                non-corrosive substances. Additionally, it
                                allows the flexibility of creating different
                                training scenarios, some of which are dangerous
                                and expensive to recreate in real life. In this
                                project, we develop a fully immersive VR kitchen
                                that incorporates different training scenarios.
                                The VR kitchen makes use of a head- mounted
                                display, i.e., the Oculus Meta Quest 2 in our
                                case. The goal of this application is to teach
                                those skills through a gamified environment,
                                which gives the user an enjoyable experience.
                                The gamification, in this application, is
                                designed for the purpose of achieving the best
                                learning outcome while diminishing as much as
                                possible the stress that accompanies a scoring
                                system. The choice of tools was made after
                                in-depth research comparing the best platforms
                                for such a project; Unity and C# make the best
                                combination for this project.
                            </li>
                        </ul>
                        <h5 className="education-subsection-title">Courses</h5>
                        <ul className="education-list">
                            <li>
                                Calculus I, Calculus II, Circuit Analysis I,
                                Circuit Analysis Lab, Computer Architecture,
                                Computer Embedded Systems, Embedded Controllers
                                Lab, Cybersecurity, Cybersecurity Lab,
                                Differential Equations, Electrical Simulation &
                                Design, Electronics I, Electronics Lab,
                                Engineering Drawing, Engineering Management &
                                Economics, English Communication Skills III,
                                Information Networking I, Information Skills &
                                Search Techniques, Instrumentation Lab,
                                Introduction to Computer Programming,
                                Introduction to Computer Programming Lab,
                                Introduction to Digital Logic Design,
                                Introduction to Psychology, Introduction to the
                                Engineering Design Fundamentals, Linear Algebra,
                                Literature & Identity, Logic Circuits, Logic
                                Lab, Microcontrollers Lab, Microprocessors,
                                Modern Arab Thought, Modern Thought, Numerical
                                Analysis I, Object Oriented Programming, Object
                                Oriented Programming Lab, Operating Systems, PLC
                                Lab, Probability for Engineers, Programmable
                                Logic Controllers, Programming for Engineering
                                Solutions, Senior Design I, Senior Design II,
                                Signal Processing, Signal & Systems Theory,
                                Telecommunications, Telecommunications Lab.
                            </li>
                        </ul>
                    </div>
                    <div className="education-item">
                        <h3 className="education-title">
                            French & Lebanese Baccalaureates, General Sciences
                        </h3>
                        <h4 className="education-subtitle">
                            Collège de la Sainte Famille Française Fanar |
                            09/2005 - 06/2020
                        </h4>
                        <p className="education-description">
                            Graduated High School with both the French and the
                            Lebanese Baccalaureates with High Distinction.
                        </p>
                        <p className="education-description">GPA: 17/20</p>
                        <p className="education-description">
                            Activities: Volleyball Team Captain and Opposite
                            Hitter, Ping-Pong Team, Gymnastics Team, Guides du
                            Liban.
                        </p>
                    </div>
                    <div className="education-item">
                        <h3 className="education-title">Violin</h3>
                        <h4 className="education-subtitle">
                            Lebanese National Higher Conservatory of Music |
                            09/2011 - 06/2016
                        </h4>
                        <p className="education-description">
                            Learned the art of playing the violin for 5 years
                            (reached the 5th grade) by playing classical music
                            from famous European artists, as well as taking
                            courses in Music Theory, Solfège, and Harmonies.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "certifications",
            title: "Licenses and Certifications",
            content: (
                <div>
                    <ul>
                        <li>
                            <strong>ZAKA AI Bootcamp</strong> | ZAKA | Issued
                            Sep 2023
                            <ul>
                                <li style={{ margin: 0 }}>
                                    Artificial Intelligence
                                </li>
                                <li style={{ margin: 0 }}>Computer Vision</li>
                                <li style={{ margin: 0 }}>Machine Learning</li>
                                <li style={{ margin: 0 }}>
                                    Natural Language Processing
                                </li>
                                <li style={{ margin: 0 }}>Deep Learning</li>
                                <li style={{ margin: 0 }}>Data Science</li>
                                <li style={{ margin: 0 }}>
                                    Time Series Analysis
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>
                                IEEE Grand Tech 2023 Certification of Attendance
                            </strong>{" "}
                            | IEEE Computer Society | Issued Jun 2023
                            <ul>
                                <li style={{ margin: 0 }}>Virtual Reality</li>
                                <li style={{ margin: 0 }}>Metaverse</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Introduction to Simulink</strong> | ASME
                            University of Balamand Student Section | Issued May
                            2022
                        </li>
                        <li>
                            <strong>
                                First Place Winner in the Lebanon IoT & AI
                                Challenge 2021
                            </strong>{" "}
                            | Arab IoT & AI Challenge | Issued Nov 2021
                        </li>
                        <li>
                            <strong>Simulink Onramp</strong> | Mathworks |
                            Issued Apr 2021
                        </li>
                        <li>
                            <strong>MATLAB Onramp</strong> | Mathworks | Issued
                            Feb 2021
                        </li>
                        <li>
                            <strong>Dean's Honor List</strong> | Faculty of
                            Engineering at the University of Balamand, Al-Kurah
                            <ul>
                                <li style={{ margin: 0 }}>Spring 2023</li>
                                <li style={{ margin: 0 }}>Fall 2022</li>
                                <li style={{ margin: 0 }}>Spring 2022</li>
                                <li style={{ margin: 0 }}>Fall 2021</li>
                                <li style={{ margin: 0 }}>Spring 2021</li>
                                <li style={{ margin: 0 }}>Fall 2020</li>
                            </ul>
                        </li>
                        <li>
                            <strong>IELTS Academic</strong> | Beirut | Issued
                            Sep 2022 - Expired Sep 2024
                            <ul>
                                <li style={{ margin: 0 }}>Score: 8.0/9.0</li>
                                <li style={{ margin: 0 }}>Listening: 9.0</li>
                                <li style={{ margin: 0 }}>Reading: 8.0</li>
                                <li style={{ margin: 0 }}>Writing: 6.5</li>
                                <li style={{ margin: 0 }}>Speaking: 7.5</li>
                            </ul>
                        </li>
                        <li>
                            <strong>SAT</strong> | Beirut | Issued Dec 2018
                            <ul>
                                <li style={{ margin: 0 }}>Score: 1300/1600</li>
                                <li style={{ margin: 0 }}>
                                    Evidence-Based Reading and Writing Score:
                                    610/800
                                </li>
                                <li style={{ margin: 0 }}>
                                    Math Score: 690/800
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "awards",
            title: "Awards",
            content: (
                <div>
                    <ul>
                        <li>
                            <strong>
                                Faculty Award for Academic Excellence
                            </strong>{" "}
                            | Faculty of Engineering at the University of
                            Balamand | Jun 2023
                            <p>
                                Recipient of the Faculty Excellent Achievement
                                Award for obtaining the highest GPA among all
                                graduating computer engineering undergraduate
                                students of class 2023.
                            </p>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "languages",
            title: "Languages",
            content: (
                <div>
                    <ul>
                        <li>
                            <strong>Arabic</strong>
                            <p>Native language</p>
                        </li>
                        <li>
                            <strong>French</strong>
                            <p>Native language, language of education.</p>
                        </li>
                        <li>
                            <strong>English</strong>
                            <p>
                                Fluent in both spoken and written English, used
                                in academic and professional contexts.
                            </p>
                        </li>
                        <li>
                            <strong>Spanish</strong>
                            <p>Beginner in both speaking and writing.</p>
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "organizations",
            title: "Organizations",
            content: (
                <div>
                    <ul>
                        <li>
                            <strong>Member, IEEE</strong> | 05/2022 - Present
                            <ul>
                                <li style={{ margin: 0 }}>Computer Society</li>
                                <li style={{ margin: 0 }}>
                                    Women In Engineering
                                </li>
                                <li style={{ margin: 0 }}>
                                    Controls System Society
                                </li>
                                <li style={{ margin: 0 }}>
                                    Robotics and Automation Society
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Les Guides du Liban</strong> | 09/2009 -
                            08/2015
                        </li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div className="container home-container">
            {/* Header Section */}
            <Header />

            <div className="accordion" id="accordionExample">
                {sections.map((section, index) => (
                    <div className="accordion-item" key={section.id}>
                        <h1
                            className="accordion-header"
                            id={`heading-${section.id}`}
                        >
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${section.id}`}
                                aria-expanded="false"
                                aria-controls={`collapse-${section.id}`}
                            >
                                {section.title}
                            </button>
                        </h1>
                        <div
                            id={`collapse-${section.id}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading-${section.id}`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                {section.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
