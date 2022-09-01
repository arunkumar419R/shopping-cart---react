import React,{Component} from 'react';
import {productService} from '../services/products.service';
import {AddCart} from './AddCart';
import {Header} from './Header';

export class  Product extends Component {
    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        product : {}
    })

    componentDidMount (){
        const { match: {params}} = this.props;
        productService.getProduct(params.productId,this.handleProductRes);
    }

    handleProductRes = (data)=>{
        this.setState({
            product : data
        })
    }

    render(){
        const imgStyle = {
            width:500, 
            height:500, 
            borderRadius: "8px",
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }

        const col = {
            float: 'left',
            paddingLeft : '90px',
            marginTop: '40px',
            display : 'inline-block'
        }

        const row = {
            content: "",
            display: 'table',
            clear: 'both'
        }

        const spanStyle = {
            display: 'block'
        }
        

        return(
            <div>
                <Header history = {this.props.history}></Header>
                <div className = "row" style = {row}>
                    <div className = "column" style = {col}>
                        <img src = {this.state.product.productImgUrl} alt = "resource not found"
                        style = {imgStyle}>
                        </img>
                    </div>
                    <div className = "column" style = {col}>
                        <div>
                                <h1>{this.state.product.productBrand}</h1>
                                <h2>{this.state.product.productName}</h2>
                                <span  style = {spanStyle}>Rs:{this.state.product.productPrice}</span>
                                <span style = {spanStyle}><s>Rs:{this.state.product.productMRP}</s></span>
                                <span  style = {spanStyle}>({this.state.product.productOfferText})</span>
                        </div>
                        <AddCart productId = {this.state.product.productId} history = {this.props.history} price = {this.state.product.productPrice}></AddCart>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product