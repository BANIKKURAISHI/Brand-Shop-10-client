import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Footer from "../Nav and Footer/Footer";
import AddProduct from "../Pages/AddProduct";
import Log from "../Pages/Log";
import Reg from "../Pages/Reg";
//import Reg from "../Pages/Reg";

const myCreateRoute=createBrowserRouter([
    {
     path:"/",
     errorElement:<Error></Error>,
     element:<Home></Home>,
     children:[{
        path:"/",
        element:<Footer></Footer>
     },
      
   
   
   ],
    

    },
    {
        path:"/add",
        element:<AddProduct></AddProduct>
     },
     {
      path:"/in",
      element:<Log></Log>
     },
     {
      path:"/reg",
      element:<Reg></Reg>
      }
  
])




export default myCreateRoute