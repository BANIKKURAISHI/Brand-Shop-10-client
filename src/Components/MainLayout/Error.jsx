import { Link } from "react-router-dom";


const Error = () => {
    
    return (
    <div className="bg-gradient-to-r from-green-400 to-red-500 max-w-7xl mx-auto p-16">
        <div className="max-w-7xl mx-auto my-52 bg-gradient-to-r from-green-400 to-blue-500 border-blue-600   border-2 shadow-2xl rounded-lg w-[600px]">
          <img src="https://i.ibb.co/gWqZfWc/768x385-21.png" className="w-full h-80"  alt="" />
        <h1 className="text-center text-5xl">OPS!!!! </h1>
        <h2 className="text-center text-2xl">That page can not found </h2>
        <Link to="/" className="mx-60 text-3xl">Go Back</Link>
    </div>
      

        </div>
    );
};

export default Error;