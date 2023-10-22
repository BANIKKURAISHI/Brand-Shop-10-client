import { useContext,  useEffect,  useState } from "react";
import { useLoaderData, } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Nav from "../Nav and Footer/Nav";

const Card = () => {

   
   const load=useLoaderData()
   const [loads,setLoads]=useState([])
   console.log(load)
   const{user}=useContext(AuthContext)
   const email=user?.email
   console.log(email)
   
  //const [variables,setVariables]=useState(load)
  
  // const [products,setProducts]=useState(load)
  // useEffect(()=>{
  //  fetch(`https://brand-shop-server-side-neon.vercel.app/carts/${email}`)
  //  .then(res=>res.json())
  //  .then(data=>setProducts(data))
  // },[])

  
useEffect(()=>{
const itemName =load.filter(item=>item.email===email)
setLoads(itemName)
},[load,email])
   
const purchaseButton=()=>{
  Swal.fire(
    'Deleted!',
    'Your Product has been purchase.',
    'success'
  )
}
   
  
    const deleteButton=_id=>{
        console.log(_id)
    


    
     Swal.fire({
         title: 'Are you sure?',
         text: " Deleted your cart!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed)
         console.log('delete confirm ')
        fetch(`https://brand-shop-server-side-neon.vercel.app/carts/${_id}`,{
          method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount>0){
            Swal.fire(
              'Deleted!',
              'Your cart has been deleted.',
              'success'
            )
          const deleted=loads.filter((item=>item._id!==_id))
          setLoads(deleted)

          }
       
        })
        })
      



    }



    return (
        <div className="max-w-7xl mx-auto">
        <Nav></Nav>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        { loads.length === 0 ?(
          <div className="card w-96 h-60 bg-blue-400 rounded-lg my-10 md:w-[800px]   lg:w-[1280px] " >
          <div className="text-3xl text-white text-center my-16">
          <h1>You Have Not Add Any Products </h1>
          <h2>Please Add Any Product</h2>
          </div>
          
          </div>
          ):
           (loads.map(data=><div key={data._id}>
              <div className="my-10 ">
               <div className="w-80  mx-7 p-10 bg-blue-400 rounded-md shadow-xl md:96 lg:96">
               <figure><img className="w-full h-72 rounded-md" src={data.image} alt="Shoes" /></figure>
               <div className="card-body">
               <h2 className="card-title  text-2xl text-white ">{data.name}</h2>
               <div className="flex flex-row justify-between text-white">
               <h2 className="text-2xl">{data.brand}</h2>
               <h2 className="text-2xl">{data.price}</h2>
               </div>
              
              
               </div>
               <div className="flex flex-row justify-center ">
               <button className="btn btn-primary bg-green-500 mr-10"  onClick={()=>{deleteButton(data._id)}}>DELETE</button>
               <button className="btn btn-primary bg-green-500" onClick={purchaseButton}>PURCHASE</button>
               </div>
               
               </div>
               
               </div>   
            </div>))
        }
        </div>
        </div>
    );
};

export default Card;