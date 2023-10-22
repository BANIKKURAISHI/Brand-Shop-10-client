import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Footer from "../Nav and Footer/Footer";
import AddProduct from "../Pages/AddProduct";
import Log from "../Pages/Log";
import Reg from "../Pages/Reg";

import PrivetRoute from "../AuthProvider/PrivetRoute";
import Brands from "../Pages/Brands";
import Filter from "./Filter";
import Details from "../Pages/Details";


import Update from "./Update";
import Card from "./Card";
//import UserCard from "../Pages/UserCard";

//import Brands from "../Pages/Brands";
//import Reg from "../Pages/Reg";

const myCreateRoute=createBrowserRouter([
    {
     path:"/",
     errorElement:<Error></Error>,
     element:<Home></Home>,
     loader:()=>fetch('https://brand-shop-server-side-neon.vercel.app/brand'),
     children:[
   {
      path:"/",
      element:<Footer></Footer>,
     
   },
   
   
   
   ],
    

    },
    {
        path:"/add",
        element:<PrivetRoute><AddProduct></AddProduct></PrivetRoute>  
     },
     {
      path:"/in",
      element:<Log></Log>
     },
     {
      path:"/reg",
      element:<Reg></Reg>
      },
    
      {
         path:"/products",
         element:<Brands></Brands>,
         loader:()=>fetch('https://brand-shop-server-side-neon.vercel.app/products')
      },
      {
         path:"/products/:brand",
         element:<Filter></Filter>,
         loader:({params})=>fetch(`https://brand-shop-server-side-neon.vercel.app/products/${params.brand}`)
      },
        

      {
         path:"/product/:id",
         element:<PrivetRoute><Details></Details></PrivetRoute>,
         loader:({params})=>fetch(`https://brand-shop-server-side-neon.vercel.app/product/${params.id}`)
      },
       
      {
         path:'/update/:id',
         element:<PrivetRoute><Update></Update></PrivetRoute>,
         loader:({params})=>fetch(`https://brand-shop-server-side-neon.vercel.app/product/${params.id}`)
      }, 
      {
         path:'/cart',
         element:<PrivetRoute><Card></Card></PrivetRoute>,
         loader:()=>fetch('https://brand-shop-server-side-neon.vercel.app/carts')
        
      }, 
     
     
])




export default myCreateRoute