import React from "react";
import Card from "../Components/Card";

const Home = () => (
    <div className="container text-center mt-5">
        <h1>Riwa Karam</h1>
        <p className="mt-3">
            PhD Student at the University of California, Irvine
        </p>
        <div className="row mt-5">
            <div className="col-md-4">
                <Card title="Feature 1" text="Explore the first feature." />
            </div>
            <div className="col-md-4">
                <Card title="Feature 2" text="Discover the second feature." />
            </div>
            <div className="col-md-4">
                <Card title="Feature 3" text="Dive into the third feature." />
            </div>
        </div>
    </div>
);

export default Home;
