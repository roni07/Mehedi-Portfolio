import Moment from "react-moment";
import * as React from "react";

const Experience = (props) => {
    return (
        <div className="row justify-content-md-between resume-experience">

            {
                props.experienceList.map(experienceValue => <div className="col-lg-6 col-sm-12 mb-3"
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
                </div>)
            }
        </div>
    );
}

export default Experience;

