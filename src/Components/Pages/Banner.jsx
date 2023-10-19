//import {AiOutlineShoppingCart } from "react-icons/ai"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Banner = () => {
    useEffect(() => {
        AOS.init(
          {
            offset:400,
            duration:1000,
        }
        );
      }, [])
    return (
            <div className="flex flex-row bg-gradient-to-r from-green-400 to-red-500 ">
            <img src="https://i.ibb.co/vsGHDTQ/req-a-quote-1024x1024.png" className="h-[600px]" alt="" />
            <div className="  font-semibold text-justify my-40 text-white">
            <h1 className="text-black text-5xl" data-aos='fade-right' >Electronics Industry Solution</h1>
            <p  className="text-2xl" data-aos='fade-left'>Not in time and errors in manual loading is a huge  <br />  challenge in production line adaptation and flexible<br /> manufacturing in electronics industry!self-adapt on<br /> demand to improve the throughput and output<br/>reducing the overall cost of logistics 
            in the factory. </p>
            <div className="flex flex-row">
            <input  type="search" name="" id="" placeholder="Search....." className="w-80 mx-20 my-5 p-3 h-12 bg-inherit border-2 rounded-lg text-black text-xl" />
            </div>
            </div>
            </div>
    );
};

export default Banner;