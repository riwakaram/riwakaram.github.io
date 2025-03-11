import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";

const About = () => {
    const sections = [
        {
            id: "education",
            title: "Education",
            content: (
                <div className="card-section">
                    <div className="card-item">
                        <h3 className="card-title">
                            Doctor of Philosophy, Electrical and Computer
                            Engineering
                        </h3>
                        <h4 className="card-subtitle">
                            University of California, Irvine | 09/2023 - 06/2028
                        </h4>
                        <p className="card-description">
                            Research in multi-agent systems, collaboration in
                            heterogenous systems, formation control, coverage
                            control, networked control systems, quantum
                            computing, graph neural networks, applied computer
                            vision and machine learning.
                        </p>
                        <ul className="card-list">
                            <li>UCI Robot Ecology Lab</li>
                            <li>PI: Professor Magnus Egerstedt</li>
                        </ul>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">
                            Master of Science, Electrical and Computer
                            Engineering
                        </h3>
                        <h4 className="card-subtitle">
                            University of California, Irvine | 09/2023 - 03/2025
                        </h4>
                        <p className="card-descripton">
                            Thesis and research based master's degree: courses,
                            seminars, and thesis requirements.
                        </p>
                        <ul className="card-list">
                            <li>GPA: 3.95/4.0</li>
                        </ul>
                        <h5 className="card-subsection-title">
                            Master Thesis:
                        </h5>
                        <ul className="card-list">
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
                        <h5 className="card-subsection-title">Courses</h5>
                        <ul className="card-list">
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
                    <div className="card-item">
                        <h3 className="card-title">
                            Bachelor of Science, Computer Engineering
                        </h3>
                        <h4 className="card-subtitle">
                            University of Balamand, Al-Kurah | 09/2020 - 05/2023
                        </h4>
                        <p className="card-description">
                            Completed a Bachelor's degree in Computer
                            Engineering and graduated as valedictorian of class
                            2023. Worked on projects involving embedded systems,
                            computer architecture, and complex engineering
                            design.
                        </p>
                        <ul className="card-list">
                            <li>GPA: 3.9/4.0</li>
                            <li>
                                Activities: Varsity Volleyball Team, IEEE UoB
                                Student Member.
                            </li>
                        </ul>
                        <h5 className="card-subsection-title">
                            Graduation Project:
                        </h5>
                        <ul className="card-list">
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
                        <h5 className="card-subsection-title">Courses</h5>
                        <ul className="card-list">
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
                    <div className="card-item">
                        <h3 className="card-title">
                            French & Lebanese Baccalaureates, General Sciences
                        </h3>
                        <h4 className="card-subtitle">
                            Collège de la Sainte Famille Française Fanar |
                            09/2005 - 06/2020
                        </h4>
                        <p className="card-description">
                            Graduated High School with both the French and the
                            Lebanese Baccalaureates with High Distinction.
                        </p>
                        <ul className="card-list">
                            <li>GPA: 17/20</li>
                            <li>
                                Activities: Volleyball Team Captain and Opposite
                                Hitter, Ping-Pong Team, Gymnastics Team, Guides
                                du Liban.
                            </li>
                        </ul>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">Violin</h3>
                        <h4 className="card-subtitle">
                            Lebanese National Higher Conservatory of Music |
                            09/2011 - 06/2016
                        </h4>
                        <p className="card-description">
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
                <div className="card-section">
                    <div className="card-item">
                        <h3 className="card-title">ZAKA AI Bootcamp</h3>
                        <h4 className="card-subtitle">
                            ZAKA | Issued Sep 2023
                        </h4>
                        <ul className="card-list">
                            <li>Artificial Intelligence</li>
                            <li>Computer Vision</li>
                            <li>Machine Learning</li>
                            <li>Natural Language Processing</li>
                            <li>Deep Learning</li>
                            <li>Data Science</li>
                            <li>Time Series Analysis</li>
                        </ul>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">
                            IEEE Grand Tech 2023 Certification of Attendance
                        </h3>
                        <h4 className="card-subtitle">
                            IEEE Computer Society | Issued Jun 2023
                        </h4>
                        <ul className="card-list">
                            <li>Virtual Reality</li>
                            <li>Metaverse</li>
                        </ul>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">Introduction to Simulink</h3>
                        <h4 className="card-subtitle">
                            ASME University of Balamand Student Section | Issued
                            May 2022
                        </h4>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">
                            First Place Winner in the Lebanon IoT & AI Challenge
                            2021
                        </h3>
                        <h4 className="card-subtitle">
                            Arab IoT & AI Challenge | Issued Nov 2021
                        </h4>
                        <p className="card-description">1st out of 12 teams</p>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">Simulink Onramp</h3>
                        <h4 className="card-subtitle">
                            Mathworks | Issued Apr 2021
                        </h4>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">MATLAB Onramp</h3>
                        <h4 className="card-subtitle">
                            Mathworks | Issued Feb 2021
                        </h4>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">Dean's Honor List</h3>
                        <h4 className="card-subtitle">
                            Faculty of Engineering at the University of
                            Balamand, Al-Kurah
                        </h4>
                        <ul className="card-list">
                            <li>Spring 2023</li>
                            <li>Fall 2022</li>
                            <li>Spring 2022</li>
                            <li>Fall 2021</li>
                            <li>Spring 2021</li>
                            <li>Fall 2020</li>
                        </ul>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">IELTS Academic</h3>
                        <h4 className="card-subtitle">
                            Beirut | Issued Sep 2022 - Expired Sep 2024
                        </h4>
                        <ul className="card-list">
                            <li>Score: 8.0/9.0</li>
                            <li>Listening: 9.0</li>
                            <li>Reading: 8.0</li>
                            <li>Writing: 6.5</li>
                            <li>Speaking: 7.5</li>
                        </ul>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">SAT</h3>
                        <h4 className="card-subtitle">
                            Beirut | Issued Dec 2018
                        </h4>
                        <ul className="card-list">
                            <li>Score: 1300/1600</li>
                            <li>
                                Evidence-Based Reading and Writing Score:
                                610/800
                            </li>
                            <li>Math Score: 690/800</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: "awards",
            title: "Awards",
            content: (
                <div className="card-section">
                    <div className="card-item">
                        <h3 className="card-title">
                            UCI EECS Department Fellowship
                        </h3>
                        <h4 className="card-subtitle">
                            Electrical Engineering and Computer Science
                            Department at the University of California, Irvine
                        </h4>
                        <ul className="card-list">
                            <li>Winter 2025</li>
                            <li>Fall 2024</li>
                            <li>Fall 2023</li>
                        </ul>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">
                            Faculty Award for Academic Excellence
                        </h3>
                        <h4 className="card-subtitle">
                            Faculty of Engineering at the University of Balamand
                            | Jun 2023
                        </h4>
                        <p className="card-description">
                            Recipient of the Faculty Excellent Achievement Award
                            for obtaining the highest GPA among all graduating
                            computer engineering undergraduate students of class
                            2023.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "languages",
            title: "Languages",
            content: (
                <div className="card-section">
                    <div className="card-item">
                        <h3 className="card-title">Arabic</h3>
                        <p className="card-description">Native language</p>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">French</h3>
                        <p className="card-description">
                            Native language, language of education.
                        </p>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">English</h3>
                        <p className="card-description">
                            Fluent in both spoken and written English, used in
                            academic and professional contexts.
                        </p>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">Spanish</h3>
                        <p className="card-description">
                            Beginner in both speaking and writing.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            id: "organizations",
            title: "Organizations",
            content: (
                <div className="card-section">
                    <div className="card-item">
                        <h3 className="card-title">Member, IEEE</h3>
                        <h4 className="card-subtitle">05/2022 - Present</h4>
                        <ul className="card-list">
                            <li>Computer Society</li>
                            <li>Women In Engineering</li>
                            <li>Controls System Society</li>
                            <li>Robotics and Automation Society</li>
                        </ul>
                    </div>
                    <div className="card-item">
                        <h3 className="card-title">Les Guides du Liban</h3>
                        <h4 className="card-subtitle">09/2009 - 08/2015</h4>
                        <ul className="card-list">
                            <li>Team Leader</li>
                            <li>Member</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            id: "interests-and-hobbies",
            title: "Interests and Hobbies",
            content: (
                <div className="card-section">
                    <div className="card-item">
                        <h3 className="card-title">
                            Unordered List of Hobbies and Interests
                        </h3>
                        <ul className="card-list">
                            <li>Volleyball</li>
                            <li>Ping-Pong</li>
                            <li>Gymnastics</li>
                            <li>Badminton</li>
                            <li>Swimming</li>
                            <li>Surfing</li>
                            <li>Hiking</li>
                            <li>Board Games</li>
                            <li>Reading Books</li>
                            <li>Watching Movies</li>
                            <li>Learning Languages</li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="container home-container">
            <Header />
            <Accordion sections={sections} />
        </div>
    );
};

export default About;
