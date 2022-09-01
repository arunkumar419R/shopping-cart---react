import React, {Component} from 'react';
import uuid from 'react-uuid';
import {cartService} from '../services/cart.service';


export class AddCart extends Component {

    constructor(props){
        super(props);
        this.state = this.getInitialState();
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    getInitialState = ()=>({
            cart : {
            userId : localStorage.getItem('userId'),
            cartId : uuid(),
            productId : '', 
            quantity : 1, 
            recCrtTs : '',
            recUpdtTs : '',
            cartTotal : '',
            orderId : '',
            isCheckOut : false,
            total : ''	
        },
        goToBag : false
    })

     handleAddToCart = () =>{
         cartService.addToCart(this.state.cart,this.props.productId, this.props.price ,this.handleAddCartRes);
    }

    handleAddCartRes = (res)=>{
        this.setState(this.getInitialState());
        alert('cart added');
        this.setState({
            goToBag : true
        })
    }

    handleChange = (e) =>{
        this.setState({
            cart : {
            ...this.state.cart,
            [e.target.name] : e.target.value
        }
        })
    }

    handleCheckOut = ()=>{
        this.props.history.push('/checkOut');
    }

    render(){
        return(
            <div>
                
                {/* <select name = "quantity" onChange = {this.handleChange} value = {this.state.cart.quantity}>
                    <option value = '1'>1</option>
                    <option value = '2'>2</option>
                    <option value = '3'>3</option>
                </select> */}
                
                {this.state.goToBag
                ? <button onClick = {this.handleCheckOut}>GO TO BAG</button>
                 :<button onClick = {this.handleAddToCart}>ADD TO BAG</button>
            }
                
            </div>
        )
    }
}
export default  AddCart