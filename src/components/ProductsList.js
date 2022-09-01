import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchProducts from '../redux/products/productsActions';
import { Link } from 'react-router-dom';
import {productService} from '../services/products.service';
import {Header} from '../components/Header';
import QuickMenu from './QuickMenu';
//import {MyLayOut} from './MyLayOut'

export class ProductsList extends Component{
    constructor(props){
        super(props);
         this.state = {
             products : []
        }
        this.handleProduct = this.handleProduct.bind(this);
    }

    componentDidMount (){
        productService.getAllProducts(this.handleProductsRes);
        // console.log(this);
        // this.props.fetchProducts();
    }

    handleProductsRes = (data)=>{
        this.setState({products : data});
    }

    handleProduct = (productId)=>{
        this.props.history.push(`/product/${productId}`);
    }

    render(){
        const imgStyle = {
            width:200, 
            height:200, 
            borderRadius: "8px",
            transition: 'width 1s',
            //backgroundColor: 'solid gray'
        }

        

        const gridContainer = {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto auto ',
            gridGap: '10px',
            padding: '10px'
            //color : 'white'
        }

        const gridItem = {
            //border : '1px solid blue'
        }

        const card = {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            fontFamily: 'arial',
        }
        const imgtext = {
            padding : '20px',
            //backgroundColor: '#4CAF50'
        }

        return(
            <div>
                <Header history = {this.props.history}></Header>
                <QuickMenu></QuickMenu>
                {/* <MyLayOut></MyLayOut> */}
                <div  style = {gridContainer}>
                {this.state.products.map((product, key)=>
                    <div style = {card}>
                        <div  key = {product.productId} style = {gridItem}>
                            <img src = {product.productImgUrl} alt = "resource not found"
                            style = {imgStyle} onClick = {()=>this.handleProduct(product.productId)}></img>
                            <div style = {imgtext}>
                                <h2>{product.productBrand}</h2>
                                <p>{product.productName}</p>
                                <p>
                                    Rs. {product.productMRP} ({product.productOfferText})
                                </p>
                            </div>
                        </div>
                        
                    </div>
                 
                )}
                 </div>
                <Link to = "/" align="center">Logout</Link>
               
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
      return {
          productsdata : state.products
      }
}

const mapDispatchToProps = (dispatch)=>{
      return {
        fetchProducts : ()=> dispatch(fetchProducts())
      }
}


export  default connect (mapStateToProps, mapDispatchToProps)(ProductsList)
