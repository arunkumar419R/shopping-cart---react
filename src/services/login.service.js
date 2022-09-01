import axios from 'axios';
import {url} from '../props'
export const loginService = {
    login,
}

async function login(auth,callback) {
    await axios.post(`${url}users/login`,auth).then(res =>{
        callback(res.data);
    })
}