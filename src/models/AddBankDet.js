import React, {Component} from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import uuid from 'react-uuid'
import Modal from 'react-modal';
import {creditCardService} from '../services/creditCard.service'
export class AddBankDet extends Component{
    constructor(props){
        super(props);
        this.state  = {
          card : {
            cvc: '',
            expiry: '',
            cardHolderName: '',
            cardNumber: '',
            userId : localStorage.getItem('userId'),
            cardId : uuid()
          },
          focus: '',
        }
    }


    handleInputChange = (e) => {
      this.setState({
        card : {
          ...this.state.card,
          [e.target.name] : e.target.value
        }
      })
    }

  

    handleInputFocus = (e)=>{
      this.setState({ focus: e.target.name });
    }

    handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(this.state.card);
      try{
      const res = await creditCardService.addCreditCard(this.state.card);
      console.log(res);
      this.props.data.handleCardRes(res.cardId);
      }catch(e){
        throw e;
      }
      
      
    }

    render(){
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
              <Modal isOpen = {this.props.data.isModalOpen} style = {customStyles}>
                <Cards
          cvc={this.state.card.cvc}
          expiry={this.state.card.expiry}
          focused={this.state.focus}
          name={this.state.card.cardHolderName}
          number={this.state.card.cardNumber}
        />
        <form onSubmit = {this.handleSubmit}>
        	<input
            type="tel"
            name="cardNumber"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            value={this.state.card.number}
          />

          <input
            type="text"
            name="cardHolderName"
            placeholder="Card Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            value={this.state.card.name}
          />

          <input
            type="text"
            name="expiry"
            placeholder="MM/YY"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            value={this.state.card.expiry}
          />

          <input
            type="text"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            value={this.state.card.cvc}
          />
         <button type ="submit">Submit</button>
        </form>
        </Modal>
            </div>
        )
    }
}
export default AddBankDet