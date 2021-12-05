import React from 'react';

const ReviewItems = (props) => {
    const styles = {
        borderBottom:"1px solid black ",
        padding:'10px',
        margin:'10px'
    }
    const{name,quantity,key,price} = props.product;
    return (
        <div style={styles}>

            <h4 className='product-name' >{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button className='button' onClick={()=> props.removeItem(key) }> Remove </button>
        </div>
    );
};

export default ReviewItems;