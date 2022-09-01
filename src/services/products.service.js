import axios from 'axios';
import {url} from '../props'
export const productService = {
    getAllProducts,
    getProduct
}

async function getAllProducts (callback){
    await axios.get(`${url}products`).then(res =>{
        callback(res.data);
    })
}


async function getProduct (productId, callback){
    await axios.get(`${url}products/${productId}`).then(res =>{
        callback(res.data);
    })
}