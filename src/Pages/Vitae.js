import React from "react";
import Header from "../Components/Header";
import Accordion from "../Components/Accordion";
import CardItem from "../Components/CardItem";
import CDC2025Paper from "../Files/CDC2025.pdf";
import HonorListFall2020 from "../Images/01_Fall2020_Honor's_List_Diploma.png";
import HonorListSpring2021 from "../Images/02_Spring2021_Honor's_List_Diploma.png";
import HonorListFall2021 from "../Images/03_Fall2021_Honor's_List_Diploma.jpg";
import HonorListSpring2022 from "../Images/04_Spring2022_Honor's_List_Diploma.png";
import HonorListFall2022 from "../Images/05_Fall2022_Honor's_List_Diploma.png";
import HonorListSpring2023 from "../Images/06_Spring2023_Honor's_List_Diploma.png";
import SimulinkIntroCertificate from "../Images/ASME Certificate of Participation - Introduction to Simulink.jpg";
import FacultyAwardCertificate from "../Images/Faculty Award for Academic Excellence.jpeg";
import GrandTechCertificate from "../Files/Grand Tech 2023 - Certificate of Attendance.pdf";
import IEEEXtremeCertificate from "../Files/IEEE Xtreme 2022 Certificate of Participation.pdf";
import LebanonAIChallengeCertificate from "../Files/Lebanon AI & IoT Challenge - First Place Winner.pdf";
import MATLABOnrampCertificate from "../Files/MATLAB Onramp Course Completion Certificate.pdf";
import MentorCollectiveCertificate from "../Files/Mentor Collective Mentorship.pdf";
import MSThesis from "../Files/MS-Thesis.pdf";
import Resume from "../Files/RiwaKaram_Resume.pdf";
import AdditionalCertificate from "../Files/Riwa Karam - 2026-03-26.pdf";
import SimulinkOnrampCertificate from "../Files/Simulink Onramp Course Completion Certificate.pdf";
import SurveyPaper from "../Files/Survey.pdf";
import ZAKACertificate from "../Files/ZAKA AI Bootcamp.pdf";

const ResourceLinks = ({ links }) => (
    <div className="publication-links vitae-resource-links">
        {links.map((link) => (
            <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={link.text}
            >
                {link.text}
            </a>
        ))}
    </div>
);

