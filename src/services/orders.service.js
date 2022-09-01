import axios from 'axios';
import {url} from '../props'

export const ordersService = {
    placeOrder
}

async function placeOrder(order){
    return await axios.post(`${url}orders/placeOrder`,order).then(res=>{
        return res.data;
    }).catch(err=>{
        throw err;
    })
}  