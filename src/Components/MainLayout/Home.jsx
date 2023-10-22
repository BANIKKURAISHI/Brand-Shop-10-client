import { Link, Outlet, useLoaderData } from "react-router-dom";
import Home2 from "./Home2";
import Brands from "../Pages/Brands";
import { BsGift } from "react-icons/bs";
import Why from "../Pages/Why";


const Home = () => {
  const use = useLoaderData();
  // console.log(use)

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="">
        <Home2></Home2>
      </div>
      <div className="max-w-7xl mx-auto flex  flex-col text-blue-500 my-5 md:flex-col  lg:flex-col ">
        <BsGift className="text-5xl mx-32 my-1 md:mx-auto lg:mx-auto"></BsGift>
        <h2 className="text-4xl mx-10 md:mx-auto lg:mx-auto">Which Brands Product you need</h2> <br/>
        <h2 className="-mt-4 mx-10  md:mx-auto lg:mx-auto">Choose Your favorite one</h2>
      </div>
     <div className="max-w-7xl mx-7 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3   my-5 ">
        {use.map((brand) => (
          <div key={brand._id} value={brand}>
            <Link to={`products/${brand.brand}`}>
              <div className="card w-80 h-72 bg-blue-400 shadow-xl">
                <figure>
                  <img className="w-80 h-60" src={brand.img} alt="Brand" />
                </figure>
                <div className="card-body">
                  <div className="card-actions justify-center">
                    <div className="badge badge-outline text-white text-2xl p-5">
                      {brand.brand}
                      
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="my-20">
      <Brands></Brands>
      </div>
    
      <Why></Why>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
