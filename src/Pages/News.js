import React from "react";
import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import PrelimPDF from "../Images/Prelim.pdf";
import CDC2025Presentation from "../Files/CDC2025Pres.pdf";
import GEECSANTSPosterPDF from "../Files/GEECSANTS Poster 2025.pdf";
import SCCW2025Presentation from "../Files/SCCW2025.pdf";
import ASMLGoodies from "../Images/ASML Goodies.jpeg";
import ASML2025 from "../Images/ASML2025.jpeg";
import ASMLPosterAll from "../Images/ASMLPosterAll.jpeg";
import ASMLPosterAll2025 from "../Images/ASMLPosterAll2025.jpeg";
import CDC2025AcceptanceLetter from "../Images/CDC2025AcceptanceLetter.png";
import CDCMerch from "../Images/CDCMerch.jpeg";
import SSCW2025Dinner from "../Images/SSCW2025Dinner.JPG";
import SSCWGroup2025 from "../Images/SSCWGroup2025.jpg";
import SSCWMe012025 from "../Images/SSCWMe_1_2025.jpg";
import SSCWMe022025 from "../Images/SSCWMe_2_2025.jpg";
import CPSIOTWeekBadge from "../Images/CPS-IOT Week Badge.jpeg";
import CPSIOTWeekTalk from "../Images/CPS-IOT Week Talk.jpeg";
import FacultyAward from "../Images/Faculty Award for Academic Excellence.jpeg";
import GEECSANTSPoster2025 from "../Images/Me Next to GEECSANTS Poster 2025.jpeg";
import MeInCDC from "../Images/MeinCDC.jpeg";
import GradPic from "../Images/Graduation Pic.jpg";

const NewsImage = ({ src, alt, className = "" }) => (
    <div className={`news-media ${className}`}>
        <img src={src} alt={alt} loading="lazy" />
    </div>
);

