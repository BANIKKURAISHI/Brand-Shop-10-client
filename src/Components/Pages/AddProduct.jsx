
import Nav from './../Nav and Footer/Nav';
import Footer from './../Nav and Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const addProductButton =(e)=>{
    e.preventDefault()
    const form=e.target
    const name=form.name.value 
    const brand=form.brand.value 
    const price=form.price.value 
    const details=form.details.value 
    const image=form.image.value 
    const type=form.type.value 
    const rating=form.rating.value 
    const together={name,brand,image,price,details,type,rating}
    console.log(together)
    fetch('https://brand-shop-server-side-neon.vercel.app/products',{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(together)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast("Product add success full")
            })}

    

    return (
           
             <div className="max-w-7xl mx-auto   ">
             <Nav></Nav>
             <div className="hero  max-w-7xl text-white  lg:my-10 ">
             <div className="card w-full   bg-base-100">
             <div className="hero-content flex-col ">
             <form onSubmit={addProductButton} className="w-96 -mx-4 p-8 form-control border-2 shadow-2xl rounded-xl bg-black lg:p-20   md:w-[800px] lg:w-full my-20">
             <div className="text-center  lg:mb-10">
             <h1 className="text-5xl  font-bold ">Add Your Products</h1>
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2'>
             <div className="flex flex-col  " >
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Product Name</span>
             </label>
             
             <input type="text" name="name" placeholder="Enter your product name" className="text-black input  border-2 rounded p-3 w-80 md:w-80 lg:w-96" required />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Brand Name</span>
             </label>
         
             <input type="text" name="brand" placeholder="Enter your product name" className=" text-black input border-2 rounded p-3  w-80 md:w-80 lg:w-96" required />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Product Types</span>
             </label>
        
             <input type="text" name="type" placeholder="Enter your product name" className="text-black input border-2 rounded p-3  w-80 md:w-80 lg:w-96" required />
             </div>
             </div>


             <div className="flex flex-col  ml-0 md:ml-12 lg:ml-20">
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Price</span>
             </label>
            
             <input type="text" name="price" placeholder="Enter your product price" className="text-black  w-80 md:w-80 lg:w-96 input border-2 rounded p-3 " required />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Details</span>
             </label>
            
             <input type="text" name="details" placeholder="Enter your product details" className="text-black  w-80 md:w-80 lg:w-96 input border-2 rounded p-3 " required />
             </div>
             
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Ratting</span>
             
             </label>
             <input type="text" name="rating" placeholder="Enter your " className="text-black  w-80 md:w-80 lg:w-96 input border-2 rounded p-3 " required />
             </div>
             </div>
             </div>
             <div className='flex flex-col md:flex-row'>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Photo Url</span>
             </label>
        
             <input type="url" name="image" placeholder="Enter your photo url" className="text-black  w-80 md:w-80 lg:w-96 input border-2 rounded p-3 " required />
             </div>
            
             <div className="ml-0 md:ml-24 lg:ml-60 my-12" >
             <input type='submit' className="btn bg-red-400 p-3 w-80 md:w-80 lg:w-96 rounded-lg text-white" value="ADD PRODUCT"/>
             </div>
             </div>
             </form>
             </div>
             </div>
            </div>
            <ToastContainer /> 
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;