import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";

const myCreateRoute=createBrowserRouter([
    {
     path:"/",
     errorElement:<Error></Error>

    }
])




export default myCreateRoute