import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const{product,handleAddProduct} = props;
    const {img , name ,price,seller,stock,key} = product;
    
    return (
        <div className="product">
            <div className="productImg">
            <img src={img} alt="" />
            </div>
            <div className="productDetails">
            {/* <h1>{props.productData.key}</h1> */}
           
            <h2 className="product-name"><Link to={`product/${key}`}>
               {name}
            
            </Link></h2>
            <p><small> By : {seller}</small></p>
            <p>${price}</p>
            <br />
            <p>Only {stock} left in stock - order soon </p> 
{
  props.showAddToCart &&  <button className="button" onClick={()=>handleAddProduct(product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
    
}
        </div>
            
            
            
            
            
        </div>
    );
};

export default Product;