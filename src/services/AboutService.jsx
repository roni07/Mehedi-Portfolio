import axios from 'axios';

// const retrieve_user = 'http://localhost:8082/public/request/user/retrieve';
const retrieve_user = 'http://20.46.181.244:8082/public/request/user/retrieve';

export const getUser = () => {
    return axios.get(retrieve_user);
}
