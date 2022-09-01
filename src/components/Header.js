import React, {Component} from 'react';
import {cartService} from '../services/cart.service';
import { FaCartArrowDown } from 'react-icons/fa';

export class Header extends Component{
    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = ()=>({
        cartCount : ''
    })

    componentDidMount (){
        cartService.getCartCount(this.handleCartCountRes);
    }

    handleCartCountRes = (res)=>{
        this.setState({
            cartCount : res
        })

    }

    render(){
        const header = {
            width: '100%',
            backgroundColor: '#1abc9c',
            height : '40px',
            padding : '30px',
            color : 'white'
        }
        const cartIcon ={
            cursor: 'pointer',
            width: '50px',
            float:'right'
        }
        return(
            <div>
                <div style = {header}>
                   <FaCartArrowDown onClick = {()=>this.props.history.push('/checkOut')} style={cartIcon}> </FaCartArrowDown>
                   {this.state.cartCount}
                </div>
            </div>
        )
    }
}
export default Header