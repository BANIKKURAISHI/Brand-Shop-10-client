import PropTypes from 'prop-types';


const Brand = ({load}) => {
    const {name,brand,image,price,type}=load


    return (
         
           <div>
          
           <div className="card w-80 bg-black shadow-xl  text-white">
           <figure><img className='w-80 h-60' src={image}alt="Shoes" /></figure>
           <div className="card-body">
            <div className='flex flex-row'>
            <h2 className="card-title mr-3">
            {name}</h2>
            <h2 className="badge badge-secondary ">{brand}</h2>
            </div>
         
           
           <div className='flex flex-row justify-between flex-grow'>
           <h1 className='mr-8 text-2xl'>{type}</h1>
           <p className='ml-8 text-2xl'>{price}</p>
           </div>
           
           <div className="card-actions justify-start">
           <button className="badge badge-outline">Details</button> 
           <button className="badge badge-outline">Update</button>
           </div>
           </div>
           </div>
           
           </div>
          
    );
};
Brand.propTypes={
    load:PropTypes.object
}

export default Brand;
