import uuid from 'react-uuid';
import axios from 'axios';
import {url} from '../props'
export const registrationService = {
    buildUser,
    save
}

async function save (obj,callback){
    const user = buildUser(obj);
    await axios.post(`${url}users/addUser`,user).then(res =>{
        console.log(res);
        callback(res.status);
    }).catch(err =>{
        callback(JSON.stringify(err));
    });
}

function buildUser (obj){
    let user = {
        userId : uuid(),
		userName : obj.userName,
		password : obj.password,
		isActive : true,
        userRole : 'customer',
        registration : {
            firstName : obj.firstName,
			lastName : obj.lastName,
			age : obj.age,
			gender : obj.gender,
			mobileNumber : obj.mobileNumber,
            emailId : obj.emailId,
            country : obj.country,
            state : obj.state,
            profession : obj.profession,
            pinCode : obj.pinCode,
            recCrtTs : new Date(),
            recUpdTs : ''
        }
    }
    return user;
}