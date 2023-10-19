import { useState } from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
  const [open,setOpen]=useState(false)
  const links =<div>
  <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-2xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase "}>Home</NavLink>
  <NavLink to="/add" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4  rounded-md text-center" : "rounded-md text-center text-2xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase "}>Add Product</NavLink>
  <NavLink to="/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-2xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800 uppercase "}>My Cart</NavLink>
  <NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-2xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase "}>Login</NavLink>
  <NavLink to="/reg" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-2xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase "}>SingUp</NavLink>            
                 </div>
    return (
        <div className="max-w-7xl mx-auto mt-2    ">
            <div className="navbar flex flex-col rounded-t-lg bg-gradient-to-r from-green-400 to-red-500 p-10 md:flex-row">
            <div className="navbar-start  flex flex-col md:flex-row ">
            <div onClick={()=>setOpen(!open)} className="dropdown lg:hidden">
            <label tabIndex={0} className="btn  ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-1 z-[1] p-2  bg-base-100 rounded-box w-52 ">
            {open&& <div> <div className="flex flex-col p-2 bg-sky-300">
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4  my-3 rounded-md text-center" : "text-center rounded-md my-3 text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase "}>Home</NavLink>
            <NavLink to="/add" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4   my-3 rounded-md text-center" : "rounded-md text-center my-3text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase "}>Add Product</NavLink>
            <NavLink to="/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4  my-3 rounded-md text-center" : "rounded-md text-center my-3 text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800 uppercase "}>My Cart</NavLink>
            <NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4  my-3 rounded-md text-center" : "rounded-md text-center my-3 text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase "}>Login</NavLink>
            <NavLink to="/reg" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-2xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase "}>SingUp</NavLink>   
            </div> </div>}
            </ul>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row">
                <img src="https://i.ibb.co/R26cnWP/on-dark-background.jpg" className="h-20 w-20 rounded-full" alt="" />
                <h1 className=" normal-case text-4xl my-4 ml-3 font-bold text-white">AB GROUP</h1>
            </div>
          
            </div>
           
            <div className="navbar-center hidden md:flex text-end lg:text-center ">
            <ul className="menu menu-horizontal px-1 my-5 ml-5 ">
            {/* <div className="form-control  flex  flex-row">
            <input type="text" placeholder="Search....." className="input input-bordered w-24 h-16 rounded-md md:w-auto" />
           
            </div> */}
            {links}
            </ul>
            </div>
            <div className="navbar-end  my-5 ml-16">
            <a className="btn my-5 rounded-md text-center  text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4 hover:text-blue-800  uppercase ">Button</a>
            </div>
            </div>


            </div>









       
    );
};

export default Nav;