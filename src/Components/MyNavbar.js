import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* Left side - Name */}
                <Navbar.Brand>Riwa Karam</Navbar.Brand>

                {/* Centered nav items */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="centered-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to="/" exact>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/experience">
                                Experience
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
