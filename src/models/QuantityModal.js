import React, {Component} from 'react'
import Modal from 'react-modal';
import {cartService} from '../services/cart.service';

export class QuantityModal extends Component{
    constructor(props){
        super(props);
    }

    handleQuantity = async (quantity)=>{
        console.log(quantity);
        console.log(this.props);
        const {id,price} = this.props.data.currentCart;
        const res = await cartService.updateQuantity({id: id, total: price*quantity, quantity: quantity});
        this.props.data.getQuantity();
    }

    render(props){
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
          };
        return(
            <div>
                <Modal isOpen = {this.props.data.isModalOpen} style={customStyles}>
                        <select name = "quantity"  onClick = {(e)=>this.handleQuantity(e.target.value)}>select quantity :
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                </Modal>
            </div>
        )
    }
}
export default QuantityModal