import axios from 'axios';
import {url} from '../props'

export const creditCardService  = {
    getCreditcard,
    addCreditCard
}

async function getCreditcard() {
    return await axios.get(`${url}credit/getcard/${localStorage.getItem('userId')}`).then(res=>{
        return res;
    }).catch(err=>{
        throw err;
    })
}

async function addCreditCard (creditCard){
    return await axios.post(`${url}credit/addcard`,creditCard).then(res=>{
        return res.data;
    }).catch(err=>{
        throw err;
    })
}