import axios from "axios";

// const baseUrl = 'http://localhost:8082/public/request/project';
const baseUrl = 'http://20.193.228.32:8082/public/request/project';

const project_list = baseUrl + '/list';
const project_list_by_type = baseUrl + '/list-by-project-type';

export const getProjectListFromServer = () => {
    return axios.get(project_list);
}

export const getProjectListByProjectTypeFromServer = (type) => {
    return axios.get(project_list_by_type + '/' + type);
}
