import * as React from 'react';
import {Component} from 'react';

import '../static/css/project.css';

import SectionTitle from "./common/SectionTitle";
import {RiFolderSettingsLine} from "react-icons/ri";

import {getProjectListByProjectTypeFromServer, getProjectListFromServer} from "../services/ProjectService";
import Loader from "./common/Loader";


class Project extends Component {

    state = {
        loading: true,
        projectList: [],
    }

    componentDidMount() {

        getProjectListFromServer()
            .then(response => this.setState({projectList: response.data, loading: false}));
    }

    getProjectList = () => {
        getProjectListFromServer()
            .then(response => this.setState({projectList: response.data, loading: false}));
    }

    getProjectListByProjectType = (type) => {
        getProjectListByProjectTypeFromServer(type)
            .then(response => this.setState({projectList: response.data}));
    }

    render() {

        if (this.state.loading || !this.state.projectList) {
            return <Loader/>
        }

        return (
                <div className="project" id={this.props.id}>
                    <div className="container">
                        <SectionTitle
                            icon={<RiFolderSettingsLine/>}
                            title="My Project"
                        />

                        <div className="project-type">
                            <ul className="project-type-ul list-inline row">
                                <li><span onClick={() => this.getProjectList()}
                                          className="badge list-inline-item">ALL</span></li>
                                {
                                    this.state.projectList.map(value => <li key={value.id} className="list-inline-item">
                                    <span onClick={() => this.getProjectListByProjectType(value.projectType)}
                                          className="badge">{this.enumSeparator(value.projectType)}</span>
                                    </li>)
                                }
                            </ul>
                        </div>

                        <div className="row project-content">
                            {
                                this.state.projectList.map(value => <div key={value.id}
                                                                         className="col-lg-4 col-md-6 col-sm-12 justify-content-sm-center content-details">
                                    <div className="content-info">
                                        <div className="img">
                                            <img
                                                src={`http://20.46.181.244:8082/public/request/file/retrieve/${value.imageUrl}`}
                                                alt="upload"/>
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

    enumSeparator = (value) => {
        return value.replace(/_/g, " ");
    }

}

export default Project;
