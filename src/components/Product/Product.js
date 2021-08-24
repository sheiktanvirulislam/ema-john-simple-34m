import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {img , name ,price,seller,stock} = props.productData;
    return (
        <div className="product">
            <div className="productImg">
            <img src={img} alt="" />
            </div>
            <div className="productDetails">
            {/* <h1>{props.productData.key}</h1> */}
           
            <h2 className="product-name">{name}</h2>
            <p><small> By : {seller}</small></p>
            <p>${price}</p>
            <br />
            <p>Only {stock} left in stock - order soon </p> 
            <button className="button" onClick={()=>props.handleAddProduct(props.productData)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>    
        </div>
            
            
            
            
            
        </div>
    );
};

export default Product;