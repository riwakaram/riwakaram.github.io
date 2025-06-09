import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../Images/favicon.ico";

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "10px",
                        }}
                    />
                    Riwa Karam
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="centered-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={NavLink} to="/" exact>
                                Home
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/vitae">
                                Curriculum Vitae
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/publications">
                                Publications & Talks
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/news">
                                News
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about">
                                About
                            </Nav.Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
