import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const Brands = () => {
   const loads =useLoaderData()
   
   
    return (
        <div>
        <h1>Our products </h1>
        <div>
        {
         loads.map(load=><Brand key={load._id} load={load}></Brand>)   
        }
        </div>
        </div>
    );
};

export default Brands;