import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivetRoute = ({children}) => {
   const {user,loading}=useContext(AuthContext)
   const location=useLocation()
   if(loading){
   return(<span className="loading loading-dots loading-xs"></span>)
   }
   if(loading){return <span className="loading loading-spinner loading-lg"></span>}
   if(user){return children}
   return (
  <Navigate state={location.pathname}  to="/in"></Navigate>
);
   
};


PrivetRoute.propTypes={
    children:PropTypes.node
}

export default PrivetRoute;