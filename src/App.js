import React, {Fragment} from 'react';
import './app.css';
import BannerSection from "./components/BannerSection";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import {BrowserRouter as Router} from  "react-router-dom";

const App = () => {
    return (
        <Router>
            <Fragment>
                <Header/>
                <BannerSection id="home"/>
                <AboutSection id="about"/>
                <Resume id="resume"/>
                <Services id="services"/>
                <Project id="project"/>
                <Contact id="contact"/>
                <Footer/>
            </Fragment>
        </Router>
    )
}

export default App;
