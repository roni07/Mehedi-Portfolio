import React, {Fragment} from "react";
import Header from "../Header";
import BannerSection from "../BannerSection";
import AboutSection from "../AboutSection";
import Resume from "../Resume";
import Services from "../Services";
import Project from "../Project";
import Contact from "../Contact";
import Footer from "../Footer";

const ComponentWrapper = () => {
    return (
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
    )
}

export default ComponentWrapper;
