// import { AiFillDollarCircle } from "react-icons/ai";
// import { MdOutlineStarRate, MdStarRate } from "react-icons/md";
//import { useEffect  } from "react";

import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
//import { toast } from "react-toastify";

//import Nav from "../Nav and Footer/Nav";




const Details = () => {
   const data=useLoaderData()
   console.log(data)
   const{user}=useContext(AuthContext)
   const email=user.email
   const {name,brand,price}=data
   const cart = {email,name,brand,price}

  
   const addCardButton=()=>{
    fetch('http://localhost:5000/carts',{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(cart )
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          alert('done')
          })
   }



  // useEffect(()=>{
   
  //   fetch(`http://localhost:5000/product/${id}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //   })
  // })

  
  

  


    return (
           <div>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={data.image} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>{data.details}</p>
            <div className="card-actions justify-end">
            <button onClick={addCardButton} className="btn btn-primary">Add to card </button>
            </div>
  </div>
</div>

            </div>
     
          </div>
    )
      
};

export default Details;