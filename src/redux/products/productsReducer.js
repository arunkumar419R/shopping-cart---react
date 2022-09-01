import {API_REQUEST, PRODUCTS_REQ_SUCCESS, PRODUCTS_REQ_FAIL} from './productsConstants';
const initialState = {
    products : [],
    loader : false,
    error : ''
}

 const reducer = (state = initialState, action)=>{
    switch(action.type){
        case API_REQUEST :
            return {
                ...state,
                loader : true,
            }
        case PRODUCTS_REQ_SUCCESS :
            return {
                products : action.payload,
                loader : false
            }
        case PRODUCTS_REQ_FAIL :
            return {
                products : [],
                loader : false,
                error : action.payload
            }
        default :
            return state
    }return
}

export default reducer