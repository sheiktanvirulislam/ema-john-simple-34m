import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../utilities/databaseManager';
import './shipment.css';
const Shipment = () => {
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { 
      const savedCart = getDatabaseCart(); 
      console.log(data)
      const orderDetails = {...loggedInUser,products:savedCart,shipment:data,orderTime:new Date()}
      fetch('http://localhost:5000/addOrder',{
        method: 'POST',
        body:JSON.stringify(orderDetails),
        headers: {'Content-Type': 'application/json'}
      })
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        if(data === false) {
          processOrder()
          alert('Order Placed Successfully')
        
        }

      })  
    }
    ;
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form className="ship-form form-control" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
       
        
        {/* include validation with required or other standard HTML validation rules */}
        <input  defaultValue={loggedInUser.name} {...register("name", { required: true }) } placeholder="Name" />
        {/* errors will return when field validation fails  */}
        {errors.name && <span className="error">Name is required</span>}
        <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Email" />
        {/* errors will return when field validation fails  */}
        {errors.email && <span className="error"> Email is required</span>}
        <input {...register("address", { required: true })}  placeholder="Address" />
        {/* errors will return when field validation fails  */}
        {errors.address && <span className="error">Addrees is required</span>}
        <input type="submit" className="btn btn-primary"/>
       
      </form>
    );
   
};

export default Shipment;