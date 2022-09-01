import React, {Component} from 'react';
import {Header} from './Header'
import axios from 'axios';
import {url} from '../props'
import {QuantityModal} from '../models/QuantityModal'
import {cartService} from '../services/cart.service';
import {AddBankDet} from '../models/AddBankDet';
import {creditCardService} from '../services/creditCard.service'
import {ordersService} from '../services/orders.service'
import uuid from 'react-uuid';

export class CheckOut extends Component{
    constructor(props){
        super(props);
       this.state = {
           items : [],
           isModalOpen : false,
           isCreditmodalOpen : false,
           creditCardId : '',
           orderId : uuid(),
           finalAmount : 0,
           userId : localStorage.getItem('userId'),
           currentCart : {
               id: '',
               price: '',
               quantity: 1
           }
       }
    }

        componentDidMount(){
            this.getCartItems();
        }

        getCartItems = ()=>{
            axios.get(`${url}cart/cartItems/${localStorage.getItem('userId')}`).then(res=>{
                this.setState({items:res.data});
                this.calculateTotal(res.data);
                console.log(res.data);
            }).catch(err=>{
                console.log(err);
            })
        }

        calculateTotal = (carts)=>{
            let amount = 0;
            carts.map(item=>{
                amount = amount + item.cart.total;
            })
            this.setState({finalAmount:amount})
        }

        handleQuantity = (cartId, price)=>{
            this.setState({
                currentCart : {
                    id :cartId,
                    price: price
                }
            })
            this.setState({isModalOpen: true});
        }

        getQuantity = ()=>{
            this.setState({isModalOpen: false});
            this.getCartItems();
        }

        deleteCartItem =  async (id)=>{
            const res = await cartService.deleteItem(id);
            this.getCartItems();
        }

        checkCard = async ()=>{
            const res = await creditCardService.getCreditcard();
            if(!res.data){
                this.setState({isCreditmodalOpen:true}); 
            }else{
                this.setState({creditCardId:res.data.cardId});
                this.placeOrder()
            }
        }

        handleCardRes = (id)=>{
            this.setState({creditCardId:id});
            this.setState({isCreditmodalOpen:false}); 
            console.log(this.state);
            this.placeOrder()
        }

        placeOrder = async ()=>{
            const res = await ordersService.placeOrder(this.state);
            console.log(res);
            alert('Your order has palaced successfully....')
            this.props.history.push('/products');
        }

    render(){
        const imgStyle = {
            width:100, 
            height:100, 
            borderRadius: "8px"
        }
        const row = {
            content: "",
            display: 'table',
            clear: 'both',
            width : '50px',
            padding: '50px'
        }
        const col = {
            float: 'left',
            display : 'inline-block'
        }
        return(
            <div>
                <Header history = {this.props.history}></Header>
                <AddBankDet data = {{isModalOpen : this.state.isCreditmodalOpen,handleCardRes : this.handleCardRes.bind(this)}}></AddBankDet>
                <QuantityModal data = {{isModalOpen:this.state.isModalOpen,currentCart: this.state.currentCart,getQuantity:this.getQuantity.bind(this)}}></QuantityModal>
                <div>
                {this.state.items.map((item, key)=>
                        <div className = "row" key = {item.cart.cartId} style={row}>
                            <div className = "column" style = {col}>
                                <img src = {item.product.productImgUrl} alt = "resource not found"
                                style = {imgStyle}></img>
                            </div>
                            <div className = "column" style = {col}>
                                <h3>{item.product.productBrand}</h3>
                                {item.product.productName}
                            </div>
                            <div className = "column" style = {col}>
                                Price : {item.product.productPrice}
                                {/* {item.product.productMRP}
                                {item.product.productOfferText} */}
                                <button name = "quantity" onClick = {()=>this.handleQuantity(item.cart.cartId,item.product.productPrice)}>Quantity :{item.cart.quantity} 
                                </button>
                                Total : {item.cart.total}
                                <button onClick = {()=>this.deleteCartItem(item.cart.cartId)}>Remove</button>
                            </div>
                        </div>
                )}
                 </div>
                 <h3>TOTAL :{this.state.finalAmount}</h3>
                 <button onClick = {this.checkCard}>Place Order</button>
            </div>
        )
    }
}
export default CheckOut
