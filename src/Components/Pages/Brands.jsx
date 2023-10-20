import {  useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import { useEffect, useState } from "react";

const Brands = () => {
   const loads =useLoaderData()
   const [products,setProducts]=useState(loads)
   useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
   },[])
   
    return (
        <div>
        <h1>Our products </h1>
        
        <div className="grid gap-10 grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
        {
         products.map(load=><Brand key={load._id} load={load}></Brand>)   
        }
        </div>
    
        </div>
    );
};

export default Brands;