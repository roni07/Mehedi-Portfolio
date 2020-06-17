import * as React from 'react';
import '../static/css/header.css';

const Header = (props) => {
    return (
        <header className="header">
            <nav className="container navbar my-navbar navbar-expand-lg">
                <a className="navbar-brand navbar-logo" href="#">
                    <span className="my-navbar-brand">M</span>ehedi
                </a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav my-navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
