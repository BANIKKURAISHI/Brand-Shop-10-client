import { useLoaderData } from "react-router-dom";


const Card = () => {
   const load=useLoaderData()
    console.log(load)
    const deleteButton=()=>{
    console.log('complete delete')
    }



    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            load.map(data=><div key={data._id}>
              <div className=" ">
               <div className="card w-80 h-80 bg-base-100 shadow-xl">
               <figure><img src={data.image} alt="Shoes" /></figure>
               <div className="card-body">
               <h2 className="card-title">{data.name}</h2>
               <p>{data.details}</p>
               
               </div>
               <button onClick={deleteButton}>Delete</button>
               </div>
               
               </div>   
            </div>)
        }
        </div>
    );
};

export default Card;