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

//import Brands from "../Pages/Brands";
//import Reg from "../Pages/Reg";

const myCreateRoute=createBrowserRouter([
    {
     path:"/",
     errorElement:<Error></Error>,
     element:<Home></Home>,
     loader:()=>fetch('http://localhost:5000/brand'),
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
         loader:()=>fetch('http://localhost:5000/products')
      },
      {
         path:"/products/:brand",
         element:<Filter></Filter>,
         loader:({params})=>fetch(`http://localhost:5000/products/${params.brand}`)
      },
        

      {
         path:"/product/:id",
         element:<Details></Details>,
         loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      },
       
      {
         path:'/update/:id',
         element:<Update></Update>,
         loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
      }, 
      {
         path:'/cart',
         element:<Card></Card>,
         loader:()=>fetch('http://localhost:5000/carts')
        
      }, 
     
])




export default myCreateRoute