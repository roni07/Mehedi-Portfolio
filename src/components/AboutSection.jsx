import * as React from 'react';

import '../static/css/about_section.css';

const AboutSection = () => {
    return (
        <div className="about-section row m-0">
            <div className="about-image col-6">
                <div className="image-content">
                </div>
            </div>

            <div className="about-details col-6">
                <h2 className="about-title">About Me</h2>
                <p className="about-title-details">A small river named Duden flows by their place and supplies it with
                    the necessary regelialia.</p>
                <div className="expertise">
                    <span className="badge">Spring Boot</span>
                    <span className="badge">Angular</span>
                    <span className="badge">React</span>
                    <span className="badge">JS</span>
                    <span className="badge">HTML</span>
                    <span className="badge">CSS</span>
                </div>
                <div className="about-content row">
                    <div className="about-content-left col-3">
                        <p>Name:</p>
                        <p>Phone:</p>
                        <p>Mail:</p>
                        <p>Location:</p>
                        <p>Age:</p>
                    </div>

                    <div className="about-content-right col-9">
                        <p>Md. Mehedi Hasan</p>
                        <p>+8801781408652</p>
                        <p>mdmehedihasanroni28@gmail.com</p>
                        <p>Uttara, Azampur, Dhaka - 1230</p>
                        <p>23</p>
                    </div>
                </div>
                <button type="button" className="btn download-btn">DOWNLOAD CV</button>
            </div>
        </div>
    );
};

export default AboutSection;
