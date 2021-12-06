import React from 'react';
import './inventory.css';

const Inventory = () => {
    
    const handleAddProduct = () =>{
       const product = {}
        fetch('http://localhost:5000/addProduct',{
           method: 'POST',
           body: JSON.stringify(product),
           headers: { 
             'Content-Type': 'application/json'
           }
       })
    }
    return (
        <div>
           <form action="" >
             <p> <span>Name:</span><input type="text"/> </p>
             <p> <span>price:</span><input type="text"/> </p>
             <p> <span>Quantity:</span><input type="text"/> </p>
             <p> <span>ProductImg:</span><input type="file"/> </p> 

           <button onClick={handleAddProduct} > Add Product</button>

           </form>
        </div>
    );
};

export default Inventory;