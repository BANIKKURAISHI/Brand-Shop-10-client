import PropTypes from 'prop-types';
import { AiFillDollarCircle } from 'react-icons/ai';


const Brand = ({load}) => {
    const {name,image,price}=load


    return (
         
           <div className='max-w-7xl mx-auto'>
          
           <div className="card w-72 h-72 bg-black shadow-xl  text-white">
           <figure><img className='w-full h-60 rounded-t-xl' src={image}alt="Shoes" /></figure>
           <div className="card-body">
            <div className='flex flex-row'>
            <h2 className="card-title  mr-3">{name}</h2>
           
            </div>
         
           
           <div className='flex flex-row '>
           <AiFillDollarCircle className=' text-2xl my-1 mr-2'></AiFillDollarCircle>
           <p className='text-2xl'>{price}</p>
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
