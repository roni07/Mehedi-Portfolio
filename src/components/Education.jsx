import React from "react";
import Moment from "react-moment";

const Education = (props) => {
    return (
        <div className="row justify-content-md-between resume-education" id={props.id}>
            {
                props.educationList.map(educationValue => <div className="col-lg-6 col-sm-12 mb-3"
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
                    </div>
                )
            }
        </div>
    );
}

export default Education;
