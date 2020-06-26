import * as React from 'react';
import {Component} from 'react';

import '../static/css/project.css';

import '../static/images/projects/web_design.jpg'
import SectionTitle from "./common/SectionTitle";
import {RiFolderSettingsLine} from "react-icons/ri";

const projects = [
    {"id": 1, "title": "Web Development", "image": "website.jpg", "type": "WEB DEVELOPMENT"},
    {"id": 2, "title": "Photography", "image": "photography_one.jpg", "type": "PHOTOGRAPHY"},
    {"id": 3, "title": "Photography", "image": "photography_two.jpg", "type": "PHOTOGRAPHY"},
    {"id": 4, "title": "Android", "image": "android_one.png", "type": "ANDROID"},
    {"id": 5, "title": "Android", "image": "android_two.png", "type": "ANDROID"},
    {"id": 6, "title": "Web Design", "image": "web_design.jpg", "type": "WEB DESIGN"}
];


class Project extends Component {

    state = {
        projects: projects
    }

    filterProject = (type) => {

        if (type === "ALL") {
            this.setState(
                {
                    projects: projects
                }
            )
        } else {
            this.setState(
                {
                    projects: projects.filter(value => value.type === type)
                }
            )
        }
    }

    render() {

        return (
            <div className="project">
                <div className="container">
                    <SectionTitle
                        icon={<RiFolderSettingsLine />}
                        title="My Project"
                    />
                    <div className="project-type">
                        <ul className="project-type-ul">
                            <li><span onClick={() => this.filterProject("ALL")} className="badge">ALL</span></li>
                            <li><span onClick={() => this.filterProject("WEB DEVELOPMENT")} className="badge">Web Development</span></li>
                            <li><span onClick={() => this.filterProject("ANDROID")} className="badge">Mobile Design</span></li>
                            <li><span onClick={() => this.filterProject("PHOTOGRAPHY")} className="badge">Photography</span></li>
                            <li><span onClick={() => this.filterProject("WEB DESIGN")} className="badge">Web Design</span></li>
                        </ul>
                    </div>

                    <div className="row project-content">
                        {
                            this.state.projects.map(value => <div key={value.id} className="col-4 content-details">
                                <div className="content-info">
                                    <div className="img">
                                        <img src={require(`../static/images/projects/${value.image}`)} alt="image"/>
                                    </div>
                                    <h2 className="project-title">{value.title}</h2>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Project;
