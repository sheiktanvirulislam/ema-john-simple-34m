import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import { Link , useHistory } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../utilities/databaseManager';
import './review.css';
import img23 from '../../images/giphy.gif'

const Review = () => {
    const[cart,setCart] = useState([])
    const[orderPlaced , setOrder] = useState(false);
    const history = useHistory();
    const handleRemoveProduct = (productKey) => {
        
        const newCart  = cart.filter(pd => pd.key !== productKey)
        removeFromDatabaseCart(productKey)
        setCart(newCart)
    }
    const handleProceedCheckOut = ()=>{
       history.push('/shipment')

    }
    useEffect(() => {
     //CARTData
      const savedCart = getDatabaseCart() ; 
      const productKeys = Object.keys(savedCart);
     
      const cartProducts =  productKeys.map(key2 => {
      
    
        const product = fakeData.find(pd => pd.key === key2);     
       
        product.quantity = savedCart[key2];
      
       return product;
    });
  setCart(cartProducts)  
        
    },[])
    let thankYou ;
    if (orderPlaced) {
        thankYou = <img src={img23} alt="" />
    }
    
    return (
        <div className="twin-container">
           <div className="product-container">
           {
                cart.map(pdData => <ReviewItems product = {pdData} removeItem = {handleRemoveProduct}  key={pdData.key} ></ReviewItems>)
                // cart.map(pdData => <Product product = {pdData} ></Product>)
                
                  
               
            }
            {
                  thankYou
            }    
           </div> 
           <div className="product-cart">
               <Cart cart={cart} showButton={false}>
               {/* dynamic rendering */}
               
                   <button className="button" onClick={handleProceedCheckOut}>Proceed CheckOut</button>
                   
               </Cart>
              
           </div>             
            
        </div>
    );
};

export default Review;