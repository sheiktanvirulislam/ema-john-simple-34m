import React, { useEffect, useState } from 'react';
import {addToDatabaseCart, getDatabaseCart} from '../utilities/databaseManager';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./shop.css"
import { Link } from 'react-router-dom';

const Shop = () => {
    // const first10 = fakeData.slice(0,10);
    const[products,setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/products')
       .then(res => res.json())
       .then(data => setProducts(data))

    },[])
    

    useEffect(()=>{
     const savedCart = getDatabaseCart();
     const keys = Object.keys(savedCart);
     console.log(products,keys)
    //  if (products.length > 0) {
    //     const previousCart = keys.map(existingKey => {
    //         const nowProduct = products.find(nowPd => nowPd.key === existingKey);
    //         nowProduct.quantity =  savedCart[existingKey];
            
    //         return nowProduct;
     
    //       }) 
          
    //       setCart(previousCart)
    //  }
    fetch('http://localhost:5000/multipleProducts',{
          method: 'POST',
          headers: {
                    "Content-Type": "application/json"         
          },
          body:JSON.stringify(keys)
      })   
      .then(res => res.json())
      .then(data => setCart(data))

    },[])
    let newCart;
    const handleAddProduct = (product1) =>{
        
        const tobeAddedKey = product1.key;
        const sameproduct = cart.find(pd => pd.key === tobeAddedKey);
       
        let count = 1;   
        if (sameproduct) {
           
            count = sameproduct.quantity + 1;
            sameproduct.quantity = count;
            const others = cart.filter(pd2 => pd2.key !== tobeAddedKey )
           
            newCart = [...others,sameproduct];
            
            

        } 
        // const count = sameproduct.length;
        else{
            product1.quantity = 1;
            newCart = [...cart,product1];
            

        }
        setCart(newCart)
    
       
       addToDatabaseCart(product1.key,count);
     

    
    }

    return (
        <div className="twin-container">
            <div className="product-container">
            <ul>
                {
                    products.map(productItem => <Product product={productItem}
                    handleAddProduct = {handleAddProduct}
                    showAddToCart = {true} 
                    >

                    </Product>)
                }
            </ul> 
           
        </div>
        <div className="product-cart">
            <Cart cart = {cart} showButton={true}>
               <Link to='/review'>
                   <button className="button">Review Order</button>
                   </Link>
            
  </Cart>
             
        </div>
        {
             
        }
            
            
        </div>
    );
};










export default Shop;