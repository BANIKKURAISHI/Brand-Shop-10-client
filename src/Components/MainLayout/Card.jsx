import { useState } from "react";
import { useLoaderData, } from "react-router-dom";
import Swal from "sweetalert2";

const Card = () => {
   const load=useLoaderData()
   console.log(load)
   const [loads,setLoads]=useState(load)

    const deleteButton=_id=>{
        console.log(_id)
    


    
     Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed)
         console.log('delete confirm ')
        fetch(`https://brand-shop-server-side-p5i1bal6n.vercel.app/carts/${_id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount>0){
            Swal.fire(
              'Deleted!',
              'Your coffee has been deleted.',
              'success'
            )
          const deleted=loads.filter((item=>item._id!==_id))
          setLoads(deleted)

          }
       
        })
        })
      



    }



    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            loads && loads.map(data=><div key={data._id}>
              <div className=" ">
               <div className="card w-80 h-80 bg-base-100 shadow-xl">
               <figure><img src={data.image} alt="Shoes" /></figure>
               <div className="card-body">
               <h2 className="card-title">{data.name}</h2>
               <p>{data.details}</p>

               </div>
               <button onClick={()=>{deleteButton(data._id)}}>Delete</button>
               </div>
               
               </div>   
            </div>)
        }
        </div>
    );
};

export default Card;