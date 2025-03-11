import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import MyNavbar from "./Components/MyNavbar.js";
import Experience from "./Pages/Experience.js";
import Publications from "./Pages/Publications.js";

const App = () => {
    return (
        <div className="dark-theme">
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
