// import React, { useContext, useState } from 'react';
// import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/app';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import'./login.css';
// import { UserContext } from '../../App';
// import { useHistory, useLocation } from 'react-router';
// import { app, handleFacebookLogIn, handleGoogleSignIn, handleSignOut} from './loginManager';

// const db = getFirestore(app)



// function Login() {
   
 
  
//   const[isNewUser,setNewUser] = useState(false)
//   const[user,setUser] = useState({
//     name:"",
//     isSignedIn:false,
//     photoURL:"",
//     password:"",
//     email:"",
//     error:"",
//     successMessage:false,
    
//   })
 
  
  
//   const[loggedInUser,setLoggedInUser] = useContext(UserContext) 
//    const history = useHistory();
//    const location = useLocation();
   
//   let { from } = location.state || { from: { pathname: "/" } };
//   const googleSignIn = ()=> {
//     handleGoogleSignIn()
//     .then(res =>{ 
//       setUser(res);
//       loggedInUser(res);             
//     })
//   }
//   const signOut = ()=> {
//     handleSignOut()
//     .then(res => {
//       setUser(res)
//       setLoggedInUser(res); 
//     });
//   }
   
   
   
   
   
   
//    const handleBlur = (event) => {
//       let isFieldValid = true;
//       if (event.target.name === 'email') {
//         isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        
//       }
     
//       if (event.target.name === 'password') {
//         const isValidPassword = event.target.value.length> 8;
//         const passwordNum = /\d{1}/.test(event.target.value)
//         isFieldValid = isValidPassword && passwordNum;
//         console.log(isFieldValid)
      
//       }
//       if (isFieldValid) {
//         const updateUserInfo = {...user}
//         updateUserInfo[event.target.name] = event.target.value;
//         setUser(updateUserInfo)
        

//       }
//     }
//     const handleSubmit = (event) => {
      
//       if ( isNewUser && user.email && user.password) {
        

        
//       }
//       if (!isNewUser && user.email && user.password) {
        
        
//       }
//       event.preventDefault();
//     }
  
  
//   return (
//     <div className="App2">
//       {/* GoogleSignInActionStart */}
//        {
//          user.isSignedIn ? <button className="btn btn-primary" onClick={signOut}>Sign Out</button> :  <button className="btn btn-success" onClick={googleSignIn}>Sign In</button>
//        }  
//        <br />
//        <button className="btn btn-primary half " >Sign in with Facebook</button>
       
//        {
//          user.isSignedIn ? <div>
//            <h1>Welcome:{user.displayName}</h1>
//        <img src={user.photoURL} alt="" />
//        <h1>Email:{user.email}</h1>
//          </div>: <h1>404 Error</h1>
//        }
//       {/* GoogleSignInActionEnds */}
//       {/*Login FORM Start*/}
//      <div className="card">
//      <h1>Our Authenticaton</h1> 
//       <div className="control">
//       <input type="checkbox" onChange={()=> setNewUser(!isNewUser)} name="newUser" id="" className="control" />
//       <label htmlFor="newUser">New User Sign Up</label>
//       </div>
       
//        <form onSubmit={handleSubmit} className="">
//       { isNewUser && <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="enter your name"/>}
//        <br />
//        <input type="text" onBlur={handleBlur} className="form-control" name="email" id="" placeholder="type your email" required />
//        <br />
//        <input type="password" className="form-control" onBlur={handleBlur} name="password" id="" placeholder="type your password" required /> 
//        <br />
//       <input type="submit"   value={isNewUser ? "Sign In":"Sign Up" } className="btn btn-primary"/>
      
//       </form>
      
//      </div>
//       <h1 style={{color: 'red'}}>{user.error}</h1>
//        {user.successMessage && <h1 style={{color: 'green'}}>User {isNewUser ? 'Created':"Logged In"} Successfully</h1>}
//     </div>
//   );
// }

// export default Login;
import React, { useContext, useState } from 'react';

