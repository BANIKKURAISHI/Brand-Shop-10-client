
import { Outlet } from "react-router-dom";
import Nav from "../Nav and Footer/Nav";
import Banner from "../Pages/Banner";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            
            <Nav></Nav>
            <Banner></Banner>

            <Outlet></Outlet> 
        </div>
    );
};

export default Home;