import { useLoaderData, useParams  } from "react-router-dom";
 import Nav from "../Nav and Footer/Nav";
  import { ToastContainer } from "react-toastify";
 import Footer from "../Nav and Footer/Footer";
import swal from "sweetalert";

 


const Update = () => {
    const load=useLoaderData()
    
    const {id}=useParams()
    //console.log(load)
   // const {_id,name,brand,type,details,price,rating,photo}=load
    // console.log(load)
    // console.log(load)
     const addUpdateButton=(e)=>{
        const form=e.target
        const name=form.name.value 
        const brand=form.brand.value 
        const type=form.type.value 
        const details=form.details.value 
        const price=form.price.value
        const rating=form.rating.value
        const photo=form.photo.value 
        const update={name,brand,type,details,price,rating,photo}
        console.log(update)
        fetch(`https://brand-shop-server-side-p5i1bal6n.vercel.app/product/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(update)
       })
       .then(res=>res.json())

       .then(data=>{console.log(data)

        if (data.modifiedCount>0){
            swal("Product update successfully");
         
       
      }
    })

     }
    return (
      
         <div className="max-w-7xl mx-auto   ">

            <h1 className="text-4xl">{load.data}</h1>
             <Nav></Nav>
          
             <div className="hero max-w-7xl text-white  my-10 ">
             
             <div className="card  w-full h-[900px]   bg-base-100">
             <div className="hero-content flex-col">
             <form onSubmit={addUpdateButton} className=" my-20 form-control border-2 shadow-2xl rounded-xl p-20  bg-black">
             <div className="text-center mb-10">
             <h1 className="text-5xl  font-bold ">Add Your Products</h1>
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2'>
             <div className="flex flex-col  " >
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Product Name</span>
             </label>
             
             <input type="text" name="name"defaultValue={load.name}  placeholder="Enter your product name" className="text-black input  border-2 rounded p-3  w-96"  />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Brand Name</span>
             </label>
         
             <input type="text" name="brand" defaultValue={load.brand}  placeholder="Enter your product name" className=" text-black input border-2 rounded p-3  w-96"  />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Product Types</span>
             </label>
        
             <input type="text" name="type" defaultValue={load.type} placeholder="Enter your product name" className="text-black input border-2 rounded p-3  w-96"  />
             </div>
             </div>


             <div className="flex flex-col ml-20">
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Price</span>
             </label>
            
             <input type="text" name="price" defaultValue={load.price}  placeholder="Enter your product price" className="text-black  w-96 input border-2 rounded p-3 "  />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Details</span>
             </label>
            
             <input type="text" name="details" defaultValue={load.details}  placeholder="Enter your product details" className="text-black  w-96 input border-2 rounded p-3 "  />
             </div>
             
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Ratting</span>
             
             </label>
             <input type="text" name="rating" defaultValue={load.rating}  placeholder="Enter your " className="text-black  w-96 input border-2 rounded p-3 "  />
             </div>
             </div>
             </div>
             <div className='flex flex-row'>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl text-white">Photo Url</span>
             </label>
        
             <input type="url" name="photo" defaultValue={load.photo}  placeholder="Enter your photo url" className="text-black  w-96 input border-2 rounded p-3 "  />
             </div>
            
             <div className="my-12 ml-40">
             <input type='submit' className="btn bg-red-400 p-3 w-96 rounded-lg text-white" value="ADD PRODUCT"/>
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

export default Update;