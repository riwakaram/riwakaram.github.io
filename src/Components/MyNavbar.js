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
            variant="dark"
            className="site-nav"
            expanded={expanded}
            onToggle={setExpanded}
        >
            <Container>
                <Navbar.Brand className="brand-lockup">
                    <img
                        src={logo}
                        alt="logo"
                        className="brand-mark"
                    />
                    <span>Riwa Karam</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="site-nav-links ms-auto">
                        <Nav.Link as={NavLink} to="/" end onClick={closeNavbar}>
                                Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/research" onClick={closeNavbar}>
                            Research
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/publications" onClick={closeNavbar}>
                            Publications
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/news" onClick={closeNavbar}>
                            News
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/vitae" onClick={closeNavbar}>
                            CV
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" onClick={closeNavbar}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
