import * as React from 'react';
import '../static/css/header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <header className="header">

            <Navbar expand="lg" className="container my-navbar">
                <Link className="navbar-brand navbar-logo" to='/'>
                    <span className="my-navbar-brand">M</span>ehedi
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto my-navbar-nav">
                            <Link activeClass="active" spy={true} smooth={true} offset={-80} duration={500}
                                  to="home">Home</Link>
                            <Link activeClass="active" spy={true} smooth={true} offset={-80} duration={500}
                                  to="about">About</Link>
                            <Link activeClass="active" spy={true} smooth={true} offset={-80} duration={500}
                                  to="resume">Resume</Link>
                            <Link activeClass="active" spy={true} smooth={true} offset={-80} duration={500}
                                  to="services">Services</Link>
                            <Link activeClass="active" spy={true} smooth={true} offset={-80} duration={500}
                                  to="project">Project</Link>
                            <Link activeClass="active" spy={true} smooth={true} offset={-80} duration={500}
                                  to="contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>

        </header>
    );
};

export default Header;
