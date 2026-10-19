import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../Images/favicon.ico";

const MyNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const closeNavbar = () => {
        setExpanded(false);
    };

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            className="site-nav"
            expanded={expanded}
            onToggle={setExpanded}
        >
            <Container>
                <Navbar.Brand as={NavLink} to="/" onClick={closeNavbar} className="brand-lockup">
                    <img
                        src={logo}
                        alt=""
                        className="brand-mark"
                    />
                    <span>Riwa Karam</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="site-nav-links ms-auto">
                        <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/" end onClick={closeNavbar}>
                                Home
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/research" onClick={closeNavbar}>
                            Research
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/publications" onClick={closeNavbar}>
                            Publications
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/projects" onClick={closeNavbar}>
                            Projects
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/news" onClick={closeNavbar}>
                            News
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/vitae" onClick={closeNavbar}>
                            CV
                        </NavLink>
                        <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/about" onClick={closeNavbar}>
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
