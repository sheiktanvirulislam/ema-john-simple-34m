import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile, FacebookAuthProvider } from "firebase/auth";

export const loginManager = () => {
  const app = initializeApp(firebaseConfig);
}


export const handleGoogleSignIn = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider(); 
  return signInWithPopup(auth, provider)
  .then(result =>{
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
     const {displayName,photoURL,email} = result.user
    
     const users = {
       name:displayName,
       photoURL: photoURL,
       email:email,
       isSignedIn:true,
       successMessage: true
     }
     return users;
  })
 }
export  const handleSignOut = async () => {
  const auth = getAuth();
  
  return signOut(auth)
   
   .then(result => {
     const signOutUser ={
      name:"",
      isSignedIn:false,
      photoURL:"",
      email:"",
     }
    return signOutUser;
   })
 }
export  const handleFacebookLogIn =  () =>{
  const auth = getAuth();
  const fbProvider = new FacebookAuthProvider();
  return signInWithPopup(auth, fbProvider)
    .then((result) => {
      // The signed-in user info.
      const user2 = result.user;
      user2.successMessage = true;
      
      console.log("",user2)  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      return user2;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
 }
export const creatingUserWithEmailAndPassword = async (name, email, password) => {
  const auth = getAuth();
     return   createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const allUser = userCredential.user;
            const newUser = {...allUser}
            console.log(allUser.email, allUser)
            newUser.error = "";
            newUser.successMessage = true;
            updateUser(name)
            return newUser;

}) 
.catch((error) => {
            
  const newUser = {}
  
  const errorCode = error.code;
  const errorMessage = error.message;
  newUser.error = errorMessage;
  newUser.successMessage = false;
  
  console.log(errorMessage,errorCode)

  // ..
}
)



}
export const signedInUser = async (email, password) => {
  const auth = getAuth();
      return  signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
         const someUser = userCredential.user;
         const newUser = {...someUser}
          
            newUser.error = "";
            newUser.successMessage = true;
            return newUser;
            
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const newUser = {}
            
    
   
    newUser.error = errorMessage;
    newUser.successMessage = false;
    return newUser;
  });
}
const updateUser = (name) =>{
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: name,
    

  }).then(() => {
    console.log("user name updated")
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
    console.log(error)
  });
    
 }




