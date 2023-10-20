import { Link } from "react-router-dom";
import Nav from "../Nav and Footer/Nav";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Reg = () => {
    const {registration}=useContext(AuthContext)
    
    const singUpButton=(e)=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name=form.get('name')
        const photo=form.get('photo')
        const email=form.get('email')
        const password= form.get('password')
        console.log(email,password,photo,name)
        if(password.length <6){
            toast('You must should given valid password' )
            return
              }
            else if (!/[A-Z0]/.test(password)){
            toast('You must should given valid password' )
            return 
             }
            else if (!/(?=.*[!@#$%^&*()_+])/.test(password)){
             toast('You must should given valid password' )
             return 
             }

   
        registration(email,password)
        .then(result=>{
            const user=result.user 
            console.log(user)
            toast('Registration success full',)
      
           updateProfile(result.user,{
            displayName:name ,photoURL:photo
        })
        .then(()=>{
         toast("Profile is update")
        })
    })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            toast(errorCode ,errorMessage )
        })

        
       
    }

    return (
        <div className="max-w-7xl mx-auto ">
            <Nav></Nav>
            <div className="flex flex-row">
            <div className="hero -mx-40 ">
            <div className="hero-content flex-col ">
            <div className="text-center ">
            <h1 className="text-center  text-4xl text-black my-4 font-bold">Registration Now</h1>
            </div>
            <div className="card  ">
            <form onSubmit={singUpButton} className="w-80  md:w-96 lg:w-96">
            <div className="form-control">
            <label className="label">
            <span className="label-text text-xl">Name</span>
            </label>
            <input type="name" name="name" placeholder="Enter your name" className="input border-2 rounded p-3 mt-3 w-96" required />
            </div>

          
         
            <div className="form-control">
            <label className="label">
            <span className="label-text text-xl">Email</span>
            </label>
            <input type="email" name="email" placeholder="Enter your email" className="input border-2 rounded p-3 mt-3 w-96" required />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text text-xl">Photo</span>
            </label>
            <input type="url" name="photo" placeholder="Enter your photo url" className="input border-2 rounded p-3 mt-3 w-96" required />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text text-xl">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input border-2 rounded p-3 mt-3 w-96" required />
        
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
            <div className="ml-16 -mt-10">
            <img src="https://i.ibb.co/sKp5VMh/pngtree-colorful-register-now.png" alt="" />
            </div>
            </div>
            <ToastContainer /> 
           </div>
    );
};

export default Reg;


