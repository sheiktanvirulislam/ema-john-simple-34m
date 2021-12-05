import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './productDetail.css'
const ProductDetail = () => {
    const {Key} = useParams(); 
    
    // const product45 = fakeData.find(dataProduct => dataProduct.key === Key);   
    // console.log(product45)
    const map3 = fakeData.find(data => data.key === Key)
 
    return (
        <div>
            <h1>{Key}</h1>
            <Product  product = {map3} showAddToCart = {false}  ></Product>
            
        </div>

    );
};

export default ProductDetail;
