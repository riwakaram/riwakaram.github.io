import React from "react";
import Header from "../Components/Header";
import CardItem from "../Components/CardItem";
import Carousel from "../Components/Carousel";
import PrelimPhoto from "../Images/Prelim.pdf";
import ASMLID from "../Images/ASML ID.jpg";
import ASMLGoodies from "../Images/ASML Goodies.jpeg";

const News = () => {
    const slides = [
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
                title="June 24, 2024"
                subtitle="First Day at my Internship at ASML, Inc."
                description="Traveled from the West coast all the way to the East coast for my internship at ASML, Inc. as a Mechatronics and Control Systems Engineer Intern!"
            >
                <Carousel id="asml2024Slides" slides={slides} />
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
