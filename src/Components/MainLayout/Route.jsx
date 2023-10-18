import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Footer from "../Nav and Footer/Footer";

const myCreateRoute=createBrowserRouter([
    {
     path:"/",
     errorElement:<Error></Error>,
     element:<Home></Home>,
     children:[{
        path:"/",
        element:<Footer></Footer>
     }]

    }
])




export default myCreateRoute