import React, {Fragment} from 'react';
import '../../static/css/section_title.css';

const SectionTitle = ({icon, title}) => {
    return (
        <Fragment>
            <h3 className="section-title"><span className="icon">{icon}</span><span className="title">{title}</span>
            </h3>
        </Fragment>
    );
};

export default SectionTitle;
