import { Link, Outlet, useLoaderData } from "react-router-dom";
import Home2 from "./Home2";

//import { useState } from "react";
import Brands from "../Pages/Brands";
import { BsGift } from "react-icons/bs";
import Why from "../Pages/Why";
//import Slide from "../Pages/Slide"

//import { useState } from "react";

const Home = () => {
  const use = useLoaderData();
  // console.log(use)

  return (
    <div className="max-w-7xl mx-auto ">
      <div className="">
        <Home2></Home2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-row justify-center text-white my-5">
        <BsGift className="text-5xl mx-10 my-1"></BsGift>
        <h2 className="text-4xl my-3">Our All Brands</h2>
      </div>
      {/* <> */}
      {/* {use.length > 0 && 
      <Slide></Slide>}

      </> */}

      {/* {brand.length === 0 && (
            <div>
            <h1 className="text-4xl text-center">
            There are no product available
            
            </h1>
             </div>
               )} */}

      <div className="grid gap-10  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-5 mx-10">
        {use.map((brand) => (
          <div key={brand._id} value={brand}>
            <Link to={`products/${brand.brand}`}>
              <div className="card w-80 h-72 bg-[#8ea1b4] shadow-xl">
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
      <Brands></Brands>
      <Why></Why>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
