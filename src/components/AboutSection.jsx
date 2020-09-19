import * as React from 'react';
import {useEffect, useState} from 'react';

import '../static/css/about_section.css';
import Moment from "react-moment";
import {getUser} from "../services/AboutService";
import {getSkillList} from "../services/ResumeService";
import Loader from "./common/Loader";

const AboutSection = () => {

    const [user, setUser] = useState({});
    const [skillList, setSkill] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserData();
        getSkillListData();
    }, []);


    const getUserData = () => {
        getUser()
            .then(response => {
                setUser(response.data);
                setLoading(false);
            }).catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }

    const getSkillListData = () => {
        getSkillList()
            .then(response => setSkill(response.data));
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="about-section row m-0">
            <div className="about-image col-lg-6 col-md-6 col-sm-12">
                <div className="image-content">
                </div>
            </div>

            <div className="about-details col-lg-6 col-md-6 col-sm-12">
                <h2 className="about-title">About Me</h2>
                <p className="about-title-details">I am a full stack web developer specializing in Spring Boot for
                    Back-End, Angular and React
                    for Front-End, MySQL and MongoDB for database.</p>
                <div className="expertise">
                    {
                        skillList.map(value => <span className="badge"
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
                        <p>{user.name.firstName} {user.name.lastName}</p>
                        <p>{user.contact.phone}</p>
                        <p>{user.contact.email}</p>
                        <p>{user.address.streetName}, #{user.address.streetNumber},&nbsp;
                            {user.address.city}, {user.address.country}</p>
                        <p>
                            <Moment fromNow ago>{user.dateOfBirth}</Moment>
                        </p>
                    </div>
                </div>
                <button type="button" className="btn download-btn">DOWNLOAD CV</button>
            </div>
        </div>
    );
}

export default AboutSection;
