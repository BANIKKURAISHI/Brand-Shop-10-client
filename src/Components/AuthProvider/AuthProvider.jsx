import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import auth from "./Firebase";
import { GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup, 
    signOut}
    from "firebase/auth";



export const  AuthContext =createContext(null)
const googleProvider=new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleLogin=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
    }
    const registration=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
    setLoading(false);
    })
    return()=>{
        unSubscribe()
    }
    },[])

    const logOut=()=>{
    setLoading(true);
    return signOut(auth)
    }



    const AuthInfo={
        googleLogin,
        registration,
        login,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
         {children}   
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;