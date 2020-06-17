import * as React from 'react';

import '../static/css/resume.css'
import {RiBookOpenLine} from "react-icons/ri";

const Resume = () => {
    return (
        <div className="resume">
            <div className="resume-content container">
                <div className="row pt-4 pb-4">
                    <div className="resume-menu col-4 justify-content-md-start">
                        <ul>
                            <li><RiBookOpenLine className="resume-li-icon"/><a href="#">Education</a></li>
                            <li><a href="#">Experience</a></li>
                            <li><a href="#">Skill</a></li>
                        </ul>
                    </div>

                    <div className="menu-content col-8">
                        <div className="row justify-content-md-between">
                            <div className="col-6 mb-3">
                                <div className="card text-left menu-content-card">
                                    <div className="card-header menu-content-header">
                                        SSC
                                    </div>
                                    <div className="card-body">
                                        <span className="badge menu-content-badge">2011-2012</span>
                                        <p className="card-text menu-content-text">With supporting text below as a
                                            natural lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="card text-left menu-content-card">
                                    <div className="card-header menu-content-header">
                                        HSC
                                    </div>
                                    <div className="card-body">
                                        <span className="badge menu-content-badge">2013-2014</span>
                                        <p className="card-text menu-content-text">With supporting text below as a
                                            natural lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="card text-left menu-content-card">
                                    <div className="card-header menu-content-header">
                                        B.Sc in CSE
                                    </div>
                                    <div className="card-body">
                                        <span className="badge menu-content-badge">2016-2020</span>
                                        <p className="card-text menu-content-text">With supporting text below as a
                                            natural lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="row justify-content-md-between mt-4 resume-experience">
                            <div className="col-6 mb-3">
                                <div className="card text-left menu-content-card">
                                    <div className="card-header menu-content-header">
                                        Southeast University
                                    </div>
                                    <div className="card-body">
                                        <span className="badge menu-content-badge experience-duration">2020-Present</span>
                                        <h5 className="experience-title">Junior Programmer</h5>
                                        <p className="card-text menu-content-text experience-text">With supporting text below as a
                                            natural lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="card text-left menu-content-card">
                                    <div className="card-header menu-content-header">
                                        Demo Company
                                    </div>
                                    <div className="card-body">
                                        <span className="badge menu-content-badge experience-duration">2013-2014</span>
                                        <h5 className="experience-title">Demo Position</h5>
                                        <p className="card-text menu-content-text experience-text">With supporting text below as a
                                            natural lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Skills  */}
                        <div className="row justify-content-md-between mt-4 resume-skills">
                            <div className="col-6">
                                <p className="m-0 skills-header">Spring Boot</p>
                                <div className="progress mb-3 resume-skills-progress">
                                    <div className="progress-bar resume-skills-progress-bar" role="progressbar"
                                         style={{width: "60%"}}
                                         aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>75%
                                    </div>
                                </div>

                                <p className="m-0 skills-header">Angular</p>
                                <div className="progress mb-3 resume-skills-progress">
                                    <div className="progress-bar resume-skills-progress-bar" role="progressbar"
                                         style={{width: "80%"}}
                                         aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%
                                    </div>
                                </div>

                                <p className="m-0 skills-header">React</p>
                                <div className="progress mb-3 resume-skills-progress">
                                    <div className="progress-bar resume-skills-progress-bar" role="progressbar"
                                         style={{width: "30%"}}
                                         aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>30%
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <p className="m-0 skills-header">JS</p>
                                <div className="progress mb-3 resume-skills-progress">
                                    <div className="progress-bar resume-skills-progress-bar" role="progressbar"
                                         style={{width: "50%"}}
                                         aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%
                                    </div>
                                </div>

                                <p className="m-0 skills-header">HTML</p>
                                <div className="progress mb-3 resume-skills-progress">
                                    <div className="progress-bar resume-skills-progress-bar" role="progressbar"
                                         style={{width: "90%"}}
                                         aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>90%
                                    </div>
                                </div>

                                <p className="m-0 skills-header">CSS</p>
                                <div className="progress mb-3 resume-skills-progress">
                                    <div className="progress-bar resume-skills-progress-bar" role="progressbar"
                                         style={{width: "80%"}}
                                         aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
