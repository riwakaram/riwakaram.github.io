import React from "react";
import Header from "../Components/Header";
import NewsTimeline from "../Components/NewsTimeline";
import NewsEntryHeading from "../Components/NewsEntryHeading";
import Carousel from "../Components/Carousel";
import LebanonAIChallengeCertificate from "../Files/Lebanon_AI_&_IoT_Challenge_First_Place_Winner.pdf";
import GrandTechCertificate from "../Files/Grand_Tech_2023_Certificate_of_Attendance.pdf";
import ZAKACertificate from "../Files/ZAKA_AI_Bootcamp.pdf";
import PrelimPDF from "../Images/Prelim.pdf";
import CDC2025Presentation from "../Files/CDC2025Pres.pdf";
import GEECSANTSPosterPDF from "../Files/GEECSANTS_Poster_2025.pdf";
import GEECSANTS2026PosterPDF from "../Files/GEECS_2026_Poster.pdf";
import GEECSANTS2026Award from "../Files/GEECSANTS_2026_Award.jpg";
import QualExamPresentation from "../Files/Qual_Exam.pdf";
import SCCW2025Presentation from "../Files/SCCW2025.pdf";
import ASMLGoodies from "../Images/ASML_Goodies.jpeg";
import ASML2025 from "../Images/ASML2025.jpeg";
import ASMLPosterAll from "../Images/ASMLPosterAll.jpeg";
import ASMLPosterAll2025 from "../Images/ASMLPosterAll2025.jpeg";
import CDC2025AcceptanceLetter from "../Images/CDC2025AcceptanceLetter.png";
import CDCMerch from "../Images/CDCMerch.jpeg";
import SSCW2025Dinner from "../Images/SSCW2025Dinner.JPG";
import SSCWGroup2025 from "../Images/SSCWGroup2025.jpg";
import SSCWMe012025 from "../Images/SSCWMe_1_2025.jpg";
import SSCWMe022025 from "../Images/SSCWMe_2_2025.jpg";
import CPSIOTWeekBadge from "../Images/CPS_IOT_Week_Badge.jpeg";
import CPSIOTWeekTalk from "../Images/CPS_IOT_Week_Talk.jpeg";
import FacultyAwardCertificate from "../Images/Faculty_Award_for_Academic_Excellence.jpeg";
import UoBDegree from "../Files/UoB_Degree_Certificate.pdf";
import MeInCDC from "../Images/MeinCDC.jpeg";
import GradPic from "../Images/Graduation_Pic.jpg";
import ARMTalkSlidesPDF from "../Files/External Talk - Collaboration in Multi-Agent Systems - Riwa Karam.pdf";

const NewsImage = ({ src, alt }) => (
    <Carousel slides={[{ src, alt, captionTitle: alt }]} />
);

