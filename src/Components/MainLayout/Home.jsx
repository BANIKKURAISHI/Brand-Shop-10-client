
import { Outlet } from "react-router-dom";
import Nav from "../Nav and Footer/Nav";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            
            <Nav></Nav>
            

            <Outlet></Outlet>
        </div>
    );
};

export default Home;