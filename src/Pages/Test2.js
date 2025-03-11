import React, { useState, useRef, useEffect } from "react";
import Header from "../Components/Header";

const About = () => {
    const [isEducationOpen, setIsEducationOpen] = useState(false);
    const [isCertificationsOpen, setIsCertificationsOpen] = useState(false);
    const [isAwardsOpen, setIsAwardsOpen] = useState(false);
    const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
    const [isOrganizationsOpen, setIsOrganizationsOpen] = useState(false);

    const toggleSection = (section) => {
        if (section === "education") {
            setIsEducationOpen(!isEducationOpen);
        } else if (section === "certifications") {
            setIsCertificationsOpen(!isCertificationsOpen);
        } else if (section === "awards") {
            setIsAwardsOpen(!isAwardsOpen);
        } else if (section === "languages") {
            setIsLanguagesOpen(!isLanguagesOpen);
        } else if (section === "organizations") {
            setIsOrganizationsOpen(!isOrganizationsOpen);
        }
    };

    const educationRef = useRef(null);
    const certificationsRef = useRef(null);
    const awardsRef = useRef(null);
    const languagesRef = useRef(null);
    const organizationsRef = useRef(null);

    const [educationHeight, setEducationHeight] = useState(0);
    const [certificationsHeight, setCertificationsHeight] = useState(0);
    const [awardsHeight, setAwardsHeight] = useState(0);
    const [languagesHeight, setLanguagesHeight] = useState(0);
    const [organizationsHeight, setOrganizationsHeight] = useState(0);
    useEffect(() => {
        if (educationHeight.current) {
            setEducationHeight(
                isEducationOpen ? educationRef.current.scrollHeight : 0
            );
        }
    }, [isEducationOpen]);
    useEffect(() => {
        if (certificationsRef.current) {
            setCertificationsHeight(
                isCertificationsOpen
                    ? certificationsRef.current.scrollHeight
                    : 0
            );
        }
    }, [isCertificationsOpen]);
    useEffect(() => {
        if (awardsRef.current) {
            setAwardsHeight(isAwardsOpen ? awardsRef.current.scrollHeight : 0);
        }
    }, [isAwardsOpen]);
    useEffect(() => {
        if (languagesRef.current) {
            setLanguagesHeight(
                isLanguagesOpen ? languagesRef.current.scrollHeight : 0
            );
        }
    }, [isLanguagesOpen]);
    useEffect(() => {
        if (organizationsRef.current) {
            setOrganizationsHeight(
                isOrganizationsOpen ? organizationsRef.current.scrollHeight : 0
            );
        }
    }, [isOrganizationsOpen]);

    return (
        <div className="container home-container">
            {/* Header Section */}
            <Header />

            <section>
                <div className="d-flex align-items-center gap-2">
                    <h2 className="mb-0">Education</h2>
                    <button
                        className="btn btn-outline-light custom-btn"
                        onClick={() => toggleSection("education")}
                        aria-expanded={isEducationOpen}
                        aria-controls="education-section"
                    >
                        {isEducationOpen ? "▲" : "▼"}
                    </button>
                </div>
                <div
                    id="education-section"
                    className={`toggle-section ${
                        isEducationOpen ? "open" : ""
                    }`}
                    style={{ maxHeight: `${educationHeight}px` }}
                >
                    <div
                        ref={educationRef}
                        className="p-4 bg-gray-100 rounded-md mt-2"
                    >
                        <div>
                            <h3 title="PhD - Ecology Robotics"></h3>
                            <h4>
                                University of California, Irvine | 09/2023 -
                                PRESENT
                            </h4>
                            <p>
                                Focus on multi-agent systems, collaboration,
                                formation control, coverage control, networked
                                control systems, quantum computing, applied
                                computer vision and machine learning.
                            </p>
                        </div>
                        <div>
                            <h3>M.S. in Computer Engineering</h3>
                            <h4>
                                University of California, Irvine | 09/2023 -
                                03/2025
                            </h4>
                            <p>GPA: 3.95/4.0</p>
                            <h5>Master Thesis:</h5>
                            <ul>
                                <li>
                                    <strong>Title: </strong>
                                </li>
                                <li>
                                    <strong>Abstract: </strong>
                                </li>
                            </ul>
                            <h5>Courses</h5>
                            <ul>
                                <li>
                                    Taken Courses: Computer Architecture, Design
                                    & Analysis of Algorithms, Advanced System
                                    Software, Control ML & AI, Energy
                                    Efficiency, Linear Optimization, Quantum
                                    Computing, Network Science, Master Thesis,
                                    EECS Seminar Series.
                                </li>
                                <li>
                                    Audited Courses: Linear Systems,
                                    Optimization
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>B.S. in Computer Engineering</h3>
                            <h4>
                                University of Balamand, Al-Kurah | 09/2020 -
                                05/2023
                            </h4>
                            <p>
                                Completed a Bachelor's degree in Computer
                                Engineering and graduated as valedicatorian of
                                my class. Worked on projects involving embedded
                                systems, computer architecture, engineering
                                programming, and complex engineering design and
                                programming.
                            </p>
                            <p>GPA: 3.90/4.0</p>
                            <p>
                                Activities: Varsity Volleyball Team, IEEE UoB
                                Student Member
                            </p>
                            <h5>Graduation Project:</h5>
                            <ul>
                                <li>
                                    <strong>Title: </strong>
                                    Gamification of Virtual Reality Kitchen
                                    Scenarios
                                </li>
                                <li>
                                    <strong>Abstract: </strong>
                                    Virtual Reality (VR) technology provides
                                    promising results when employed in
                                    educational applications. It offers an
                                    interactive environment which improves and
                                    accelerates the education and simulation
                                    experience. Thus, implementing a VR Kitchen
                                    helps the users acquire the skills needed to
                                    correctly utilize a professional kitchen,
                                    i.e., protect oneself from the steam exiting
                                    the oven and correctly distinguishing and
                                    separating corrosive and non-corrosive
                                    substances. Additionally, it allows the
                                    flexibility of creating different training
                                    scenarios, some of which are dangerous and
                                    expensive to recreate in real life. In this
                                    project, we develop a fully immersive VR
                                    kitchen that incorporates different training
                                    scenarios. The VR kitchen makes use of a
                                    head- mounted display, i.e., the Oculus Meta
                                    Quest 2 in our case. The goal of this
                                    application is to teach those skills through
                                    a gamified environment, which gives the user
                                    an enjoyable experience. The gamification,
                                    in this application, is designed for the
                                    purpose of achieving the best learning
                                    outcome while diminishing as much as
                                    possible the stress that accompanies a
                                    scoring system. The choice of tools was made
                                    after in-depth research comparing the best
                                    platforms for such a project; Unity and C#
                                    make the best combination for this project.
                                </li>
                            </ul>
                            <h5>Courses</h5>
                            <ul>
                                <li>
                                    Calculus I, Calculus II, Circuit Analysis I,
                                    Circuit Analysis Lab, Computer Architecture,
                                    Computer Embedded Systems, Embedded
                                    Controllers Lab, Cybersecurity,
                                    Cybersecurity Lab, Differential Equations,
                                    Electrical Simulation & Design, Electronics
                                    I, Electronics Lab, Engineering Drawing,
                                    Engineering Mangement & Economics, English
                                    Communication Skills III, Information
                                    Networking I, Information Skills & Search
                                    Techniques, Instrumentation Lab,
                                    Introduction to Computer Programming,
                                    Introduction to Computer Programming Lab,
                                    Introduction to Digital Logic Design,
                                    Introduction to Psychology, Introduction to
                                    the Engineering Design Fundamentals, Linear
                                    Algebra, Literature & Identity, Logic
                                    Circuits, Logic Lab, Microcontrollers Lab,
                                    Microprocessors, Modern Arab Thought, Modern
                                    Thought, Numerical Analysis I, Object
                                    Oriented Programming, Object Oriented
                                    Programming Lab, Operating Systems, PLC Lab,
                                    Probability for Engineers, Programmable
                                    Logic Controllers, Programming for
                                    Engineering Solutions, Senior Design I,
                                    Senior Design II, Signal Processing, Signal
                                    & Systems Theory, Telecommunications,
                                    Telecommunications Lab.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>
                                French & Lebanese Baccalaureates, General
                                Sciences
                            </h3>
                            <h4>
                                Collège de la Sainte Famille Française Fanar |
                                09/2005 - 06/2020
                            </h4>
                            <p>
                                Graduated High School with both the French and
                                the Lebanese Baccalaureates with High
                                Distinction
                            </p>
                            <p>GPA: 17/20</p>
                            <p>
                                Activities: Volleyball Team Captain and Opposite
                                Hitter, Ping-Pong Team, Gymnastics Team, Guides
                                du Liban
                            </p>
                        </div>
                        <div>
                            <h3>Violin</h3>
                            <h4>
                                Lebanese National Higher Conservatory of Music |
                                09/2011 - 06/2016
                            </h4>
                            <p>
                                Learned the art of playing the violin for 5
                                years (reached the 5th grade) by playing
                                classical music from famous european artists, in
                                addition to taking courses in Music Theory,
                                Solfège, Harmonies, etc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="d-flex align-items-center gap-2">
                    <h2 className="mb-0">Licenses and Certifications</h2>
                    <button
                        className="btn btn-outline-light custom-btn"
                        onClick={() => toggleSection("certifications")}
                        aria-expanded={isCertificationsOpen}
                        aria-controls="certifications-section"
                    >
                        {isCertificationsOpen ? "▲" : "▼"}
                    </button>
                </div>
                <div
                    id="certifications-section"
                    className={`toggle-section ${
                        isCertificationsOpen ? "open" : ""
                    }`}
                    style={{ maxHeight: `${certificationsHeight}px` }}
                >
                    <div
                        ref={certificationsRef}
                        className="p-4 bg-gray-100 rounded-md mt-2"
                    >
                        <ul>
                            <li>
                                <strong>ZAKA AI Bootcamp</strong> | ZAKA |
                                Issued Sep 2023
                                <p>
                                    Skills: Artificial Intelligence (AI),
                                    Computer Vision, Machine Learning, Natural
                                    Language Processing (NLP), Deep Learning,
                                    Data Science, Time Series Analysis
                                </p>
                            </li>
                            <li>
                                <strong>
                                    IEEE Grand Tech 2023 Certification of
                                    Attendance
                                </strong>
                                | IEEE Computer Society
                                <p>SKills: Virtual Reality (VR), Metaverse</p>
                            </li>
                            <li>
                                <strong>Introduction to Simulink</strong> | ASME
                                University of Balamand Student Section | Issued
                                May 2022
                                <p></p>
                            </li>
                            <li>
                                <strong>
                                    First Place Winner in the Lebanon IoT & AI
                                    Challenge 2021
                                </strong>
                                | Arab IoT & AI Challenge | Issued Nov 2021
                                <p></p>
                            </li>
                            <li>
                                <strong>Simulink Onramp</strong> | Mathworks |
                                Issued Apr 2021
                            </li>
                            <li>
                                <strong>MATLAB Onramp</strong> | Mathworks |
                                Issued Feb 2021
                            </li>
                            <li>
                                <strong>Dean's Honor List</strong> | Faculty of
                                Engineering at the University of Balamand,
                                Al-Kurah
                                <ul>
                                    <li>Spring 2023</li>
                                    <li>Fall 2022</li>
                                    <li>Spring 2022</li>
                                    <li>Fall 2021</li>
                                    <li>Spring 2021</li>
                                    <li>Fall 2020</li>
                                </ul>
                            </li>
                            <li>
                                <strong>IELTS Academic</strong> | Beirut |
                                Issued Sep 2022 - Expired Sep 2024
                                <p>
                                    <ul>
                                        <li>Score: 8.0/9.0</li>
                                        <li>Listening: 9.0</li>
                                        <li>Reading: 8.0</li>
                                        <li>Writing: 6.5</li>
                                        <li>Speaking: 7.5</li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <strong>SAT</strong> | Beirut | Issued Dec 2018
                                <p>
                                    <ul>
                                        <li>Score: 1300/1600</li>
                                        <li>
                                            Evidence-Based Reading and Writing
                                            Score: 610/800
                                        </li>
                                        <li>Math Score: 690/800</li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="d-flex align-items-center gap-2">
                    <h2 className="mb-0">Awards</h2>
                    <button
                        className="btn btn-outline-light custom-btn"
                        onClick={() => toggleSection("awards")}
                        aria-expanded={isAwardsOpen}
                        aria-controls="awards-section"
                    >
                        {isAwardsOpen ? "▲" : "▼"}
                    </button>
                </div>
                <div
                    id="awards-section"
                    className={`toggle-section ${isAwardsOpen ? "open" : ""}`}
                    style={{ maxHeight: `${awardsHeight}px` }}
                >
                    <div
                        ref={awardsRef}
                        className="p-4 bg-gray-100 rounded-md mt-2"
                    >
                        <ul>
                            <li>
                                <strong>
                                    Faculty Award for Academic Excellence
                                </strong>{" "}
                                | Faculty of Engineering at the Univerity of
                                Balamand | 2023
                                <p>
                                    Recipient of the Faculty Excellent
                                    Achievement Award for obtaining the highest
                                    GPA between all the graduating computer
                                    engineering undergraduate students of class
                                    2023.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="d-flex align-items-center gap-2">
                    <h2 className="mb-0">Languages</h2>
                    <button
                        className="btn btn-outline-light custom-btn"
                        onClick={() => toggleSection("languages")}
                        aria-expanded={isLanguagesOpen}
                        aria-controls="languages-section"
                    >
                        {isLanguagesOpen ? "▲" : "▼"}
                    </button>
                </div>
                <div
                    id="languages-section"
                    className={`toggle-section ${
                        isLanguagesOpen ? "open" : ""
                    }`}
                    style={{ maxHeight: `${languagesHeight}px` }}
                >
                    <div
                        ref={languagesRef}
                        className="p-4 bg-gray-100 rounded-md mt-2"
                    >
                        <ul>
                            <li>
                                <strong>Arabic</strong> (Native)
                                <p>Native language</p>
                            </li>
                            <li>
                                <strong>French</strong> (Native)
                                <p>Native language, language of education.</p>
                            </li>
                            <li>
                                <strong>English</strong> (Fluent)
                                <p>
                                    Fluent in both spoken and written English,
                                    used in academic and professional contexts.
                                </p>
                            </li>
                            <li>
                                <strong>Spanish</strong> (Beginner)
                                <p>Beginner in both speaking and writing.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="d-flex align-items-center gap-2">
                    <h2 className="mb-0">Organizations</h2>
                    <button
                        className="btn btn-outline-light custom-btn"
                        onClick={() => toggleSection("organizations")}
                        aria-expanded={isOrganizationsOpen}
                        aria-controls="organizations-section"
                    >
                        {isOrganizationsOpen ? "▲" : "▼"}
                    </button>
                </div>
                <div
                    id="organizations-section"
                    className={`toggle-section ${
                        isOrganizationsOpen ? "open" : ""
                    }`}
                    style={{ maxHeight: `${organizationsHeight}px` }}
                >
                    <div
                        ref={organizationsRef}
                        className="p-4 bg-gray-100 rounded-md mt-2"
                    >
                        <ul>
                            <li>
                                <strong>Member, IEEE</strong> | 05/2022 -
                                PRESENT
                                <ul>
                                    <li>Computer Society</li>
                                    <li>Women In Engineering</li>
                                    <li>Controls System Society</li>
                                    <li>Robotics and Automation Society</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Les Guides du Liban</strong> | 09/2009 -
                                08/2015
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;
