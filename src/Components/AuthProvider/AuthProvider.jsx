import { createContext } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "./Firebase";
export const  AuthContext =createContext(null)
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const registration=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const AuthInfo={googleLogin,registration,login}
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