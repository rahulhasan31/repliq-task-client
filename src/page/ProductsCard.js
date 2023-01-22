import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({product}) => {
    const {name ,img ,price, details} =product
    return (
        <div>
                 <div className="card w-96 bg-base-100  shadow-xl">
  <figure><img src={img} alt="Shoes" className='' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <h1 className=' flex text-xl font-semibold'>price: ${price}</h1>
    
    <p>{details.slice(0,50,)}</p>
    
    <div className="card-actions justify-center">
      <Link to={`/product/${product._id}`}><div className="badge badge-primary py-5 px-5">Details</div></Link> 
      
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductsCard;