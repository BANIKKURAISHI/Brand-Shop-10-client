import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const Nav = () => {
  const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem('theme'):"light")
  const themeButton =(e)=>{
    if(e.target.checked){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
  }

  useEffect(()=>{
    localStorage.setItem("theme",theme)
    const localTheme =localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme",localTheme)

  },[theme])
  
  const [open,setOpen]=useState(false)
  const {user,logOut}=useContext(AuthContext)
  const logOutButton=()=>{
    logOut()
    .then(()=>toast('Logout success full'))
    .catch(error=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    toast(errorCode ,errorMessage )
    })
  }
  const links =<div>
  <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4  "}>Home</NavLink>
  <NavLink to="/add" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4  rounded-md text-center" : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4  "}>Add Product</NavLink>
  <NavLink to="/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center" : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 mr-4  "}>My Cart</NavLink>
  <NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center " : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 ml-1 mr-4  "}>Login</NavLink>
  <NavLink to="/reg" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "p-3 text-xl font-bold text-white bg-gradient-to-r from-green-400 to-red-500  mr-4 rounded-md text-center " : "rounded-md text-center text-xl font-bold p-3 text-white bg-gradient-to-r from-green-400 to-blue-500 ml-1 mr-4  "}>SingUp</NavLink>        
 </div>
    return (
        <div className="max-w-8xl mx-auto mt-2    ">
            <div className="navbar flex flex-col rounded-t-lg bg-gradient-to-r from-blue-400 to-red-500 p-10 md:flex-row">
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
                <h1 className=" normal-case text-4xl my-4 ml-3 font-bold text-white">AB</h1>
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
              


        
            

            
             
             {user?
             <div onClick={()=>setOpen(!open)} className="dropdown dropdown-end ml-20 my-1 rounded-xl shadow-xl">
             <label tabIndex={0} className="btn btn-ghost btn-circle avatar mx-20">
             <div className="w-10  rounded-full">
             <img className="rounded-full  mx-20 my-1" src={user.photoURL} />
             </div>
             </label>
             <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2  bg-inherit rounded-box w-52">
             {open && <div><li>
             <h1 className="ml-1">{user.displayName}</h1>
             <h1 className="-mx-2 text-xs">{user.email}</h1>
             <button className="mx-16 bg-gradient-to-r from-green-400 to-blue-500  p-1  text-center  text-white rounded-md text-red text-xl font-medium" onClick={logOutButton}>Logout</button>
             </li>
             </div>}
             
             </ul>
             </div>:
             <div className="ml-20 my-6">
             <NavLink to="/in" className={({ isActive, isPending }) => isPending ? "pending" : isActive ?
              "bg-rose-700   text-white text-center rounded-md text-red text-xl font-medium p-3 ml-28 my-3 ":"text-center text-xl font-medium  text-white bg-red-600  rounded-md p-3 mr-2 my-3"}>Login</NavLink>
             </div>
             }



            {
                  
           
            // user?<div className="text-center md:text-end">
            
            // <div className="flex flex-col md:flex-row">
            
            
            
            // </div>
         
          
        //   </div>: 
      
      
       
        
        
  }


     <label className="swap swap-rotate ml-8 text-white">
     <input 
     onChange={themeButton}
     checked={theme==="light"?false:true}
     type="checkbox" />
   
     <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
     <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
     </label> 
     </div>

            
            </div>









       
    );
};

export default Nav;