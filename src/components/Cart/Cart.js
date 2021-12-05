import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cart.css'
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const cart = props.cart;
    
    // const totalPrice = cart.reduce((total,prd) =>total + prd.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
         
        total = product.price * product.quantity + total;
        
    }
    let shipping = 0;
 
   
    if (total>35) {
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
      }
    else if(total>0){
        shipping = 12.99;

    }
    const tax = Math.round(total / 10);
    const format = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div className="all">
            <h4 className="text-primary">Order Summary</h4>
            <p>Items Ordered:{cart.length}</p> 
            <p>TotalPrice(with Tax):{format(total + shipping + tax)}</p>
            <p><small>Tax:{tax}</small></p>
            <p><small>Shipping Cost:{format(shipping)}</small></p>
            <br />
            {
                props.children
            }
            {/* conditional rendering example */}
            {/* {
                props.showButton === true && <Link to='/review'>
                <button className="button">Review Order</button>
                </Link>
            }
            {
              props.showButton === false && <Link to='/'>
              <button className="button">Place Order</button>
              </Link>
            } */}
        </div>
    );
};

export default Cart;