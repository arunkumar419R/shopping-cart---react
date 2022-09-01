import axios from 'axios';
import {url} from '../props'
export const cartService = {
    addToCart,
    getCartCount,
    updateQuantity,
    deleteItem,
    getCartItems
}


async function addToCart(cart, productId, price, callback){
    cart.productId = productId;
    cart.total = cart.quantity*price;
     await axios.post(`${url}cart/addCart`, cart).then(res=>{
        callback(res);
     })
}

async function getCartCount(callback){
    await axios.get(`${url}cart/cartCount/${localStorage.getItem('userId')}`).then(res=>{
        callback(res.data.length);
    })
}


async function updateQuantity(cart){
    await axios.put(`${url}cart/updateQuantity`,cart).then(res=>{
        return res.data;
    }).catch(err=>{
        throw err;
    })
}

async function deleteItem(cartId){
    console.log(cartId);
    return await axios.get(`${url}cart/deleteCart/${cartId}`).then(res=>{
        return res.data;
    }).catch(err=>{
        throw err;
    })
}

async function getCartItems(callback){
    await axios.get(`${url}cart/cartItems/${localStorage.getItem('userId')}`).then(res=>{
        callback(res.data);
    }).catch(err=>{
        console.log(err);
    })
}

