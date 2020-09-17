import * as React from 'react';
import '../static/css/header.css';

import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="container navbar my-navbar navbar-expand-lg">
                <Link className="navbar-brand navbar-logo" to='/'>
                    <span className="my-navbar-brand">M</span>ehedi
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav my-navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/'><span className="nav-link">Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about'><span className="nav-link">About</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/resume'><span className="nav-link">Resume</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/service'><span className="nav-link">Services</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/project'><span className="nav-link">Project</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact'><span className="nav-link">Contact</span></Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
