import * as React from 'react';
import {Component} from 'react';

import '../static/css/about_section.css';
import Moment from "react-moment";
import {getUser} from "../services/AboutService";
import {getSkillList} from "../services/ResumeService";
import Loader from "./common/Loader";

class AboutSection extends Component {

    state = {
        loading: true,
        user: null,
        skillList: [],
    };

    componentDidMount() {
        getUser()
            .then(response => this.setState({user: response.data, loading: false}));

        getSkillList()
            .then(response => this.setState({skillList: response.data}));
    }

    render() {

        if (this.state.loading || !this.state.user) {
            return <Loader/>
        }

        return (
            <div className="about-section row m-0">
                <div className="about-image col-6">
                    <div className="image-content">
                    </div>
                </div>

                <div className="about-details col-6">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-title-details">A small river named Duden flows by their place and supplies it
                        with
                        the necessary regelialia.</p>
                    <div className="expertise">
                        {
                            this.state.skillList.map(value => <span className="badge"
                                                                    key={value.id}>{value.skillName}</span>)
                        }
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
                            <p>{this.state.user.name.firstName} {this.state.user.name.lastName}</p>
                            <p>{this.state.user.contact.phone}</p>
                            <p>{this.state.user.contact.email}</p>
                            <p>{this.state.user.address.streetName}, #{this.state.user.address.streetNumber},&nbsp;
                                {this.state.user.address.city}, {this.state.user.address.country}</p>
                            <p>
                                <Moment fromNow ago>{this.state.user.dateOfBirth}</Moment>
                            </p>
                        </div>
                    </div>
                    <button type="button" className="btn download-btn">DOWNLOAD CV</button>
                </div>
            </div>
        );
    }
}

export default AboutSection;
