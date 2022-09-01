import {API_REQUEST, PRODUCTS_REQ_SUCCESS, PRODUCTS_REQ_FAIL} from './productsConstants';
import {productService} from '../../services/products.service';

export const fetchProducts = ()=>{
    return (dispatch)=>{
        dispatch(apiRequest());
        productService.getAllProducts().then(res=>{
            dispatch(productsReqSuccess(res));
        }).catch(err=>{
            dispatch(productsReqFail(err));
        })
    }
}

export const apiRequest = ()=>{
    return {
        type : API_REQUEST
    }
}

export const productsReqSuccess = (products)=>{
    return{
        type : PRODUCTS_REQ_SUCCESS,
        payload : products
    }
}

export const productsReqFail = ()=>{
    return {
        type : PRODUCTS_REQ_FAIL,
        payload : PRODUCTS_REQ_FAIL
    }
}

export default fetchProducts