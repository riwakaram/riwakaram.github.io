import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CardItem from "../Components/CardItem";

const Vitae = () => {
    const sections = [
        {
            id: "education",
            title: "Education",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Doctor of Philosophy, Electrical and Computer Engineering"
                        subtitle="University of California, Irvine | 09/2023 - 06/2028"
                        description="Research in multi-agent systems, collaboration in 
                        heterogenous systems, graph neural networks, coverage control, 
                        and quantum computing."
                        list={[
                            "Lab: UCI Robot Ecology Lab",
                            "PI: Professor Magnus Egerstedt",
                        ]}
                    />
                    <CardItem
                        title="Master of Science, Electrical and Computer Engineering"
                        subtitle="University of California, Irvine | 09/2023 - 06/2025"
                        description="Thesis and Research-Based Master's Degree: courses, 
                        seminars, and thesis requirements. Research in formation control, 
                        human-swarm interaction, and applied computer vision."
                        list={[
                            "GPA: 3.96/4.0",
                            "Master Thesis Title: A Graphical Interface for Specifying and Establishing Multi-Robot Formations",
                            "Taken Courses: Computer Architecture, Design & Analysis of Algorithms, Advanced System Software, Control ML & AI, Energy Efficiency, Linear Optimization, Quantum Computing, Network Science, Master Thesis, EECS Seminar Series.",
                            "Audited Courses: Linear Systems, Optimization.",
                        ]}
                    />
                    <CardItem
                        title="Bachelor of Science, Computer Engineering"
                        subtitle="University of Balamand, Al-Kurah | 09/2020 - 05/2023"
                        description="Completed a Bachelor's degree in Computer Engineering and graduated as valedictorian of class 2023. Worked on projects involving embedded systems, computer architecture, and complex engineering design."
                        list={[
                            "GPA: 3.9/4.0",
                            "Activities: Varsity Volleyball Team, IEEE UoB Student Member",
                            "Graduation Project Title: Gamification of Virtual Reality Kitchen Scenarios",
                            "Taken Courses: Calculus I, Calculus II, Circuit Analysis I, Circuit Analysis Lab, Computer Architecture, Computer Embedded Systems, Embedded Controllers Lab, Cybersecurity, Cybersecurity Lab, Differential Equations, Electrical Simulation & Design, Electronics I, Electronics Lab, Engineering Drawing, Engineering Management & Economics, English Communication Skills III, Information Networking I, Information Skills & Search Techniques, Instrumentation Lab, Introduction to Computer Programming, Introduction to Computer Programming Lab, Introduction to Digital Logic Design, Introduction to Psychology, Introduction to the Engineering Design Fundamentals, Linear Algebra, Literature & Identity, Logic Circuits, Logic Lab, Microcontrollers Lab, Microprocessors, Modern Arab Thought, Modern Thought, Numerical Analysis I, Object Oriented Programming, Object Oriented Programming Lab, Operating Systems, PLC Lab, Probability for Engineers, Programmable Logic Controllers, Programming for Engineering Solutions, Senior Design I, Senior Design II, Signal Processing, Signal & Systems Theory, Telecommunications, Telecommunications Lab.",
                        ]}
                    />
                    <CardItem
                        title="French & Lebanese Baccalaureates, General Sciences"
                        subtitle="Collège de la Sainte Famille Française Fanar | 09/2005 - 06/2020"
                        description="Graduated High School with both the French and the Lebanese Baccalaureates with High Distinction."
                        list={[
                            "GPA: 17/20",
                            "Activities: Volleyball Team Captain and Opposite Hitter, Ping-Pong Team, Gymnastics Team, Guides du Liban.",
                        ]}
                    />
                    <CardItem
                        title="Violin"
                        subtitle="Lebanese National Higher Conservatory of Music | 09/2011 - 06/2016"
                        description="Learned the art of playing the violin for 5 years (reached the 5th grade) by playing classical music from famous European artists, as well as taking courses in Music Theory, Solfège, and Harmonies."
                    />
                </div>
            ),
        },
        {
            id: "industry",
            title: "Industry Experience",
            content: (
                <div className="card-section">
                    {/* ASML Card 2025 */}
                    <CardItem
                        title="ASML, Inc."
                        subtitle="Mechatronics Research Engineer Intern"
                        description="June 2025 - September 2025 | Wilton, CT"
                    />
                    {/* ASML Card 2024 */}
                    <CardItem
                        title="ASML, Inc."
                        subtitle="Mechatronics and Control Systems Engineer Intern"
                        description="June 2024 - September 2024 | Wilton, CT"
                        list={[
                            "Developed a Gaussian Process Regression (GPR) model to predict force generated by a piezo-electric actuator, which led to a pending patent",
                            "Enhanced baseline code for model training with various dataset sizes and visualization tools",
                            "Automated a MATLAB/Python script, reducing workflow from 40 hours to an overnight run",
                            "Investigated optimization problems and current-control hardware issues for test stands",
                            "Tools and Skills: Python, MATLAB, MS Excel, GPR, ML, convex optimization, electrical circuits, Sobol space-filled design of experiments, ASML machine software and software processes",
                        ]}
                    />
                    {/* AviaPro Consulting Inc. Card */}
                    <CardItem
                        title="AviaPro Consulting Inc."
                        subtitle="Software Developer"
                        developer="June 2022 - July 2023 | Remote"
                        list={[
                            "Developed web applications and applied software DevOps practices",
                            "Contributed to multiple full stack webdevelopment projects as well as a solo full stack web dev project",
                            "Tools and Skills: HTML, JS, CSS, React.js, Node.js, Databases, Microsoft Tools",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "academic",
            title: "Academic Experience",
            content: (
                <div className="card-section">
                    <CardItem
                        title="University of California, Irvine"
                        subtitle="Graduate Student Researcher"
                        description="April 2025 - June 2025 | Irvine, CA"
                        list={[
                            "Conducting research in collaborative heterogenous multi-agent systems, coverage control, and graph neural networks",
                        ]}
                    />
                    <CardItem
                        title="University of California, Irvine"
                        subtitle="Graduate Student Researcher"
                        description="January 2024 - June 2024 | Irvine, CA"
                        list={[
                            "Conducting research in human-swarm interaction, formation control in multi-agent systems, optimization, and applied computer vision",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "teaching",
            title: "Teaching Experience",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Self-Employed"
                        subtitle="Private Tutor"
                        description="May 2022 – August 2023 | Lebanon"
                        list={[
                            "Privately tutored peers at the University of Balamand, Al-Kurah in courses such as Programming (Python, MATLAB, C), Signals and Systems, Microcontrollers, Embedded Systems, and Computer Architecture.",
                            "Received greatly positive feedback from tutored peers on my teaching skills.",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "certifications",
            title: "Licenses and Certifications",
            content: (
                <div className="card-section">
                    <CardItem
                        title="ZAKA AI Bootcamp"
                        subtitle="ZAKA | Issued Sep 2023"
                        list={[
                            "Artificial Intelligence",
                            "Computer Vision",
                            "Machine Learning",
                            "Natural Language Processing",
                            "Deep Learning",
                            "Data Science",
                            "Time Series Analysis",
                        ]}
                    />
                    <CardItem
                        title="IEEE Grand Tech 2023 Certification of Attendance"
                        subtitle="IEEE Computer Society | Issued Jun 2023"
                        list={["Virtual Reality", "Metaverse"]}
                    />
                    <CardItem
                        title="Dean's Honor List"
                        subtitle="Faculty of Engineering at the University of Balamand, Al-Kurah"
                        list={[
                            "Spring 2023",
                            "Fall 2022",
                            "Spring 2022",
                            "Fall 2021",
                            "Spring 2021",
                            "Fall 2020",
                        ]}
                    />
                    <CardItem
                        title="Introduction to Simulink"
                        subtitle="ASME University of Balamand Student Section | Issued May 2022"
                    />
                    <CardItem
                        title="First Place Winner in the Lebanon IoT & AI Challenge 2021"
                        subtitle="Arab IoT & AI Challenge | Issued Nov 2021"
                        description="1st out of 12 teams"
                    />
                    <CardItem
                        title="Simulink Onramp"
                        subtitle="Mathworks | Issued Apr 2021"
                    />
                    <CardItem
                        title="MATLAB Onramp"
                        subtitle="Mathworks | Issued Feb 2021"
                    />
                    <CardItem
                        title="IELTS Academic"
                        subtitle="Beirut | Issued Sep 2022 - Expired Sep 2024"
                        list={[
                            "Score: 8.0/9.0",
                            "Listening: 9.0",
                            "Reading: 8.0",
                            "Writing: 6.5",
                            "Speaking: 7.5",
                        ]}
                    />
                    <CardItem
                        title="SAT"
                        subtitle="Beirut | Issued Dec 2018"
                        list={[
                            "Score: 1300/1600",
                            "Evidence-Based Reading and Writing Score: 610/800",
                            "Math Score: 690/800",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "awards",
            title: "Awards and Fellowships",
            content: (
                <div className="card-section">
                    <CardItem
                        title="UCI EECS Department Fellowship"
                        subtitle="Electrical Engineering and Computer Science Department at the University of California, Irvine"
                        list={["Winter 2025", "Fall 2024", "Fall 2023"]}
                    />

                    <CardItem
                        title="Faculty Award for Academic Excellence"
                        subtitle="Faculty of Engineering at the University of Balamand | Jun 2023"
                        description="Recipient of the Faculty Excellent Achievement Award for obtaining the highest GPA among all graduating computer engineering undergraduate students of class 2023."
                    />
                </div>
            ),
        },
        {
            id: "languages",
            title: "Languages",
            content: (
                <div className="card-section">
                    <CardItem title="Arabic" description="Native language" />
                    <CardItem
                        title="French"
                        description="Native language, language of education."
                    />
                    <CardItem
                        title="English"
                        description="Fluent in both spoken and written English, used in academic and professional contexts."
                    />
                    <CardItem
                        title="Spanish"
                        description="Beginner in both speaking and writing."
                    />
                </div>
            ),
        },
        {
            id: "organizations",
            title: "Organizations",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Member, IEEE"
                        subtitle="05/2022 - Present"
                        list={[
                            "Computer Society",
                            "Women In Engineering",
                            "Controls System Society",
                            "Robotics and Automation Society",
                        ]}
                    />

                    <CardItem
                        title="Les Guides du Liban"
                        subtitle="09/2009 - 08/2015"
                        list={["Team Leader", "Member"]}
                    />
                </div>
            ),
        },
        {
            id: "interests-and-hobbies",
            title: "Interests and Hobbies",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Unordered List of Hobbies and Interests"
                        list={[
                            "Volleyball",
                            "Ping-Pong",
                            "Gymnastics",
                            "Badminton",
                            "Swimming",
                            "Surfing",
                            "Hiking",
                            "Board Games",
                            "Reading Books",
                            "Watching Movies",
                            "Learning Languages",
                        ]}
                    />
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

export default Vitae;
