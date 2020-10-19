import * as React from 'react';
import {useState} from 'react';
import '../static/css/header.css';
import {Link} from "react-scroll";
import {FaBars} from "react-icons/fa"

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const showToggleAction = () => setToggle(!toggle);

    return (
        <header className="header">

            <nav className="container my-navbar">
                <Link className="navbar-logo" to='/'>
                    <span className="my-navbar-brand">M</span>ehedi
                </Link>

                <Link className="toggle" to='#'>
                    <FaBars onClick={showToggleAction}/>
                </Link>

                <ul className={toggle ? "nav-items active" : "nav-items"}>
                    <li>
                        <Link onClick={showToggleAction} activeClass="link-active" spy={true} smooth={true} offset={-80}
                              duration={500} to="home">Home</Link>
                    </li>
                    <li>
                        <Link onClick={showToggleAction} activeClass="link-active" spy={true} smooth={true} offset={-80}
                              duration={500} to="about">About</Link>
                    </li>
                    <li>
                        <Link onClick={showToggleAction} activeClass="link-active" spy={true} smooth={true} offset={-80}
                              duration={500} to="resume">Resume</Link>
                    </li>
                    <li>
                        <Link onClick={showToggleAction} activeClass="link-active" spy={true} smooth={true} offset={-80}
                              duration={500} to="services">Services</Link>
                    </li>
                    <li>
                        <Link onClick={showToggleAction} activeClass="link-active" spy={true} smooth={true} offset={-80}
                              duration={500} to="project">Project</Link>
                    </li>
                    <li>
                        <Link onClick={showToggleAction} activeClass="link-active" spy={true} smooth={true} offset={-80}
                              duration={500} to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;