const Vitae = () => {
    const highlights = [
        {
            label: "Current Role",
            value: "Graduate Student Researcher",
            detail: "Electrical and Computer Engineering, UC Irvine",
        },
        {
            label: "Research Home",
            value: "Robot Ecology Lab",
            detail: "Multi-agent systems, machine learning, and robotics",
        },
        {
            label: "Industry Experience",
            value: "ASML Internships",
            detail: "Mechatronics research, modeling, and machine learning",
        },
    ];

    const sections = [
        {
            id: "education",
            title: "Education",
            content: (
                <div className="card-section plain-card-lists">
                    <CardItem
                        title="Doctor of Philosophy, Electrical and Computer Engineering"
                        subtitle="University of California, Irvine | 09/2023 - Expected 06/2028"
                        description="Research in collaborative multi-agent systems, optimization, machine learning, ecology robotics, coverage control, formation control, and human-swarm interaction."
                        list={[
                            "Lab: UCI Robot Ecology Lab",
                            "Advisors: Professor Magnus Egerstedt and Professor Yanning Shen",
                            "Clubs: Table Tennis, GEECS",
                        ]}
                    />
                    <CardItem
                        title="Master of Science, Electrical and Computer Engineering"
                        subtitle="University of California, Irvine | 09/2023 - 06/2025"
                        description="Thesis and Research-Based Master's Degree: courses, 
                        seminars, and thesis requirements. Research in formation control, 
                        human-swarm interaction, and applied computer vision."
                        list={[
                            "GPA: 3.975/4.0",
                            "Master Thesis Title: A Graphical Interface for Specifying and Establishing Multi-Robot Formations",
                            "Relevant Coursework: Optimization, Network Science, Control and Machine Learning, Quantum Computing.",
                        ]}
                    />
                    <CardItem
                        title="Bachelor of Science, Computer Engineering"
                        subtitle="University of Balamand, Al-Kurah | 09/2020 - 05/2023"
                        description="Completed a Bachelor's degree in Computer Engineering and graduated as valedictorian of class 2023. Worked on projects involving embedded systems, computer architecture, and complex engineering design."
                        list={[
                            "GPA: 3.9/4.0",
                            "Computer Engineering Class of 2020 Valedictorian",
                            "Activities: Varsity Volleyball Team, IEEE UoB Student Member",
                            "Graduation Project Title: Gamification of Virtual Reality Kitchen Scenarios",
                            "Relevant Coursework: Computer Architecture, Embedded Systems, Microcontrollers, Microprocessors, Operating Systems, Object-Oriented Programming, Cybersecurity, Signal Processing, Signals and Systems, Telecommunications, Probability for Engineers, Numerical Analysis, Linear Algebra, Differential Equations, Circuit Analysis, Electronics, and Programmable Logic Controllers.",
                        ]}
                    />
                    <CardItem
                        title="French & Lebanese Baccalaureates, General Sciences"
                        subtitle="Collège de la Sainte Famille Française Fanar | 09/2005 - 06/2020"
                        description="Graduated High School with both the French and the Lebanese Baccalaureates with High Distinction."
                        list={[
                            "GPA: 17.1/20",
                            "Activities: Volleyball Team Captain and Opposite Hitter, Ping-Pong Team, Gymnastics Team, Guides du Liban.",
                        ]}
                    />
                    <CardItem
                        title="Violin"
                        subtitle="Lebanese National Higher Conservatory of Music | 09/2011 - 06/2016"
                        description="Learned the art of playing the violin for 5 years by playing classical music from famous European artists, as well as taking courses in Music Theory, Solfège, and Harmonies."
                    />
                </div>
            ),
        },
        {
            id: "industry",
            title: "Industry Experience",
            content: (
                <div className="card-section plain-card-lists">
                    <CardItem
                        title="ASML, Inc."
                        subtitle="Mechatronics Research Engineer Intern"
                        description="June 2025 - September 2025 | Wilton, CT"
                        list={[
                            "Investigated machine health monitoring using statistical modeling and Bayesian hierarchical methods for uncertainty quantification and structural modeling.",
                            "Developed a Bayesian hierarchical model using Python and the pymc library to predict drift effects and performance degradation, enabling root-cause analysis across machine lifetimes.",
                            "Developed decision tree, random forest, multiple regression, and other toy regression models on subsets of the data to compare results with the Bayesian model and better understand the data.",
                            "Conducted data collection, data analysis, and data preprocessing using Python and MATLAB, including regression modeling, principal component analysis (PCA), and heatmap-based pattern recognition.",
                            "Learned and applied Monte Carlo Markov Chains (MCMC), Bayesian statistics, statistical methods, and time-lag regression techniques.",
                        ]}
                    />
                    <CardItem
                        title="ASML, Inc."
                        subtitle="Mechatronics and Control Systems Engineer Intern"
                        description="June 2024 - September 2024 | Wilton, CT"
                        list={[
                            "Developed a Gaussian Process Regression (GPR) model using Python and MATLAB to predict force generated by a piezo-electric actuator with up to +/-2 Newtons of accuracy, which led to an ASML invention.",
                            "Conducted data analysis and multiple toy regressions and machine learning models to understand correlations and co-dependencies in the data.",
                            "Automated and merged MATLAB and Python scripts that run testing workflows for mechatronics and software teams, reducing runtime from 40 hours to an overnight run.",
                            "Investigated feasibility of optimization problems and current-control hardware issues for test stands by analyzing electrical circuitry and alternative hardware.",
                        ]}
                    />
                    <CardItem
                        title="AviaPro Consulting Inc."
                        subtitle="Software Developer"
                        description={
                            <>
                                Co-op: June 2022 - August 2022 | Hybrid
                                <br />
                                Part-time: September 2022 - July 2023 | Remote
                            </>
                        }
                        list={[
                            "Developed several web applications using React.js and Node.js, migrating the company from Excel-based repositories to a streamlined interface with multiple interconnected databases and internal tools.",
                            "Applied software DevOps practices such as CI/CD, Infrastructure as Code, and Git.",
                            "Contributed to multiple full-stack web development projects as well as a solo full-stack web development project.",
                            "Started as a summer co-op and transitioned to part-time work in September 2022.",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "academic",
            title: "Academic Experience",
            content: (
                <div className="card-section plain-card-lists">
                    <CardItem
                        title="University of California, Irvine"
                        subtitle="Graduate Student Researcher"
                        description="October 2023 - Present | Irvine, CA"
                        list={[
                            "Conducting research in collaborative multi-agent systems, optimization, machine learning, ecology robotics, coverage control, formation control, and human-swarm interaction under the supervision of Professors Magnus Egerstedt and Yanning Shen.",
                            "Actively helping maintain the Robot Ecology Lab Robotarium testbed through testing, debugging, robot repair, and troubleshooting.",
                            "Presented my first-author accepted regular paper at the 64th IEEE Conference on Decision and Control (CDC) in Rio de Janeiro, Brazil.",
                            "Presented research findings at the 45th SoCal Control Workshop at the University of California, San Diego.",
                            "Presented a poster on my master's thesis at the 2025 UCI GEECS Annual Technology Showcase.",
                            "Mentored undergraduate student lab members and worked together on related projects.",
                            "Co-wrote the Robot Ecology Lab manual, including debugging processes, experiment tutorials, and Vicon system maintenance.",
                            "Conducted multiple lab tours with other lab members to more than 100 visitors, including live demonstrations of homogeneous robots in the Robotarium performing collaborative algorithms.",
                        ]}
                    />
                </div>
            ),
        },
        {
            id: "teaching",
            title: "Teaching Experience",
            content: (
                <div className="card-section plain-card-lists">
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
            id: "publications",
            title: "Publications",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Learning Altruistic Collaboration in Heterogeneous Multi-Team Systems"
                        subtitle="arXiv preprint, submitted | 2026"
                        description="Riwa Karam, Ruoyu Lin, Brooks A. Butler, and Magnus Egerstedt"
                    />
                    <CardItem
                        title="Collaboration in Multi-Robot Systems: Taxonomy and Survey over Frameworks for Collaboration"
                        subtitle="arXiv preprint, submitted | 2026"
                        description="Riwa Karam, Alexander A. Nguyen, Ruoyu Lin, David R. Martin, Diana Morales, Brooks A. Butler, and Magnus Egerstedt"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: SurveyPaper,
                                    text: "PDF",
                                },
                                {
                                    href: "https://doi.org/10.48550/arXiv.2603.23898",
                                    text: "DOI",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="Resource Allocation for Multi-Team Collaboration Based on Hamilton's Rule"
                        subtitle="IEEE 64th Conference on Decision and Control | 2025"
                        description="Riwa Karam, Ruoyu Lin, Brooks A. Butler, and Magnus Egerstedt. Rio de Janeiro, Brazil, pp. 6891-6898."
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: CDC2025Paper,
                                    text: "PDF",
                                },
                                {
                                    href: "https://doi.org/10.1109/CDC57313.2025.11312845",
                                    text: "DOI",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="A Graphical Interface for Specifying and Establishing Multi-Robot Formations"
                        subtitle="M.S. Thesis, University of California, Irvine | 2025"
                        description="Riwa Karam"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: MSThesis,
                                    text: "PDF",
                                },
                                {
                                    href: "https://escholarship.org/uc/item/25p8p0kq",
                                    text: "Official Record",
                                },
                            ]}
                        />
                    </CardItem>
                </div>
            ),
        },
        {
            id: "volunteering",
            title: "Volunteering",
            content: (
                <div className="card-section">
                    <CardItem
                        title="IEEE CSS NextCom"
                        subtitle="General Activities Committee Member | March 2026 - Present"
                        description="Contributing to activities that support students, early career researchers, and young professionals in the IEEE Control Systems Society community."
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: "https://sites.google.com/view/css-nextcom",
                                    text: "Website",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="CPS-IoT Week 2025"
                        subtitle="Student Volunteer | May 5-9, 2025 | University of California, Irvine"
                        description="Supported registration, poster sessions, attendee logistics, and event operations."
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: "https://cps-iot-week2025.ics.uci.edu",
                                    text: "Website",
                                },
                            ]}
                        />
                    </CardItem>
                </div>
            ),
        },
        {
            id: "skills",
            title: "Skills",
            content: (
                <div className="card-section">
                    <CardItem
                        title="Programming Languages and Libraries"
                        list={[
                            "MATLAB",
                            "Python",
                            "Scikit-learn",
                            "PyTorch",
                            "Keras",
                            "NumPy",
                            "Pandas",
                            "Matplotlib",
                            "Shell Scripting",
                            "pymc",
                            "C",
                            "Java",
                            "C#",
                        ]}
                    />
                    <CardItem
                        title="Hardware Technologies"
                        list={[
                            "Motion Capture Systems",
                            "Robotic Testbeds",
                            "Robot building",
                            "Robot debugging",
                        ]}
                    />
                    <CardItem
                        title="Other Tools and Technologies"
                        list={[
                            "Git",
                            "GitHub",
                            "LaTeX",
                            "Simulink",
                            "Visual Studio Code",
                            "Unity",
                            "Microsoft Tools",
                            "Google Tools",
                        ]}
                    />
                    <CardItem
                        title="Soft Skills"
                        list={[
                            "Research",
                            "Critical thinking",
                            "Time management",
                            "Verbal communication",
                            "Written communication",
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
                        title="Mentor Collective DE&I"
                        subtitle="Mentor Collective | Issued Mar 2026"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: "https://learning.mentorcollective.org/certificates/6emjmh672f",
                                    text: "Credential",
                                },
                                {
                                    href: AdditionalCertificate,
                                    text: "Certificate PDF",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="Mentor Collective Mentorship"
                        subtitle="Mentor Collective | Issued Jun 2025"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: "https://learning.mentorcollective.org/certificates/vadblhvymk",
                                    text: "Credential",
                                },
                                {
                                    href: MentorCollectiveCertificate,
                                    text: "Certificate PDF",
                                },
                            ]}
                        />
                    </CardItem>
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
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: "https://academy.zaka.ai/certificates/e1l4bhnvmt",
                                    text: "Credential",
                                },
                                {
                                    href: ZAKACertificate,
                                    text: "Certificate PDF",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="IEEE Grand Tech 2023 Certification of Attendance"
                        subtitle="IEEE Computer Society | Issued Jun 2023"
                        list={["Virtual Reality", "Metaverse"]}
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: GrandTechCertificate,
                                    text: "Certificate PDF",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="IEEE Xtreme 2022 Certificate of Participation"
                        subtitle="IEEE | Issued Oct 2022"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: IEEEXtremeCertificate,
                                    text: "Certificate PDF",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="Introduction to Simulink"
                        subtitle="ASME University of Balamand Student Section | Issued May 2022"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: SimulinkIntroCertificate,
                                    text: "Certificate Image",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="First Place Winner in the Lebanon IoT & AI Challenge 2021"
                        subtitle="Arab IoT & AI Challenge | Issued Nov 2021"
                        description="1st out of 12 teams"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: LebanonAIChallengeCertificate,
                                    text: "Certificate PDF",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="Simulink Onramp"
                        subtitle="Mathworks | Issued Apr 2021"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=283c4d72-976f-4871-82d9-7db96fbd10b8&",
                                    text: "Credential",
                                },
                                {
                                    href: SimulinkOnrampCertificate,
                                    text: "Certificate PDF",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="MATLAB Onramp"
                        subtitle="Mathworks | Issued Feb 2021"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=925bb2c8-0edd-40c8-a553-c820856b3b0f&",
                                    text: "Credential",
                                },
                                {
                                    href: MATLABOnrampCertificate,
                                    text: "Certificate PDF",
                                },
                            ]}
                        />
                    </CardItem>
                </div>
            ),
        },
        {
            id: "standardized-tests",
            title: "Standardized Tests",
            content: (
                <div className="card-section">
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
            title: "Fellowships and Awards",
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
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: FacultyAwardCertificate,
                                    text: "Award Image",
                                },
                            ]}
                        />
                    </CardItem>
                    <CardItem
                        title="Dean's Honor List"
                        subtitle="University of Balamand, Faculty of Engineering | August 2020 - June 2023"
                    >
                        <ResourceLinks
                            links={[
                                {
                                    href: HonorListFall2020,
                                    text: "Fall 2020",
                                },
                                {
                                    href: HonorListSpring2021,
                                    text: "Spring 2021",
                                },
                                {
                                    href: HonorListFall2021,
                                    text: "Fall 2021",
                                },
                                {
                                    href: HonorListSpring2022,
                                    text: "Spring 2022",
                                },
                                {
                                    href: HonorListFall2022,
                                    text: "Fall 2022",
                                },
                                {
                                    href: HonorListSpring2023,
                                    text: "Spring 2023",
                                },
                            ]}
                        />
                    </CardItem>
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
                        description="High proficiency, language of education in school."
                    />
                    <CardItem
                        title="English"
                        description="High proficiency, language of education in college."
                    />
                    <CardItem
                        title="Spanish"
                        description="Beginner, Duolingo score of 38 (A2 level of CEFR)."
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
                        title="Graduate Student Member, IEEE"
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
                        list={[
                            "Volleyball",
                            "Ping-Pong",
                            "Running",
                            "Gymnastics",
                            "Biking",
                            "Surfing",
                            "Swimming",
                            "Music",
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
        <main className="page-shell">
            <Header compact />
            <section className="section-intro vitae-intro">
                <div>
                    <p className="section-kicker">Curriculum Vitae</p>
                    <h2>Academic training, research, and professional work.</h2>
                    <p>
                        A structured overview of my education, research,
                        industry experience, publications, awards, and skills.
                    </p>
                </div>
                <a
                    className="button-secondary"
                    href={Resume}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download PDF
                </a>
            </section>

            <section className="vitae-highlight-grid">
                {highlights.map((item) => (
                    <article className="vitae-highlight-card" key={item.label}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                        <p>{item.detail}</p>
                    </article>
                ))}
            </section>

            <section className="vitae-content">
                <div className="section-heading-row">
                    <div>
                        <p className="section-kicker">Details</p>
                        <h2>Full CV</h2>
                    </div>
                </div>
                <Accordion sections={sections} />
            </section>
        </main>
    );
};

export default Vitae;
