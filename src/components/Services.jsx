import * as React from 'react';
import '../static/css/services.css';
import {GrAndroid, GrReactjs} from "react-icons/gr";
import {IoIosBrush, IoIosBug, IoIosStarHalf, IoMdCamera} from "react-icons/io";
import {RiBriefcaseLine} from "react-icons/ri";
import SectionTitle from "./common/SectionTitle";

const Services = ({id}) => {
    return (
        <div className="services" id={id}>
            <div className="container services-content">

                <SectionTitle
                    icon={<RiBriefcaseLine/>}
                    title="My Services"
                />

                <div className="row justify-content-md-between">
                    <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                        <div className="service-card-details">
                            <div className="service-icon-content">
                                <GrReactjs className="service-icon"/>
                            </div>
                            <h4 className="service-title">Web Developing</h4>
                            {/*<p className="service-text">A small river named Duden flows by their place and supplies it
                                with the necessary
                                regelialia.</p>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                        <div className="service-card-details">
                            <div className="service-icon-content">
                                <GrAndroid className="service-icon"/>
                            </div>
                            <h4 className="service-title">Android Developing</h4>
                            {/*<p className="service-text">A small river named Duden flows by their place and supplies it
                                with the necessary
                                regelialia.</p>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                        <div className="service-card-details">
                            <div className="service-icon-content">
                                <IoIosBrush className="service-icon"/>
                            </div>
                            <h4 className="service-title">Web Page Designing</h4>
                            {/*<p className="service-text">A small river named Duden flows by their place and supplies it
                                with the necessary
                                regelialia.</p>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                        <div className="service-card-details">
                            <div className="service-icon-content">
                                <IoMdCamera className="service-icon"/>
                            </div>
                            <h4 className="service-title">Photography</h4>
                            {/*<p className="service-text">A small river named Duden flows by their place and supplies it
                                with the necessary
                                regelialia.</p>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                        <div className="service-card-details">
                            <div className="service-icon-content">
                                <IoIosStarHalf className="service-icon"/>
                            </div>
                            <h4 className="service-title">Branding</h4>
                            {/*<p className="service-text">A small river named Duden flows by their place and supplies it
                                with the necessary
                                regelialia.</p>*/}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 service-card">
                        <div className="service-card-details">
                            <div className="service-icon-content">
                                <IoIosBug className="service-icon"/>
                            </div>
                            <h4 className="service-title">Web Page Bug Fixing</h4>
                            {/*<p className="service-text">A small river named Duden flows by their place and supplies it
                                with the necessary
                                regelialia.</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
