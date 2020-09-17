import * as React from 'react';
import {Component} from 'react';
import SectionTitle from "./common/SectionTitle";
import {RiContactsLine, RiMailSendLine, RiMapPinLine, RiPhoneLine, RiRadioButtonLine} from "react-icons/ri";

import '../static/css/contact.css';
import {getUser} from "../services/AboutService";
import Loader from "./common/Loader";

class Contact extends Component {

    state = {
        loading: true,
        user: null,
    }

    async componentDidMount() {
        getUser()
            .then(response => this.setState({user: response.data, loading: false}));
    }

    render() {

        if (this.state.loading || !this.state.user) {
            return <Loader/>
        }

        return (
            <div className="contact">
                <div className="contact-content container">
                    <SectionTitle
                        icon={<RiContactsLine/>}
                        title="Contact"
                    />
                    <div className="contact-info-wrapper">
                        <div className="contact-title">
                            <p>Feel free to contact me anytime.</p>
                            <h2>Get in Touch</h2>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <h5 className="contact-form-message">Message me</h5>
                                <form className="contact-form">
                                    <div className="form-row">
                                        <div className="col-6 mb-3">
                                            <input type="text" className="form-control" placeholder="Name"/>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <input type="text" className="form-control" placeholder="Email"/>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <input type="text" className="form-control" placeholder="Subject"/>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <textarea className="form-control" placeholder="Message"/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn mb-2 form-btn">Send Message</button>
                                </form>
                            </div>

                            <div className="col-6 contact-info">
                                <div className="contact-info-header">
                                    <h5>Contact info</h5>
                                    <p className="contact-info-text">Always available for freelance work if the
                                        right
                                        project comes along, Feel free to contact
                                        me!</p>
                                </div>

                                <div className="row contact-info-details">
                                    <ul>
                                        <li>
                                            <div className="info-list">
                                                <span className="info-icon"><RiRadioButtonLine/></span>
                                                <div className="icon-details">
                                                    <p>Name</p>
                                                    <span>{this.state.user.name.firstName} {this.state.user.name.lastName}</span>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="info-list">
                                                <span className="info-icon"><RiMapPinLine/></span>
                                                <div className="icon-details">
                                                    <p>Location</p>
                                                    <span>{this.state.user.address.streetName}, #{this.state.user.address.streetNumber},&nbsp;
                                                        {this.state.user.address.city}, {this.state.user.address.country}</span>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="info-list">
                                                <span className="info-icon"><RiPhoneLine/></span>
                                                <div className="icon-details">
                                                    <p>Call</p>
                                                    <span>{this.state.user.contact.phone}</span>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="info-list">
                                                <span className="info-icon"><RiMailSendLine/></span>
                                                <div className="icon-details">
                                                    <p>Email</p>
                                                    <span>{this.state.user.contact.email}</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
