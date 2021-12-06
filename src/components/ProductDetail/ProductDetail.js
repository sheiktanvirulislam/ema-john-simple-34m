import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Product from '../Product/Product';
import './productDetail.css'
const ProductDetail = () => {
    const {Key} = useParams(); 
    const[product,setProduct] = useState({})
    // const product45 = fakeData.find(dataProduct => dataProduct.key === Key);   
    // console.log(product45)
    // const map3 = fakeData.find(data => data.key === Key)
    useEffect(() =>{
     fetch(`http://localhost:5000/product/${Key}`)
     .then(response => response.json())
     .then(data => setProduct(data))

    },[Key])
 
    return (
        <div>
            <h1>{Key}</h1>
            <Product  product = {product} showAddToCart = {false}  ></Product>
            
        </div>

    );
};

export default ProductDetail;
