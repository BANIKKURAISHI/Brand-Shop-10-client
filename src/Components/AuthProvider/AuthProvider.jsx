import { createContext } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./Firebase";
export const  AuthContext =createContext(null)
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const AuthInfo={googleLogin}
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