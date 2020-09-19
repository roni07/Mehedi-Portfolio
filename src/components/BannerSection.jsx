import * as React from 'react';
import '../static/css/banner_section.css';

const BannerSection = () => {

    return (
        <section className="banner-section">
            <div className="container banner h-100">
                <h6 className="first-text">HEY! I AM</h6>
                <h1 className="second-text">Mehedi Hasan</h1>
                <h2 className="third-text">I'm A <span className="dev-txt"> Developer.</span></h2>
            </div>
        </section>
    );
};

export default BannerSection;
