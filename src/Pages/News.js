import React from "react";
import Header from "../Components/Header";
import CardItem from "../Components/CardItem";
import Carousel from "../Components/Carousel";
import PrelimPhoto from "../Images/Prelim.pdf";
import ASMLID from "../Images/ASML ID.jpg";
import ASMLGoodies from "../Images/ASML Goodies.jpeg";
import ASMLPosterAll from "../Images/ASMLPosterAll.jpeg";
import ASMLCard from "../Images/ASMLCard.jpeg";
import SSCW2025Dinner from "../Images/SSCW2025Dinner.JPG";
import SSCWGroup2025 from "../Images/SSCWGroup2025.jpg";
import SSCWMe012025 from "../Images/SSCWMe_1_2025.jpg";
import SSCWMe022025 from "../Images/SSCWMe_2_2025.jpg";
import CPSIOTWeekBadge from "../Images/CPS-IOT Week Badge.jpeg";
import CPSIOTWeekTalk from "../Images/CPS-IOT Week Talk.jpeg";
import GEECSANTSPoster2025 from "../Images/Me Next to GEECSANTS Poster 2025.jpeg";

const News = () => {
    const geecsantsposter2025 = [
        {
            src: GEECSANTSPoster2025,
            alt: "Me Next to GEECSANTS Poster 2025",
            captionTitle: "Me next to my poster at the 2025GEECSANTS",
        },
    ];
    const cpsiotweekvolunteering2025 = [
        {
            src: CPSIOTWeekBadge,
            alt: "CPS-IoT Week 2025 badge",
            captionTitle: "My CPS-IoT Week Badge and Volunteer Tag",
        },
        {
            src: CPSIOTWeekTalk,
            alt: "One of the CPS-IoT Week 2025 Talks",
            captionTitle: "One of the CPS-IoT Week 2025 Talks",
        },
    ];
    const sscwPresentations2025 = [
        {
            src: SSCWMe012025,
            alt: "Me Presenting at SSCW, UCSD",
            captionTitle: "Me Presenting at SSCW, UCSD",
        },
        {
            src: SSCWMe022025,
            alt: "Me Presenting at SSCW, UCSD",
            captionTitle: "Me Presenting at SSCW, UCSD",
        },
        {
            src: SSCWGroup2025,
            alt: "SSCW Group Photo at UCSD",
            captionTitle: "SSCW Group Photo at UCSD",
        },
        {
            src: SSCW2025Dinner,
            alt: "Dinner after SSCW",
            captionTitle: "Dinner after SSCW at UCSD",
        },
    ];
    const asmlFirst = [
        {
            src: ASMLGoodies,
            alt: "ASML Goodies",
            captionTitle: "ASML Goodies",
            captionText:
                "I got those ASML Goodies and Merch on my first day there!",
        },
        {
            src: ASMLID,
            alt: "ASML ID",
            captionTitle: "ASML ID",
            captionText:
                "That was my ASML ID during my internship - so professional XD!",
        },
    ];
    return (
        <div className="container home-container">
            <Header />

            <CardItem
                title="June 6, 2025"
                subtitle="GEECSANTS Poster Presentation 2025"
                description="I presented my master thesis in a poster for the 2025 GEECS Annual Technology Showcase. It was a great opportunity to conect with faculty, meet new students, and know more about the research they conduct!"
                list={[
                    <React.Fragment key="cps-iot-link">
                        Check the 2025 GEECSANTS website{" "}
                        <a
                            href="https://geecs.eng.uci.edu/geecsants2025/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                        .
                    </React.Fragment>,
                ]}
            >
                <div
                    className="d-flex justify-content-center"
                    style={{ maxWidth: "40rem", margin: "auto" }}
                >
                    <img
                        src={GEECSANTSPoster2025}
                        alt="Me and my GEECSANTS Poster"
                        className="bg-white img-fluid"
                    />
                </div>
            </CardItem>
            <CardItem
                title="May 5 to May 9, 2025"
                subtitle="Student Volunteer at the CPS-IoT Week 2025"
                description="I participated in the 2025 CPS-IoT Week as a Student Volunteer, taking shifts at the registration desk, helping attendees to find where they need to go, helping organize poster sessions, and cleaning up at the end of each conference day. This event took place on campus at UCI, taking the record of biggest event ever to be hosted by the Student Center!"
                list={[
                    <React.Fragment key="cps-iot-link">
                        Check the CPS-IoT 2025 website for more info about the
                        conference{" "}
                        <a
                            href="https://cps-iot-week2025.ics.uci.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                        .
                    </React.Fragment>,
                ]}
            >
                <Carousel
                    id="cpsiotweekvolunteering2025"
                    slides={cpsiotweekvolunteering2025}
                />
            </CardItem>
            <CardItem
                title="April 29, 2025"
                subtitle="LA Times Interview on the Robot Ecology Lab"
                description="Earlier in April, two of my labmates, Alex Nguyen and Efraín Méndez, and I were interviewed by LA Times reporter Jessica Peralta to write an article about our lab, what our research is about, and to know more about the UCI Robotarium and the RaccoonBot. That was my first newspaper interview experience!"
                list={[
                    <React.Fragment key="ssc-link">
                        Check out the article{" "}
                        <a
                            href="https://www.latimes.com/socal/daily-pilot/entertainment/story/2025-04-29/uci-robot-ecology-lab-inspired-by-nature"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                        .
                    </React.Fragment>,
                ]}
            />
            <CardItem
                title="April 18, 2025"
                subtitle="45th Southern California Control Workshop (SSCW)"
                description="I presented my latest work at my third SSCW. This marks my first time presenting my reserach at UCI in front of an audience (other than my lab members) XD"
                list={[
                    <React.Fragment key="ssc-link">
                        Check out the workshop's website{" "}
                        <a
                            href="http://terrano.ucsd.edu/jorge/sccw/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                        .
                    </React.Fragment>,
                ]}
            >
                <Carousel
                    id="sscwPresentation2025"
                    slides={sscwPresentations2025}
                />
            </CardItem>
            {/* <CardItem
                title="March 2025"
                subtitle="Paper Deadlines"
                description="I had back-to-back paper deadlines at the beginning and end of March; the first marks my first ever research paper submission!"
            /> */}
            <CardItem
                title="November 1, 2024"
                subtitle="44th Southern California Control Workshop (SSCW)"
                description="I attended my second control workshop at USC. My postdoc Dr. Brooks Butler was one of the speakers!"
                list={[
                    <React.Fragment key="ssc-link">
                        Check out the workshop's website{" "}
                        <a
                            href="https://csc.usc.edu/socal/2024Fall/index.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                        .
                    </React.Fragment>,
                ]}
            />
            <CardItem
                title="September 13, 2024"
                subtitle="Last Day at my ASML Internship"
                description="Successfully finished my summer internship at ASML, having made new friends, learned new skills, and had a productive summer! It was time to get back on campus to the robots at the lab XD"
            >
                <div className="d-flex justify-content-center my-asml-card m-auto">
                    <img src={ASMLCard} alt="Card" className="img-fluid" />
                </div>
            </CardItem>
            <CardItem
                title="August 7, 2024"
                subtitle="ASML Intern Poster Presentation Session"
                description="Towards the middle of my internship, I presented my poster, along with all ASML interns, which showed my internship progress so far."
            >
                <div className="d-flex justify-content-center asml-poster m-auto">
                    <img
                        src={ASMLPosterAll}
                        alt="Poster"
                        className="img-fluid"
                    />
                </div>
            </CardItem>
            <CardItem
                title="June 24, 2024"
                subtitle="First Day at my ASML Internship"
                description="Traveled from the West coast all the way to the East coast for my internship at ASML, Inc. as a Mechatronics and Control Systems Engineer Intern!"
            >
                <Carousel id="asml2024first" slides={asmlFirst} />
            </CardItem>
            <CardItem
                title="April 19, 2024"
                subtitle="43rd Southern California Control Workshop (SSCW)"
                description="I attended my first control workshop ever at UCLA! This event introduced me to the controls and robotics fields' jargon, since I am a newcomer to both fields."
                list={[
                    <React.Fragment key="ssc-link">
                        Check out the workshop's website{" "}
                        <a
                            href="https://samueli.ucla.edu/upcoming-events/43rd-southern-california-control-workshop/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                        .
                    </React.Fragment>,
                ]}
            />
            <CardItem
                title="April 8, 2024"
                subtitle="PhD Preliminary Examination"
                description="After completing my primary course and grades requirements, I successfully passed the first milestone in my PhD journey at UCI, which is the PhD Preliminary Examination!"
            >
                <div className="d-flex justify-content-center">
                    <img
                        src={PrelimPhoto}
                        alt="Prelim Letter"
                        className="bg-white img-fluid"
                    />
                </div>
            </CardItem>
        </div>
    );
};

export default News;
