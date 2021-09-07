import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './productDetail.css'
const ProductDetail = () => {
    const {Key} = useParams(); 
    console.log('It is my clicked key', Key)
    // const product45 = fakeData.find(dataProduct => dataProduct.key === Key);   
    // console.log(product45)
    const map3 = fakeData.find(data => data.key === Key)
    console.log(map3)
    return (
        <div>
            <h1>{Key}</h1>
            <Product product = {map3}></Product>
        </div>
    );
};

export default ProductDetail;