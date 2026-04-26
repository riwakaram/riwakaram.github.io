import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../Images/favicon.ico";

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="site-nav">
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
                        <Nav.Link as={NavLink} to="/" end>
                                Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/research">
                            Research
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/publications">
                            Publications
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/news">
                            News
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/vitae">
                            CV
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
