import * as React from 'react';
import {Component} from 'react';

import '../static/css/resume.css'
import {RiBookOpenLine, RiFileUserLine, RiLightbulbFlashLine, RiUserSettingsLine} from "react-icons/ri";
import SectionTitle from "./common/SectionTitle";
import Loader from "./common/Loader";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import {getEducationList, getExperienceList, getSkillList} from "../services/ResumeService";

import {Link, Switch, Route} from "react-router-dom";

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
                        <div className="resume-menu col-sm-4 justify-content-md-start">
                            <ul>
                                <li>
                                    <RiBookOpenLine className="resume-li-icon"/>
                                    <Link to={`${this.props.match.path}`} className="resume-link">Education</Link>
                                </li>
                                <li>
                                    <RiUserSettingsLine className="resume-li-icon"/>
                                    <Link to={`${this.props.match.path}/experience`} className="resume-link">Experience</Link>
                                </li>
                                <li>
                                    <RiLightbulbFlashLine className="resume-li-icon"/>
                                    <Link to={`${this.props.match.path}/skill`} className="resume-link">Skill</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="menu-content col-8">
                            <Switch>
                                <Route exact={true} path={`${this.props.match.path}`} render={(props) => <Education {...props}
                                                                                                       educationList={this.state.educationList}/>}/>
                                <Route exact={true} path={`${this.props.match.path}/experience`} render={(props) => <Experience {...props}
                                                                                                                   experienceList={this.state.experienceList}/>}/>
                                <Route exact={true} path={`${this.props.match.path}/skill`}
                                       render={(props) => <Skill {...props} skillList={this.state.skillList}/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
