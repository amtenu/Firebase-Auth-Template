import React, { useContext, useEffect, useState } from "react";
import {
  
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseContext } from "./FirebaseProvider";

export const AuthContext = React.createContext();

function AuthProvider(props) {
  const children = props.children;
  const [user, setUser] = useState(null);
  const [authError,setAuthError]=useState()

  const fbContext = useContext(FirebaseContext);
  const auth = fbContext.auth;
  const login = async (email, password) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        setAuthError(null);
        console.log("Logged in", userCredential.user);
      } else {
        console.log("Login Failed");
        setAuthError("Duuno why but Login Failed")
      }
    } catch (ex) {
      console.log("Auth Failure", ex.message);
      setAuthError(ex.message)
    }
  };

   const logout = async ()=>{
    await signOut(auth)
   }

useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,(user)=>{
  console.log("onAuthStateChanged() - newUser",user);
  setUser(user)
});
return unSubscribe;//to shut down onAuthStateChange listener
},[auth])



  const theValues = { user,login,logout,authError };

  return (
    <AuthContext.Provider value={theValues}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
