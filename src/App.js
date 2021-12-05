import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/header component/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
  Redirect,
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
 
export const UserContext = createContext();



function App() {
   const[loggedInUser,setLoggedInUser] = useState({}); 
   return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <h3>email:{loggedInUser.email}</h3>
     
     
     <Router>
     <Header></Header> 
       <Switch>
          <Route path="/shop">
          <Shop></Shop> 

          </Route>
          <Route path='/review'>
               <Review></Review>
          </Route>
          <PrivateRoute path='/inventory'>
               <Inventory></Inventory>
          </PrivateRoute>
          
          <PrivateRoute path='/shipment'>
               <Shipment></Shipment>
          </PrivateRoute>
          <Route path='/login'>
               <Login></Login>
          </Route>
          <Route  exact path='/'>
              <Shop></Shop>
          </Route>
          <Route path='/product/:Key'>
             
             <ProductDetail></ProductDetail>
          </Route>
        <Route path='*'>
           <Notfound></Notfound>
        </Route>
       </Switch>
       
      </Router> 
     
      
        
    
    </UserContext.Provider>
  );
}















export default App;
