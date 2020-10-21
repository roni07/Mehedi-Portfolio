import * as React from 'react';
import {Component} from 'react';
import SectionTitle from "./common/SectionTitle";
import {RiContactsLine, RiMailSendLine, RiMapPinLine, RiPhoneLine, RiRadioButtonLine} from "react-icons/ri";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'


import '../static/css/contact.css';
import {getUser} from "../services/AboutService";
import Loader from "./common/Loader";

class Contact extends Component {

    state = {
        loading: true,
        user: null,
        mailData: {
            fullName: "",
            email: "",
            subject: "",
            message: ""
        }
    }

    async componentDidMount() {
        getUser()
            .then(response => this.setState({user: response.data, loading: false}));
    }

    onHandleChange = e => {
        const {name, value} = e.target;

        this.setState({...this.state, mailData: {...this.state.mailData, [name]: value}});
    }


    sendEmail = e => {
        e.preventDefault();

        this.setState({loading: true});

        emailjs.sendForm('gmail', 'template_i20p30b', e.target, 'user_QsaGrTVWRr0fFn02HpZ7R')
            .then((result) => {

                    console.log(result.text);

                    this.setState({loading: false});

                    Swal.fire({
                        title: 'Your Message Has been Sent',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000,
                        position: "center"
                    })
                },
                (error) => {
                    console.log(error.text);

                    this.setState({loading: false});

                });

        this.setState({
            ...this.state, mailData: {
                fullName: "",
                email: "",
                subject: "",
                message: ""
            }
        });

    }


    render() {

        if (this.state.loading || !this.state.user) {
            return <Loader/>
        }

        return (
            <div className="contact" id={this.props.id}>
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
                            <div className="col-lg-6 col-sm-12">
                                <h5 className="contact-form-message">Message me</h5>
                                <form className="contact-form" onSubmit={this.sendEmail}>
                                    <div className="form-row">
                                        <div className="col-lg-6 col-sm-12 mb-3">
                                            <input type="text" className="form-control" placeholder="Name"
                                                   name="fullName" value={this.state.mailData.fullName}
                                                   onChange={this.onHandleChange}/>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 mb-3">
                                            <input type="email" className="form-control" placeholder="Email"
                                                   name="email" value={this.state.mailData.email}
                                                   onChange={this.onHandleChange}/>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <input type="text" className="form-control" placeholder="Subject"
                                                   name="subject" value={this.state.mailData.subject}
                                                   onChange={this.onHandleChange}/>
                                        </div>

                                        <div className="col-12 mb-3">
                                            <textarea className="form-control" placeholder="Message" name="message"
                                                      value={this.state.mailData.message}
                                                      onChange={this.onHandleChange}/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn mb-2 form-btn">Send Message</button>
                                </form>
                            </div>

                            <div className="col-lg-6 col-sm-12 contact-info">
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
                                                    <span>{this.state.user.address.streetName}, #{this.state.user.address.streetNumber},
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
