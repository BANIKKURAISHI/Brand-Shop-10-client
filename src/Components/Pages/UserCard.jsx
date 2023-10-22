import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const UserCard = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    const load=useLoaderData()
    const {email}=load
    console.log(email)
    console.log(load)
    
    return (
        <div>
            
        </div>
    );
};

export default UserCard;