import PropTypes from 'prop-types';

const Brand = ({load}) => {
    const {name,brand,image,price}=load
    return (
           <div>
           <div className="card  rounded-xl w-72 bg-base-100 shadow-2xl  bg-gradient-to-r from-blue-400 to-red-400">
           <figure><img className='w-full h-52 rounded-t-xl' src={image} alt="Shoes" /></figure>
           <div className="card-body">
           <h2 className="card-title">{name}</h2>
           <p>{brand}</p>
           <h1>{price}</h1>
           </div>
           </div>
          </div>
    );
};
Brand.propTypes={
    load:PropTypes.object
}

export default Brand;
