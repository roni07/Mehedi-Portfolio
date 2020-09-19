import * as React from "react";

const Skill = (props) => {
    return (
        <div className="row justify-content-md-between resume-skills">

            {
                props.skillList.map(value => <div key={value.id} className="col-lg-6 col-sm-12">
                    <p className="m-0 skills-header">{value.skillName}</p>
                    <div className="progress mb-3 resume-skills-progress">
                        <div className="progress-bar resume-skills-progress-bar" role="progressbar"
                             style={{width: `${value.skillNumber}%`}}
                             aria-valuenow={value.skillNumber} aria-valuemin={0}
                             aria-valuemax={100}>{value.skillNumber}%
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Skill;
