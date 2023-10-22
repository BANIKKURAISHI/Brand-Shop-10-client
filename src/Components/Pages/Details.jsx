// import { AiFillDollarCircle } from "react-icons/ai";
// import { MdOutlineStarRate, MdStarRate } from "react-icons/md";
//import { useEffect  } from "react";

import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Nav from "../Nav and Footer/Nav";
//import { toast } from "react-toastify";

//import Nav from "../Nav and Footer/Nav";




const Details = () => {
   const data=useLoaderData()
   console.log(data)
   const{user}=useContext(AuthContext)
   const email=user?.email
   const {name,brand,price,image,Details}=data
   

  
   const addCardButton=()=>{
    const cart = {email,name,brand,price,image,Details}
    fetch('https://brand-shop-server-side-neon.vercel.app/carts',{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(cart)
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          Swal.fire(
            'Add Card!',
            'Your product add is successful.',
            'success'
          )
          })
   }





  
  

  


    return (
           <div className="max-w-7xl mx-auto">
            <Nav></Nav>
            <div>
            <div className="card w-[500px] bg-green-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{Details}</p>

            <div className="card-actions justify-end">
            <button onClick={addCardButton} className="btn btn-primary">Add to card</button>
            </div>
            </div>
            </div>

            </div>
     
          </div>
    )
      
};

export default Details;