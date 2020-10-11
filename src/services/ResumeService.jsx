import axios from "axios";

/*const baseUrlEdu = 'http://localhost:8082/public/request/education';
const baseUrlExp = 'http://localhost:8082/public/request/experience';
const baseUrlSkill = 'http://localhost:8082/public/request/skill';*/
const baseUrlEdu = 'http://20.46.181.244:8082/public/request/education';
const baseUrlExp = 'http://20.46.181.244:8082/public/request/experience';
const baseUrlSkill = 'http://20.46.181.244:8082/public/request/skill';

const education_list = baseUrlEdu + '/list';
const experience_list = baseUrlExp + '/list';
const skill_list = baseUrlSkill + '/list';

export const getEducationList = () => {
    return axios.get(education_list);
}

export const getExperienceList = () => {
    return axios.get(experience_list);
}

export const getSkillList = () => {
    return axios.get(skill_list);
}
