import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Vitae from "./Pages/Vitae.js";
import MyNavbar from "./Components/MyNavbar.js";
import Footer from "./Components/Footer.js";
import ScrollToTop from "./Components/ScrollToTop.js";
import News from "./Pages/News.js";
import Publications from "./Pages/Publications.js";
import About from "./Pages/About.js";
import Research from "./Pages/Research.js";

const App = () => {
    return (
        <div className="dark-theme">
            <ScrollToTop />
            <MyNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/research" element={<Research />} />
                <Route path="/vitae" element={<Vitae />} />
                <Route path="/news" element={<News />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