import './login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import {  creatingUserWithEmailAndPassword, handleFacebookLogIn, handleGoogleSignIn ,  handleSignOut,  loginManager, signedInUser } from './loginManager';

// initializeApp(firebaseConfig)

loginManager();

function Login() {
  
  
  
  const[isNewUser,setNewUser] = useState(false)
  const[user,setUser] = useState({
    name:"",
    isSignedIn:false,
    photoURL:"",
    password:"",
    email:"",
    error:"",
    successMessage:false,
    
  })
  const handleResponse = (result,redirect) =>{
    setUser(result)
    setLoggedInUser(result)
    if(redirect){
      history.replace(from)
    }
  }
  
  const[loggedInUser,setLoggedInUser] = useContext(UserContext) 
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  
   console.log("loggedIN",loggedInUser)  
   const googleSignIn = () =>{
     handleGoogleSignIn()
     .then(result => {
        handleResponse(result,true)
        console.log(result)
        
    })
   }
   const fbLogin = () =>{
     handleFacebookLogIn().then(result => {
       handleResponse(result,true)
      })
       
   }
   
   const signOut = () =>{
     handleSignOut().then(result => {
       handleResponse(result,false)
     
    })
     
     
     
      
   }
   
   const handleBlur = (event) => {
      let isFieldValid = true;
      if (event.target.name === 'email') {
        isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        
      }
     
      if (event.target.name === 'password') {
        const isValidPassword = event.target.value.length> 8;
        const passwordNum = /\d{1}/.test(event.target.value)
        isFieldValid = isValidPassword && passwordNum;
        console.log(isFieldValid)
      
      }
      if (isFieldValid) {
        const updateUserInfo = {...user}
        updateUserInfo[event.target.name] = event.target.value;
        setUser(updateUserInfo)
        

      }
    }
    const handleSubmit = (event) => {
      
      if ( isNewUser && user.email && user.password) {
         creatingUserWithEmailAndPassword(user.name,user.email,user.password).then((result) => {
          handleResponse(result,true)
         })
                
        
            // ...
          }
          

      
      if (!isNewUser && user.email && user.password) {
         signedInUser(user.email,user.password).then((result) => {
           handleResponse(result,true);
         })
      }
      event.preventDefault();
    }
   
   
  return (
    <div className="App2">
      {/* GoogleSignInActionStart */}
       {
         user.isSignedIn ? <button className="btn btn-primary" onClick={signOut}>Sign Out</button> :  <button className="btn btn-success" onClick={googleSignIn}>Sign In</button>
       }  
       <br />
       <button className="btn btn-primary half " onClick={fbLogin} >Sign in with Facebook</button>
       
       {
         user.isSignedIn ? <div>
           <h1>Welcome:{user.displayName}</h1>
       <img src={user.photoURL} alt="" />
       <h1>Email:{user.email}</h1>
         </div>: <h1>404 Error</h1>
       }
      {/* GoogleSignInActionEnds */}
      {/*Login FORM Start*/}
     <div className="card">
     <h1>Our Authenticaton</h1> 
      <div className="control">
      <input type="checkbox" onChange={()=> setNewUser(!isNewUser)} name="newUser" id="" className="control" />
      <label htmlFor="newUser">New User Sign Up</label>
      </div>
       
       <form onSubmit={handleSubmit} className="">
      { isNewUser && <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="enter your name"/>}
       <br />
       <input type="text" onBlur={handleBlur} className="form-control" name="email" id="" placeholder="type your email" required />
       <br />
       <input type="password" className="form-control" onBlur={handleBlur} name="password" id="" placeholder="type your password" required /> 
       <br />
      <input type="submit"   value={isNewUser ? "Sign In":"Sign Up" } className="btn btn-primary"/>
      
      </form>
      
     </div>
      <h1 style={{color: 'red'}}>{user.error}</h1>
       {user.successMessage && <h1 style={{color: 'green'}}>User {isNewUser ? 'Created':"Logged In"} Successfully</h1>}
    </div>
  );
}

export default Login;