const News = () => {
    const cpsiotweekvolunteering2025 = [
        {
            src: CPSIOTWeekTalk,
            alt: "One of the CPS-IoT Week 2025 talks",
            captionTitle: "At CPS-IoT Week 2025",
        },
        {
            src: CPSIOTWeekBadge,
            alt: "CPS-IoT Week 2025 badge",
            captionTitle: "Behind the scenes as a student volunteer",
        },
    ];

    const sscwPresentations2025 = [
        {
            src: SSCWMe012025,
            alt: "Riwa Karam presenting at SSCW, UCSD",
            captionTitle: "Presenting at SSCW, UCSD",
        },
        {
            src: SSCWMe022025,
            alt: "Riwa Karam presenting at SSCW, UCSD",
            captionTitle: "Presenting at SSCW, UCSD",
        },
        {
            src: SSCWGroup2025,
            alt: "SSCW group photo at UCSD",
            captionTitle: "SSCW Group Photo at UCSD",
        },
        {
            src: SSCW2025Dinner,
            alt: "Dinner after SSCW",
            captionTitle: "Dinner after SSCW at UCSD",
        },
    ];

    const asmlInternship2025 = [
        {
            src: ASML2025,
            alt: "ASML sign at the 2025 internship location",
            captionTitle: "Second ASML Internship",
        },
        {
            src: ASMLPosterAll2025,
            alt: "ASML 2025 intern poster session",
            captionTitle: "ASML 2025 Intern Poster Session",
        },
    ];

    const cdcConference2025 = [
        {
            src: MeInCDC,
            alt: "Riwa Karam at IEEE CDC 2025",
            captionTitle: "At IEEE CDC 2025",
        },
        {
            src: CDCMerch,
            alt: "IEEE CDC 2025 conference materials",
            captionTitle: "Conference Goodies",
        },
    ];

    const entries = [
        {
            date: "December 14-18, 2026",
            title: "Upcoming: IEEE CDC 2026",
            organization: "CDC 2026",
            text: "Getting ready for IEEE CDC 2026 in Hawaii! After presenting at CDC for the first time in Rio de Janeiro in 2025, the next stop brings another chance to catch up with the control community, hear new ideas, and talk about robotics, learning, and multi-agent systems.",
            link: "https://cdc2026.ieeecss.org/",
            linkText: "Conference website",
        },
        {
            date: "October 23, 2026",
            title: "SoCal Control Workshop at UC Santa Barbara",
            organization: "UCSB",
            text: "Attended the Southern California Control Workshop at UC Santa Barbara on October 23! The gathering at Loma Pelona offered another chance to connect with the regional control community and explore new ideas. Another stop in the workshop series after visits to UCLA, USC, UC San Diego, and UC Irvine.",
            link: "https://web.ece.ucsb.edu/~teel/socal-control-workshop-48",
            linkText: "Workshop details",
        },
        {
            date: "September 15, 2026",
            title: "Invited ARM RoboTalk: Collaboration in Multi-Agent Systems",
            organization: "Arm",
            text: "Shared ideas on collaboration in multi-agent systems at an invited ARM RoboTalk in Austin, TX. The talk started with a question: what can robots achieve together that they cannot do alone? From there, it connected complementary capabilities with ecology-inspired resource sharing and graph neural networks, with a look at ongoing directions in collaborative mobility and human–swarm interaction. The slides are linked below.",
            links: [
                {
                    href: "https://www.arm.com",
                    text: "ARM website",
                },
                {
                    href: ARMTalkSlidesPDF,
                    text: "Slides",
                },
            ],
        },
        {
            date: "September 10, 2026",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_freehand-sketching-for-end-user-programming-activity-7508006309019934720-yMMP",
            title: "New Preprint: Freehand Sketching for Robot Swarms",
            organization: "arXiv",
            text: "The sketch-to-swarm preprint is now on arXiv! “Freehand Sketching for End-User Programming of Robot Swarms” explores how a simple drawing can guide a group of robots. The interface turns sketches into target points, robot assignments, and formations without unintended reflections. A user study looks at how people without robotics experience use the interface, and the video shows the robots bringing those drawings to life.",
            links: [
                {
                    href: "https://arxiv.org/abs/2609.11078",
                    text: "Read on arXiv",
                },
                {
                    href: "https://www.youtube.com/watch?v=iVbwI8mktBI",
                    text: "Experiments video",
                },
            ],
        },
        {
            date: "June 2026",
            title: "Joining UCI GEECS as Web Content Manager",
            organization: "GEECS",
            text: "A new way to contribute to the graduate community at UC Irvine! Joined the Society of Graduate Electrical Engineers and Computer Scientists (GEECS) as Web Content Manager, managing and maintaining the society’s website content. A chance to put web development experience to use in support of fellow graduate students.",
            link: "https://geecs.eng.uci.edu/",
            linkText: "GEECS website",
        },
        {
            date: "June 5, 2026",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_robotics-multiagentsystems-graphneuralnetworks-ugcPost-7469183074002472961-wskG/",
            title: "First Place: GEECSANTS Software & Algorithms",
            organization: "GEECS",
            text: "Brought “Learning Altruistic Collaboration in Heterogeneous Multi-Team Systems” to the 2026 GEECS Annual Technology Showcase and came away with first place in Software & Algorithms! The award included $1,000 to support conference attendance and related academic travel. The poster asks when teams should share robots with different capabilities, connecting Hamilton’s rule and graph neural networks to weigh the benefits and costs of each transfer.",
            links: [
                {
                    href: "https://geecs.eng.uci.edu/geecsants2026/",
                    text: "Showcase website",
                },
                {
                    href: GEECSANTS2026PosterPDF,
                    text: "Poster PDF",
                },
            ],
            link: GEECSANTS2026Award,
            linkText: "Award certificate",
        },
        {
            date: "May 21, 2026",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_phd-phdcandidate-uci-activity-7463694667012968448-zyha",
            title: "PhD Qualifying Exam Passed",
            organization: "UCI",
            text: "Passed the PhD qualifying exam—officially a PhD candidate at UC Irvine! The presentation, “Collaboration in Multi-Agent Systems: From Assignment to Learning,” brought together results on multi-team resource allocation and learning-based approaches. It was also a chance to lay out the next research directions with the qualifying committee.",
            link: QualExamPresentation,
            linkText: "Slides",
        },
        {
            date: "May 20, 2026",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_robotics-multiagentsystems-graphneuralnetworks-ugcPost-7469183074002472961-wskG/",
            title: "New Preprint: Learning Altruistic Collaboration",
            organization: "arXiv",
            text: "Shared a new preprint on arXiv: “Learning Altruistic Collaboration in Heterogeneous Multi-Team Systems.” The starting question is simple: when should one team give a robot to another? The answer accounts for different capabilities, team contributions, and transfer costs, using Hamilton’s rule to guide the decision. A graph neural network helps tackle the NP-hard allocation problem at larger scales, with firefighting scenarios in simulation and on physical robots to put the approach to the test.",
            links: [
                {
                    href: "https://arxiv.org/abs/2605.21723",
                    text: "Read on arXiv",
                },
                {
                    href: "https://youtu.be/-2q-zy0wItk",
                    text: "Experiments video",
                },
            ],
        },
        {
            date: "March 25, 2026",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_collaboration-in-multi-robot-systems-taxonomy-activity-7446061765265829888-0yMU",
            title: "New Preprint: Multi-Robot Collaboration Survey",
            organization: "arXiv",
            text: "The multi-robot collaboration survey is on arXiv! “Collaboration in Multi-Robot Systems: Taxonomy and Survey of Frameworks for Collaboration” takes a closer look at three words that often get grouped together: cooperation, coordination, and collaboration. Robot examples help explain the differences, especially when working together creates new capabilities. The survey also brings together collaboration frameworks, open challenges, and possible next directions.",
            link: "https://arxiv.org/abs/2603.23898",
            linkText: "Read on arXiv",
        },
        {
            date: "March 2026",
            title: "Joining the IEEE CSS NextCom Activities Committee",
            organization: "IEEE CSS",
            text: "Joined IEEE CSS NextCom as a General Activities Committee Member! Contributing to activities that support students, early-career researchers, and young professionals in the IEEE Control Systems Society community—a chance to help create opportunities to connect and exchange ideas beyond the lab.",
            link: "https://sites.google.com/view/css-nextcom",
            linkText: "Meet NextCom",
        },
        {
            date: "December 8-12, 2025",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_wrapping-up-an-unforgettable-trip-to-rio-activity-7406921121045917696-GP8t",
            linkedinText: "CDC reflections on LinkedIn",
            title: "First CDC Conference & Paper Presentation",
            organization: "CDC 2025",
            text: "A first CDC presentation, and the first major research conference of the PhD! Traveled to Rio de Janeiro, Brazil, for the 64th IEEE Conference on Decision and Control to present the first-author paper “Resource Allocation for Multi-Team Collaboration Based on Hamilton’s Rule.” The paper connects an ecological model of altruism with sharing resources across robot teams. A few conference photos, the slides, and a presentation recording are below.",
            links: [
                {
                    href: "https://cdc2025.ieeecss.org/",
                    text: "Conference website",
                },
                {
                    href: CDC2025Presentation,
                    text: "Slides",
                },
                {
                    href: "https://youtu.be/BP2W7RUw0c4",
                    text: "Presentation recording",
                },
                {
                    href: "https://www.linkedin.com/posts/riwakaram_resource-allocation-with-multi-team-collaboration-share-7402800989306728448-7Mb2/",
                    text: "CDC announcement on LinkedIn",
                },
            ],
            media: (
                <Carousel id="cdcConference2025" slides={cdcConference2025} />
            ),
        },
        {
            date: "October 24, 2025",
            title: "46th Southern California Control Workshop",
            organization: "UCI",
            text: "This time, the Southern California Control Workshop came to UC Irvine! Attended the 46th edition after earlier visits to UCLA and USC and a presentation at UC San Diego. Another opportunity to stay connected with the regional control community, now on home campus.",
            link: "https://sites.uci.edu/controlworkshop/",
            linkText: "Workshop website",
        },
        {
            date: "September 10, 2025",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_summerinternship-research-asml-ugcPost-7372654758190493697-nY9a/",
            title: "Second ASML Internship Completed",
            organization: "ASML",
            text: "Wrapped up a second summer at ASML in Wilton, Connecticut, as a Mechatronics Research Engineer Intern. The summer focused on Bayesian hierarchical models for machine health: tracking drift and performance changes, understanding uncertainty, and looking for root causes. Then it was back to campus and PhD research, after a summer of connecting statistical models with practical engineering questions.",
        },
        {
            date: "July 15, 2025",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_resource-allocation-with-multi-team-collaboration-share-7351442376608960513-LVDp/",
            title: "First Paper Accepted at IEEE CDC",
            organization: "CDC 2025",
            text: "First paper accepted at IEEE CDC! “Resource Allocation for Multi-Team Collaboration Based on Hamilton’s Rule” was accepted as a regular paper at CDC 2025. This first-author paper brings an ecological view of altruism into decisions about sharing robots across teams. Next stop: presenting it in Rio de Janeiro.",
            link: CDC2025AcceptanceLetter,
            linkText: "Acceptance letter",
        },
        {
            date: "June 23, 2025",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_asml-summerinternship-research-ugcPost-7334416176459980801-42_g/",
            title: "Returning to ASML for a Second Summer",
            organization: "ASML",
            text: "Back at ASML in Wilton, Connecticut, for a second summer, this time as a Mechatronics Research Engineer Intern. The focus shifted to machine health monitoring and Bayesian hierarchical modeling—looking at uncertainty and root causes as machines change over their lifetimes.",
            media: (
                <Carousel id="asmlInternship2025" slides={asmlInternship2025} />
            ),
        },
        {
            date: "June 14, 2025",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_graduation-masterofscience-thesis-ugcPost-7341937841414774784-CsiN/",
            title: "M.S. Graduation at UC Irvine",
            organization: "UCI",
            text: "Graduation day at UC Irvine! Celebrated earning an M.S. in Electrical and Computer Engineering, with the thesis “A Graphical Interface for Specifying and Establishing Multi-Robot Formations.” The thesis brought together human–swarm interaction, computer vision, and formation control around one idea: turning drawings into robot formations.",
            media: (
                <NewsImage
                    src={GradPic}
                    alt="Riwa Karam at graduation"
                    className="portrait-media"
                />
            ),
        },
        {
            date: "June 6, 2025",
            title: "Sketch-to-Swarm Poster at GEECSANTS",
            organization: "GEECS",
            text: "Shared the master’s thesis poster at the 2025 GEECS Annual Technology Showcase. It follows a drawing all the way to a robot formation: processing the image, picking target points, assigning robots, and guiding their motion. Simulation examples and Robotarium experiments show the shapes taking form without unintended flips.",
            links: [
                {
                    href: "https://geecs.eng.uci.edu/geecsants2025/",
                    text: "Showcase website",
                },
                {
                    href: GEECSANTSPosterPDF,
                    text: "Poster PDF",
                },
            ],
        },
        {
            date: "May 5-9, 2025",
            title: "Student Volunteering at CPS-IoT Week",
            organization: "UCI",
            text: "Spent CPS-IoT Week 2025 at UC Irvine helping behind the scenes as a student volunteer. From registration and poster sessions to attendee logistics and event operations, the week offered a different view of what goes into bringing a research conference together.",
            link: "https://cps-iot-week2025.ics.uci.edu",
            linkText: "Conference website",
            media: (
                <Carousel
                    id="cpsiotweekvolunteering2025"
                    slides={cpsiotweekvolunteering2025}
                />
            ),
        },
        {
            date: "April 29, 2025",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_robotics-latimes-ecologyinspiredengineering-share-7323783916547383299-21vG/",
            title: "UCI Robot Ecology Lab in the LA Times",
            organization: "LA Times",
            text: "Joined labmates Dr. Alexander A. Nguyen and Dr. Efrain Mendez Flores for an LA Times interview about the UCI Robot Ecology Lab. The article shares a look at the lab’s nature-inspired robotics with a wider audience. You can read it at the link below.",
            link: "https://www.latimes.com/socal/daily-pilot/entertainment/story/2025-04-29/uci-robot-ecology-lab-inspired-by-nature",
            linkText: "Read the article",
            links: [
                {
                    href: "https://www.linkedin.com/posts/magnus-egerstedt-26a46795_uci-robot-ecology-lab-inspired-by-nature-activity-7324113040784732160-ZALf",
                    text: "Magnus Egerstedt’s perspective",
                },
                {
                    href: "https://www.linkedin.com/feed/update/urn:li:activity:7331189070477320192/",
                    text: "UCI CEE: RaccoonBot spotlight",
                },
            ],
        },
        {
            date: "April 18, 2025",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_socalcontrolworkshop-research-teambonding-ugcPost-7319960994288390144-0gHR/",
            title: "Research Presentation at the 45th Control Workshop",
            organization: "UCSD",
            text: "Took “Resource Allocation with Multi-Team Collaboration Based on Hamilton’s Rule” to the 45th Southern California Control Workshop at UC San Diego. The presentation explored how an idea from ecology can help robot teams share resources when tasks are spread across different regions. A few photos from the day and the slides are below.",
            links: [
                {
                    href: "http://terrano.ucsd.edu/jorge/sccw/index.html",
                    text: "Workshop website",
                },
                {
                    href: SCCW2025Presentation,
                    text: "Slides",
                },
            ],
            media: (
                <Carousel
                    id="sscwPresentation2025"
                    slides={sscwPresentations2025}
                />
            ),
        },
        {
            date: "November 1, 2024",
            title: "44th Southern California Control Workshop",
            organization: "USC",
            text: "Visited USC for the 44th Southern California Control Workshop, the second visit to the series after UCLA earlier in the year. Another chance to get to know the Southern California control community alongside graduate research at UC Irvine.",
            link: "https://csc.usc.edu/socal/2024Fall/index.html",
            linkText: "Workshop website",
        },
        {
            date: "September 13, 2024",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_internship-asml-engineering-activity-7240730333023719424-rInH",
            title: "First ASML Internship Completed",
            organization: "ASML",
            text: "Wrapped up the first ASML internship in mechatronics and control systems. Highlights included Gaussian process models for piezoelectric actuator force prediction and automating MATLAB/Python tests, bringing a 40-hour workflow down to an overnight run. Then it was back to the Robot Ecology Lab to continue graduate research.",
        },
        {
            date: "August 7, 2024",
            title: "ASML Intern Poster Presentation",
            organization: "ASML",
            text: "Shared progress at ASML’s intern poster session during the first summer internship. The summer focused on data-driven models for mechatronic systems, including Gaussian process regression for actuator force prediction and plenty of analysis in Python and MATLAB.",
            media: (
                <NewsImage
                    src={ASMLPosterAll}
                    alt="ASML intern poster presentation"
                    className="portrait-media"
                />
            ),
        },
        {
            date: "June 24, 2024",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_internship-asml-mechatronics-ugcPost-7198420279482589184-0gGk/",
            title: "Starting the First ASML Internship",
            organization: "ASML",
            text: "Started the first summer internship at ASML in Wilton, Connecticut, as a Mechatronics and Control Systems Engineer Intern. A chance to bring modeling, machine learning, and software skills into high-precision mechatronic systems—and get hands-on with engineering questions beyond campus.",
            media: (
                <NewsImage
                    src={ASMLGoodies}
                    alt="ASML welcome items"
                    className="portrait-media"
                />
            ),
        },
        {
            date: "April 19, 2024",
            title: "First Southern California Control Workshop",
            organization: "UCLA",
            text: "First visit to the Southern California Control Workshop! Attended the 43rd edition at UCLA, getting an introduction to the regional control community and connections with robotics, optimization, and multi-agent systems.",
            link: "https://samueli.ucla.edu/upcoming-events/43rd-southern-california-control-workshop/",
            linkText: "Workshop Website",
        },
        {
            date: "April 8, 2024",
            title: "PhD Preliminary Examination Passed",
            organization: "UCI",
            text: "Passed the PhD preliminary exam after meeting the coursework and grade requirements. One of the early steps in the PhD at UC Irvine, with the qualifying exam and candidacy still ahead.",
            link: PrelimPDF,
            linkText: "View letter",
        },
        {
            date: "September 25, 2023",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_uci-phd-ecologyrobotics-activity-7158285815415033856-jFYz",
            title: "Beginning Graduate Studies at UC Irvine",
            organization: "UCI",
            text: "Started graduate studies at UC Irvine with M.S. and PhD orientations. A new chapter after computer engineering at the University of Balamand: electrical and computer engineering, with robotics and multi-agent systems at the center.",
        },
        {
            date: "August 2023",
            title: "Taking Part in the ZAKA AI Bootcamp",
            organization: "ZAKA",
            text: "Joined the ZAKA AI Bootcamp after winning admission through the IEEE Grand Tech challenge in June. A chance to build on that win and explore machine learning, computer vision, and natural language processing!",
            link: ZAKACertificate,
            linkText: "Bootcamp certificate",
        },
        {
            date: "July 26, 2023",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_valedictorian-achievementunlocked-nextchapter-ugcPost-7096892475516018691-_pMc/",
            title: "Faculty Award for Academic Excellence",
            organization: "Balamand",
            text: "Received the Faculty Award for Academic Excellence from the University of Balamand’s Faculty of Engineering. A special way to close out undergraduate studies, alongside graduating as valedictorian.",
            linkText: "Award Image",
            link: FacultyAwardCertificate,
        },
        {
            date: "July 8, 2023",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_graduation2023-computerengineering-valedictorian-activity-7086630474613145600-ArGO",
            title: "B.S. Graduation as Valedictorian",
            organization: "Balamand",
            text: "Graduated from the University of Balamand with a B.S. in Computer Engineering as valedictorian! The degree brought together embedded systems, computer architecture, and software development, finishing with a graduation project in virtual reality.",
            linkText: "Diploma PDF",
            link: UoBDegree,
        },
        {
            date: "June 3, 2023",
            title: "IEEE Grand Tech Challenge Win & ZAKA AI Bootcamp Admission",
            organization: "IEEE Computer Society",
            text: "Won the challenge at IEEE Grand Tech 2023 and earned admission to the ZAKA AI Bootcamp as the prize! A day exploring virtual reality and the metaverse with the IEEE Computer Society opened the door to a deeper dive into AI.",
            link: GrandTechCertificate,
            linkText: "Attendance certificate",
        },
        {
            date: "May 16, 2023",
            title: "B.S. Project: Virtual Reality Kitchen Scenarios",
            text: "Presented “Gamification of Virtual Reality Kitchen Scenarios” with teammate Fady Gebran as the B.S. graduation project. A chance to bring computer engineering into an interactive virtual environment and share the final project at the close of undergraduate studies.",
        },
        {
            date: "February 7, 2023",
            title: "Acceptance to UC Irvine",
            organization: "UCI",
            text: "An acceptance letter from UC Irvine marked the start of the next chapter! With undergraduate studies at the University of Balamand coming to a close, the path ahead led to M.S. and PhD studies beginning that September.",
        },
        {
            date: "September 1, 2022",
            title: "Continuing at AviaPro as a Part-Time Software Developer",
            organization: "AviaPro",
            text: "The summer co-op grew into a part-time role! Continued remotely with AviaPro Consulting through July 2023, alongside undergraduate studies at the University of Balamand. The software development role spanned team projects and an independently developed full-stack application, with Git, CI/CD, and infrastructure as code supporting the development workflow.",
        },
        {
            date: "June 6, 2022",
            title: "Starting a Summer Internship at AviaPro",
            organization: "AviaPro",
            text: "Joined AviaPro Consulting as a Software Developer for a summer co-op running from June through August 2022. A chance to put computer engineering into practice through web development, using React and Node.js to help turn Excel-based repositories into connected databases and internal tools. The hybrid role marked the beginning of a longer chapter with the team.",
        },
        {
            date: "September 11, 2021",
            title: "First Prize: Lebanon IoT & AI Challenge",
            organization: "Lebanon IoT",
            text: "Celebrated a team win at the Lebanon IoT & AI Challenge, placing first among 12 teams! An early milestone during computer engineering studies at the University of Balamand, and a chance to bring ideas in AI and connected technology into a team challenge.",
            linkedin:
                "https://www.linkedin.com/posts/riwakaram_ai-iot-innovation-share-6842755736435474432-wCGh/",
            link: LebanonAIChallengeCertificate,
            linkText: "Certificate PDF",
        },
    ];

    const [featuredEntry, ...timelineEntries] = entries;
    const newsYears = entries.map((entry) =>
        Number(entry.date.match(/\d{4}/g).slice(-1)[0]),
    );
    const timelineRange = `${Math.min(...newsYears)}-${Math.max(...newsYears)}`;

    const renderEntryLinks = (entry) => {
        const links = [
            ...(entry.link ? [{ href: entry.link, text: entry.linkText }] : []),
            ...(entry.links || []),
            ...(entry.linkedin
                ? [
                      {
                          href: entry.linkedin,
                          text: entry.linkedinText || "LinkedIn post",
                      },
                  ]
                : []),
        ];

        if (!links.length) return null;

        return (
            <div className="news-links">
                {links.map((link) => (
                    <a
                        className="news-link"
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
    };

    return (
        <main className="page-shell" id="main-content" tabIndex={-1}>
            <Header compact />
            <section className="section-intro news-intro">
                <div>
                    <p className="section-kicker">News</p>
                    <h2>
                        Milestones from research, conferences, and internships.
                    </h2>
                    <p>
                        A few updates from the PhD journey, in the lab and
                        beyond.
                    </p>
                </div>
                <div className="news-stats" aria-label="News summary">
                    <span>
                        <strong>{entries.length}</strong>
                        Updates
                    </span>
                    <span>
                        <strong>{timelineRange}</strong>
                        Timeline
                    </span>
                </div>
            </section>

            <section
                className={`news-feature${featuredEntry.media ? " has-media" : ""}`}
            >
                <div>
                    <NewsEntryHeading entry={featuredEntry} featured />
                    <p>{featuredEntry.text}</p>
                    {renderEntryLinks(featuredEntry)}
                </div>
                {featuredEntry.media && (
                    <aside className="news-feature-media">
                        {featuredEntry.media}
                    </aside>
                )}
            </section>

            <NewsTimeline
                entries={timelineEntries}
                renderLinks={renderEntryLinks}
            />
        </main>
    );
};

export default News;
