import { Link } from "react-router-dom";
import Nav from "../Nav and Footer/Nav";


const Reg = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Nav></Nav>
            <div className="flex flex-row">
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
            <div className="text-center ">
            <h1 className="text-center  text-4xl text-white my-4 font-bold">Registration Now</h1>
            </div>
            <div className="card  bg-base-100">
            <form className="w-80  md:w-96 lg:w-96">
            <div className="form-control">
            <label className="label">
            <span className="label-text text-xl">Name</span>
            </label>
            <input type="name" placeholder="Enter your name" className="input border-2 rounded p-3 mt-3 w-96" required />
            </div>

          
         
            <div className="form-control">
            <label className="label">
            <span className="label-text text-xl">Email</span>
            </label>
            <input type="email" placeholder="Enter your email" className="input border-2 rounded p-3 mt-3 w-96" required />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text text-xl">Photo</span>
            </label>
            <input type="url" placeholder="Enter your photo url" className="input border-2 rounded p-3 mt-3 w-96" required />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text text-xl">Password</span>
            </label>
            <input type="password" placeholder="password" className="input border-2 rounded p-3 mt-3 w-96" required />
        
            </div>
            
            <input type="checkbox" className="-my-1" name="terms" id="" />
            <label htmlFor="terms" className="text-xl ml-1">Accept Our Terms And Condition</label>
            <div className="form-control mt-6">
            <button className="btn btn-primary p-3 bg-green-400 rounded-md text-xl">Registration</button>
            </div>
            <h1 className="text-xl">Already Have an account?<Link to="/in" className="text-blue-700 hover:underline"><button>Login</button></Link></h1>
            </form>
            </div>
            </div>
            </div>
            <div className="ml-16 -mt-16">
            <img src="https://i.ibb.co/sKp5VMh/pngtree-colorful-register-now.png" alt="" />
            </div>
            </div>
           </div>
    );
};

export default Reg;


