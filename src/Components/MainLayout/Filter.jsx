// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";



//import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Slide from "../Pages/Slide";
import Nav from "../Nav and Footer/Nav";
import { MdStarRate ,MdOutlineStarRate} from "react-icons/md"
import { AiFillDollarCircle } from "react-icons/ai"
const Filter = () => {
    
    const data=useLoaderData()
    //console.log(data)
    // const [filterItems,setFilterItems]=useState(data)
    // const {brand}=data 
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/products/${brand}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //      console.log(data)
    //      const Items=filterItems.filter((obj=>obj.brand===brand))
    //      setFilterItems(Items)
    //      console.log(Items)
    //      } )
    //    })

        return (
        <div className="max-w-7xl mx-auto my-10">
         <Nav></Nav>
        <Slide></Slide>
        
        <div className="grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          
        { data.map(product=><div key={product._id}>
        <div className="card w-80 bg-black shadow-xl  text-white">
           <figure><img className='w-80 h-60' src={product.image}alt="Shoes" /></figure>
           <div className="card-body">
            <div className='flex flex-row justify-between'>
            <h2 className="card-title">{product.name}</h2>
            <h2 className="card-title">{product.brand}</h2>
           
            </div>
            <div className="flex flex-row justify-around">
            <h1 className='text-xl'>{product.type}</h1>
            <p className='text-xl ml-16 flex flex-row'><span className="my-1"><AiFillDollarCircle></AiFillDollarCircle></span>{product.price}</p>
            
            </div>
            
            
         
           
           <div className='flex flex-row '>
           <p className='text-2xl flex flex-row my-1'>
           <MdStarRate></MdStarRate>
           <MdStarRate></MdStarRate>
           <MdStarRate></MdStarRate>
           <MdStarRate></MdStarRate>
           <MdOutlineStarRate></MdOutlineStarRate>
            {product.rating}</p>
           </div>
           
           <div className="card-actions justify-start">
           <button className="badge badge-outline">Details</button> 
           <button className="badge badge-outline">Update</button>
           </div>
           </div>
           </div>
        </div>)}
        </div>
       </div>
    );
};

export default Filter;