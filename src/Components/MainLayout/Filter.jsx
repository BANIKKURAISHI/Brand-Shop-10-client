// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";



//import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Slide from "../Pages/Slide";
import Nav from "../Nav and Footer/Nav";
import { MdStarRate ,MdOutlineStarRate} from "react-icons/md"
import { AiFillDollarCircle } from "react-icons/ai"

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const Filter = () => {
    
    const data=useLoaderData()
    console.log(data)
    
        return (
        <div className="max-w-7xl mx-auto my-10">
         <Nav></Nav>
        <Slide></Slide> 
        
        <div className="grid gap-10 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          
        {data && data.map(product=><div key={product._id}>
           <div className="card w-80 bg-black shadow-xl  text-white">
           <figure><img className='w-80 h-60' src={product.image}alt="Shoes" /></figure>
           <div className="card-body">
            <div className='flex flex-row justify-between'>
            <h2 className="card-title">{product.name}</h2>
            <h2 className="card-title">{product.brand}</h2>
           
            </div>
            <div className="flex flex-row justify-around">
            <h1 className='text-xl'>{product.type}</h1>
            <p className='text-xl ml-16 flex flex-row'>
            <span className="my-1">
            <AiFillDollarCircle></AiFillDollarCircle>
            </span>{product.price}</p>
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
           <Link to={`/product/${product._id}`}><button className="badge badge-outline">Details</button></Link>
           <Link to={`/update/${product._id}`}> <button className="badge badge-outline">Update</button> </Link>
           </div>
           </div>
           </div>
        </div>)}
        {
          data.length ===0 && (
            
          <div className="card w-96 h-60 bg-blue-400 rounded-lg my-10 md:w-[800px]   lg:w-[1280px] " >
          <div className="text-3xl text-white text-center my-24">
          <h1>There are no product available Now </h1>
        
          </div>
          </div>
            
          )  
        }

        </div>
       
       </div>
    );
};

export default Filter;