const News = () => {
    const cpsiotweekvolunteering2025 = [
        {
            src: CPSIOTWeekBadge,
            alt: "CPS-IoT Week 2025 badge",
            captionTitle: "CPS-IoT Week Badge and Volunteer Tag",
        },
        {
            src: CPSIOTWeekTalk,
            alt: "One of the CPS-IoT Week 2025 talks",
            captionTitle: "One of the CPS-IoT Week 2025 Talks",
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
            alt: "Riwa Karam at ASML during the 2025 internship",
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
            date: "May 21, 2026",
            title: "Passed My PhD Qualifying Exam",
            text: "I passed my PhD Qualifying Exam, a major milestone where I presented my current research and future research plans to my committee. Officially a PhD Candidate at UC Irvine!",
        },
        {
            date: "December 8-12, 2025",
            title: "First Conference: IEEE CDC 2025",
            text: "I attended my first major research conference, the 64th IEEE Conference on Decision and Control in Rio de Janeiro, Brazil, where I presented my first-author paper on resource allocation for multi-team collaboration.",
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
            ],
            media: (
                <Carousel id="cdcConference2025" slides={cdcConference2025} />
            ),
        },
        {
            date: "September 10, 2025",
            title: "Completed My Second ASML Internship",
            text: "I completed my second summer internship at ASML as a Mechatronics Research Engineer Intern, and headed back to campus to focus on research for my PhD",
        },
        {
            date: "July 15, 2025",
            title: "First Paper Acceptance",
            text: "My first-author paper on resource allocation for multi-team collaboration was accepted as a regular paper at the 64th IEEE Conference on Decision and Control in Rio de Janeiro, Brazil.",
            media: (
                <NewsImage
                    src={CDC2025AcceptanceLetter}
                    alt="CDC 2025 acceptance letter"
                    className="portrait-media"
                />
            ),
        },
        {
            date: "June 23, 2025",
            title: "Second ASML Internship",
            text: "I returned to ASML as a Mechatronics Research Engineer Intern to work on machine health monitoring, statistical modeling, and Bayesian hierarchical methods for uncertainty quantification and root-cause analysis.",
            media: (
                <Carousel id="asmlInternship2025" slides={asmlInternship2025} />
            ),
        },
        {
            date: "June 14, 2025",
            title: "M.S. Graduation",
            text: "I walked at commencement after earning my Master of Science in Electrical and Computer Engineering from UC Irvine.",
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
            title: "GEECSANTS Poster Presentation",
            text: "I presented my master's thesis poster at the 2025 GEECS Annual Technology Showcase.",
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
            media: (
                <NewsImage
                    src={GEECSANTSPoster2025}
                    alt="Riwa Karam next to GEECSANTS poster"
                    className="portrait-media"
                />
            ),
        },
        {
            date: "May 5-9, 2025",
            title: "CPS-IoT Week Student Volunteer",
            text: "I served as a student volunteer for CPS-IoT Week 2025 at UC Irvine, supporting registration, poster sessions, attendee logistics, and event operations.",
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
            title: "LA Times Interview",
            text: "I was interviewed with labmates for an LA Times article about the UCI Robot Ecology Lab and our research.",
            link: "https://www.latimes.com/socal/daily-pilot/entertainment/story/2025-04-29/uci-robot-ecology-lab-inspired-by-nature",
            linkText: "Read the article",
        },
        {
            date: "April 18, 2025",
            title: "45th Southern California Control Workshop",
            text: "I presented recent research at SSCW at the University of California, San Diego.",
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
            text: "I attended my second control workshop at USC.",
            link: "https://csc.usc.edu/socal/2024Fall/index.html",
            linkText: "Workshop website",
        },
        {
            date: "September 13, 2024",
            title: "Completed My First ASML Internship",
            text: "I finished my summer internship at ASML and returned to campus for research in the Robot Ecology Lab.",
        },
        {
            date: "August 7, 2024",
            title: "ASML Intern Poster Session",
            text: "I presented my internship progress at ASML's intern poster presentation session.",
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
            title: "First Day at ASML",
            text: "I started my internship at ASML as a Mechatronics and Control Systems Engineer intern.",
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
            title: "43rd Southern California Control Workshop",
            text: "I attended my first control workshop at UCLA.",
            link: "https://samueli.ucla.edu/upcoming-events/43rd-southern-california-control-workshop/",
            linkText: "Workshop Website",
        },
        {
            date: "April 8, 2024",
            title: "PhD Preliminary Examination",
            text: "I passed the PhD Preliminary Examination after completing my primary course and grade requirements.",
            link: PrelimPDF,
            linkText: "View letter",
        },
        {
            date: "September 25, 2023",
            title: "First Day at UCI",
            text: "I started at UC Irvine and attended M.S. and PhD orientations.",
        },
        {
            date: "July 27, 2023",
            title: "Faculty Award for Academic Excellence",
            text: "I received the Faculty Award for Academic Excellence during the award ceremony.",
            media: (
                <NewsImage
                    src={FacultyAward}
                    alt="Riwa Karam receiving the Faculty Award for Academic Excellence"
                    className="portrait-media"
                />
            ),
        },
        {
            date: "July 8, 2023",
            title: "B.S. Graduation, Valedictorian",
            text: "I graduated with a Bachelor of Science in Computer Engineering as valedictorian.",
        },
        {
            date: "May 16, 2023",
            title: "B.S. Graduation Project Presentation",
            text: "I presented my B.S. graduation project.",
        },
        {
            date: "February 7, 2023",
            title: "UCI Acceptance Letter",
            text: "I received my acceptance letter from UC Irvine.",
        },
    ];

    const [featuredEntry, ...timelineEntries] = entries;

    const renderEntryLinks = (entry) => {
        const links =
            entry.links ||
            (entry.link
                ? [
                      {
                          href: entry.link,
                          text: entry.linkText,
                      },
                  ]
                : []);

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
        <main className="page-shell">
            <Header compact />
            <section className="section-intro news-intro">
                <div>
                    <p className="section-kicker">News</p>
                    <h2>
                        Milestones from research, conferences, and internships.
                    </h2>
                    <p>
                        A chronological record of academic, research, and
                        professional updates.
                    </p>
                </div>
                <div className="news-stats" aria-label="News summary">
                    <span>
                        <strong>{entries.length}</strong>
                        Updates
                    </span>
                    <span>
                        <strong>2023-2026</strong>
                        Timeline
                    </span>
                </div>
            </section>

            <section className="news-feature">
                <div>
                    <p className="section-kicker">Latest Update</p>
                    <time>{featuredEntry.date}</time>
                    <h3>{featuredEntry.title}</h3>
                    <p>{featuredEntry.text}</p>
                    {renderEntryLinks(featuredEntry)}
                </div>
                {featuredEntry.media && (
                    <aside className="news-feature-media">
                        {featuredEntry.media}
                    </aside>
                )}
            </section>

            <section
                className="timeline news-timeline"
                aria-label="News archive"
            >
                {timelineEntries.map((entry) => (
                    <article
                        className="timeline-item"
                        key={`${entry.date}-${entry.title}`}
                    >
                        <time>{entry.date}</time>
                        <div
                            className={`timeline-card news-entry-card ${
                                entry.media ? "has-media" : ""
                            }`}
                        >
                            <div className="news-entry-content">
                                <h3>{entry.title}</h3>
                                <p>{entry.text}</p>
                                {renderEntryLinks(entry)}
                            </div>
                            {entry.media && (
                                <aside className="news-entry-media">
                                    {entry.media}
                                </aside>
                            )}
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default News;
