import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../Contaxt/AuthProvider';
import Swal from 'sweetalert2'

const ProductsDetails = () => {
    const products=useLoaderData()
    const {user}=useContext(authContext)
    const {img, name, price , details, _id}=products
   
    const handleSubmit=()=>{
     const cartlist={
            email:user.email,
            productID:_id,
            name:name,
            price:price,
            details:details,
            img:img
     }
       
         fetch('https://repliq-server.vercel.app/carts',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(cartlist)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            Swal.fire(
                'ADD TO CART DONE!',
                'You clicked the button!',
                'success'
              )
            
         })
    }
    
    return (
        <div >
           
           {/* <div className="card w-96 bg-base-100  shadow-xl">
  <figure><img src={img} alt="Shoes" className='' /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <h1 className=' flex text-xl font-semibold'>price: ${price}</h1>
    
    <p className=' items-start'>{details}</p>
    
    <div className="card-actions justify-center">
      <Link to={`/checkout/${_id}`}><div className="badge badge-primary">Checkout</div></Link> 
      <Link to={'/'}><div className="badge badge-success"  >Add Cart</div></Link>
    </div>
  </div>
</div> */}
<div className="bg-gray-800">
            <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
               
                <div id="viewerBox" className="lg:p-10 md:p-6 p-4 bg-white">
                    <div className="flex justify-end">
                        <button onclick="closeView()" aria-label="Close" className="focus:outline-none focus:ring-2 focus:ring-gray-800">
                           
                        </button>
                    </div>
                    <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
                       <img src={img} alt='/' className='w-96'   ></img>
                        <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">{name}</h1>
                            <p className="text-base leading-normal text-gray-600 mt-2">{details}.</p>
                            <p className="text-3xl font-medium text-gray-600 mt-8 md:mt-10">${price}</p>
                            <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                               <form   className="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800" onClick={()=>handleSubmit()}>
                               <Link >Add to Cart
                                </Link>
                               </form>
                            
                                <Link to={`/checkout/${_id}`} className='w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white'>
                                checkout
                                </Link>
                                
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default ProductsDetails;