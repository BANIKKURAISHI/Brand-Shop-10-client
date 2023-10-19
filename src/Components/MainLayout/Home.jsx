
import { Outlet } from "react-router-dom";
import Home2 from "./Home2";



const Home = () => {
    return (
        <div className="max-w-7xl mx-auto ">
           <div className="min-h-screen">
           <Home2></Home2>
           </div>
          
            
           

            <Outlet></Outlet> 
        </div>
    );
};

export default Home;