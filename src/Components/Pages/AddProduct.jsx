
import Nav from './../Nav and Footer/Nav';
import Footer from './../Nav and Footer/Footer';


const AddProduct = () => {
    return (
           
             <div className="max-w-7xl mx-auto  bg-gradient-to-r from-green-400 to-red-500 ">
             <Nav></Nav>
             <div className="hero text-white  my-10 ">
             <div className="card  w-full h-[900px]   bg-base-100">
             <div className="hero-content flex-col">
             <div className="text-center">
           
             <h1 className="text-5xl  font-bold">Add Your Products</h1>
             </div>
             
          
             <form className="grid grid-cols-1 mx-52 my-20 form-control md:grid-cols-2">
            
             
             <div className="flex flex-col  " >
             <div>
             <label className="label">
             <span className="label-text text-2xl my-3">Product Name</span>
             </label>
             <br />
             <input type="text" name="name" placeholder="Enter your product name" className="text-black input  border-2 rounded p-3 mt-3 w-96" required />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl">Brand Name</span>
             </label>
             <br />
             <input type="text" name="name" placeholder="Enter your product name" className="input border-2 rounded p-3 mt-3 w-96" required />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl">Product Types</span>
             </label>
             <br />
             <input type="text" name="name" placeholder="Enter your product name" className="input border-2 rounded p-3 mt-3 w-96" required />
             </div>
             </div>


             <div className="flex flex-col">
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl">Price</span>
             </label>
             <br />
             <input type="text" name="name" placeholder="Enter your product price" className="w-96 input border-2 rounded p-3 mt-3" required />
             </div>
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl">Details</span>
             </label>
             <br />
             <input type="text" name="name" placeholder="Enter your product details" className="w-96 input border-2 rounded p-3 mt-3" required />
             </div>
             
             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl">Ratting</span>
             <br />
             </label>
             <input type="text" name="rating" placeholder="Enter your " className="w-96 input border-2 rounded p-3 mt-3" required />
             </div>
             </div>

             <div className="form-control">
             <label className="label">
             <span className="label-text text-2xl">Photo Url</span>
             </label>
             <br />
             <input type="photo" name="photo" placeholder="Enter your photo url" className="w-96 input border-2 rounded p-3 mt-3" required />
             </div>
            
             <div className="form-control my-12">
             <button className="btn bg-red-400 p-3 rounded-lg">ADD PRODUCT</button>
             </div>
             </form>
             </div>
             </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;