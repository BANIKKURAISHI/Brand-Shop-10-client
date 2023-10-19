
import { Outlet, useLoaderData} from "react-router-dom";
import Home2 from "./Home2";





const Home = () => {
    const use=useLoaderData() 
    return (
        <div className="max-w-7xl mx-auto ">
           <div className="">
           <Home2></Home2>
           </div>
           <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-5 mx-10">
           {
                use.map(brand=><div key={brand._id} value={brand}>
              
               <div className="card w-80 bg-gradient-to-r from-blue-200 to-blue-500 rounded-lg shadow-2xl image-full ml-8 my-16 ">
               <figure><img className="w-80 h-72 rounded-xl  origin-top-left rotate-12 hover:origin-top" src={brand.img} alt="Brand logo" /></figure>
               <div className="card-body text-3xl font-semibold ">
               <h2 className="card-title text-center text-white my-12 ">{brand.brand}</h2>
               </div>
               </div>
               </div>)
            }
            </div>
           

        <Outlet></Outlet> 
        
        </div>
    );
};

export default Home;