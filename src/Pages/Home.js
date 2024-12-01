import React from "react";
import photo from "../Images/Photo Passeport.JPG";

const Home = () => {
    return (
        <div className="container home-container">
            {/* Header Section */}
            <div className="row justify-content-center text-center mb-4">
                <h1 className="col-12 name">Riwa Karam</h1>
                <p className="col-12 description">
                    PhD Student at the University of California Irvine
                </p>
            </div>

            {/* Main Content Section */}
            <div className="row justify-content-center align-items-center">
                {/* Image Section */}
                <div className="col-12 col-lg-6 image-section mb-4 mb-lg-0 d-flex justify-content-center">
                    <img
                        src={photo} // Replace with your image path
                        alt="Riwa Karam"
                        className="profile-image img-fluid"
                    />
                </div>

                {/* Bio Section */}
                <div className="col-12 col-lg-6 bio-section text-center text-lg-left">
                    <h2>Bio</h2>
                    <p>
                        I am currently a PhD student in Robotics and Controls at
                        the University of California, Irvine. My research
                        interests include machine learning, robotics, and
                        control systems. I have previously worked on projects
                        involving piezo-electric actuators and Gaussian Process
                        Regression for force estimation. I am passionate about
                        exploring innovative solutions in mechatronics and
                        robotics.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
