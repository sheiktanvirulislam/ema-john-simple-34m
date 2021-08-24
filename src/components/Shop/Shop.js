import React, { useState } from 'react';
import fakeData from  "../../fakeData";
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./shop.css"
const Shop = () => {
    // const first10 = fakeData.slice(0,10);
    const[products,productMethod] = useState(fakeData)
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product1) =>{
       const newCart = [...cart,product1];
       setCart(newCart);
       

    
    }

    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
                {
                    products.map(productItem => <Product productData={productItem}
                    handleAddProduct = {handleAddProduct}
                    >

                    </Product>)
                }
            </ul>
           
        </div>
        <div className="product-cart">
            <Cart cart = {cart}></Cart>
             
        </div>
            
            
        </div>
    );
};










export default Shop;