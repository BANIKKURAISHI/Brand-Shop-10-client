import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc'
import Nav from './../Nav and Footer/Nav';


const Log = () => {
   
    return(
        <div className="max-w-7xl mx-auto ">
        <Nav></Nav>


        <div className="flex flex-row">
        <div className="mr-16 ">
        <img src="https://i.ibb.co/FXjKNhP/Login.jpg" alt="" />
        </div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
        <div className="text-center ">
        <h1 className="text-center  text-4xl text-blue-700 my-4 font-bold">Login Now</h1>
        </div>
        <div className="card  bg-base-100">
        <form className="w-80  md:w-96 lg:w-96">
        <div className="form-control">
        <label className="label">
        <span className="label-text text-xl">Email</span>
        </label>
        <input type="email" placeholder="Enter your email" className="input border-2 rounded p-3 mt-3 w-96" required />
        </div>
         <div className="form-control">
        <label className="label">
        <span className="label-text text-xl">Password</span>
        </label>
        <input type="password" placeholder="password" className="input border-2 rounded p-3 mt-3 w-96" required />
        </div>
         <div className="form-control mt-6">
        <button className="btn btn-primary p-3  bg-green-400 w-full rounded-md text-xl">Login</button>
        <br/>
        <button className="btn btn-primary p-3   mt-3 bg-green-400  w-full rounded-md text-xl flex flex-row"><span className="my-1 ml-24 mr-2"><FcGoogle></FcGoogle></span><span >Login with Google</span></button>
        </div>
        <h1 className="text-xl">New Here?<Link to="/reg" className="text-blue-700 hover:underline"><button>Registration</button></Link></h1>
        </form>
        </div>
        </div>
        </div>
       
        </div>
       </div>
)


    
   
    
           
    
};

export default Log;