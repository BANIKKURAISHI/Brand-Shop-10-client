import {  useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import { useEffect, useState } from "react";
import { BsGift } from "react-icons/bs"
//import { GrProjects } from "react-icons/gr"
const Brands = () => {
   const loads =useLoaderData()
   const [products,setProducts]=useState(loads)
   useEffect(()=>{
    fetch('https://brand-shop-server-side-neon.vercel.app/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
   },[])
   
    return (
        <div>
       
        <div className="max-w-7xl mx-auto flex flex-col justify-center text-black my-5">
        <BsGift className="text-5xl mx-40 my-1 md:mx-auto  lg:mx-auto"></BsGift>
        <h2 className="text-4xl my-3 mx-[55px] md:mx-auto lg:mx-auto">Our All Products</h2>
        </div> 
        
        <div className="grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
          
        {
        products && products.map(load=><Brand key={load._id} load={load}></Brand>)   
        }
        </div>
    
        </div>
    );
};

export default Brands;