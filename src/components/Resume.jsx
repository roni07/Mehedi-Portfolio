import * as React from 'react';
import {Component} from 'react';

import '../static/css/resume.css'
import {RiBookOpenLine, RiFileUserLine, RiLightbulbFlashLine, RiUserSettingsLine} from "react-icons/ri";
import SectionTitle from "./common/SectionTitle";
import Moment from "react-moment";
import 'moment-timezone';
import {getEducationList, getExperienceList, getSkillList} from "../services/ResumeService";
import Loader from "./common/Loader";

class Resume extends Component {

    state = {
        loading: true,
        educationList: [],
        experienceList: [],
        skillList: [],
    }

    componentDidMount() {
        getEducationList()
            .then(response => this.setState({educationList: response.data, loading: false}));

        getExperienceList()
            .then(response => this.setState({experienceList: response.data, loading: false}));

        getSkillList()
            .then(response => this.setState({skillList: response.data, loading: false}));

    }

    render() {

        if (this.state.loading || !this.state.educationList || !this.state.experienceList || !this.state.skillList) {
            return <Loader/>
        }

        return (
            <div className="resume">
                <div className="resume-content container">
                    <SectionTitle
                        icon={<RiFileUserLine/>}
                        title="My Resume"
                    />
                    <div className="row pt-4 pb-4">
                        <div className="resume-menu col-4 justify-content-md-start">
                            <ul>
                                <li><RiBookOpenLine className="resume-li-icon"/><a href="#">Education</a></li>
                                <li><RiUserSettingsLine className="resume-li-icon"/><a href="#">Experience</a></li>
                                <li><RiLightbulbFlashLine className="resume-li-icon"/><a href="#">Skill</a></li>
                            </ul>
                        </div>

                        <div className="menu-content col-8">
                            <div className="row justify-content-md-between resume-education">

                                {
                                    this.state.educationList.map(educationValue => <div className="col-6 mb-3"
                                                                                        key={educationValue.id}>
                                            <div className="card text-left menu-content-card">
                                                <div className="card-header menu-content-header">
                                                    {educationValue.degreeTitle}
                                                </div>
                                                <div className="card-body">
                                                <span className="badge menu-content-badge">
                                                    <Moment format="YYYY">
                                                    {educationValue.timePeriodFrom}
                                                    </Moment>&nbsp;
                                                    - &nbsp;<Moment format="YYYY">
                                                        {educationValue.timePeriodTo}
                                                    </Moment>
                                                </span>
                                                    <h5 className="institute-name">{educationValue.instituteName}</h5>
                                                    <p className="card-text menu-content-text">{educationValue.description}</p>
                                                </div>
                                            </div>
                                            <div className="w-100"></div>
                                        </div>
                                    )
                                }
                            </div>

                            {/* Experience */}
                            <div className="row justify-content-md-between mt-4 resume-experience">

                                {
                                    this.state.experienceList.map(experienceValue => <div className="col-6 mb-3"
                                                                                          key={experienceValue.id}>
                                        <div className="card text-left menu-content-card">
                                            <div className="card-header menu-content-header">
                                                {experienceValue.instituteName}
                                            </div>
                                            <div className="card-body">
                                            <span
                                                className="badge menu-content-badge experience-duration">
                                                <Moment format="D MMM YYYY">
                                                    {experienceValue.timePeriodFrom}
                                                </Moment>&nbsp;
                                                - &nbsp;<Moment format="D MMM YYYY">
                                                    {experienceValue.timePeriodTo}
                                                </Moment>
                                            </span>
                                                <h5 className="experience-title">{experienceValue.designation}</h5>
                                                <p className="card-text menu-content-text experience-text">{experienceValue.description}</p>
                                            </div>
                                        </div>
                                        <div className="w-100"></div>
                                    </div>)
                                }
                            </div>

                            {/*  Skills  */}
                            <div className="row justify-content-md-between mt-4 resume-skills">

                                {
                                    this.state.skillList.map(value => <div key={value.id} className="col-6">
                                        <p className="m-0 skills-header">{value.skillName}</p>
                                        <div className="progress mb-3 resume-skills-progress">
                                            <div className="progress-bar resume-skills-progress-bar" role="progressbar"
                                                 style={{width: `${value.skillNumber}%`}}
                                                 aria-valuenow={value.skillNumber} aria-valuemin={0}
                                                 aria-valuemax={100}>{value.skillNumber}%
                                            </div>
                                        </div>
                                        <div className="w-100"></div>
                                    </div>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
