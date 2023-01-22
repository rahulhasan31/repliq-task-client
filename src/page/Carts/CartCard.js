import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartCard = ({ cart }) => {
  const { name, img, price, details,productID, _id,  } = cart
  const [deleteCart, setCart]=useState([])

  console.log(cart);
  const handleDelete=id=>{
    fetch(`https://repliq-server.vercel.app/cart/${id}`,{
        method:"DELETE"
     })
   .then(res=>res.json())
   .then(data=>{
     console.log(data);
     if(data.deletedCount > 0){
      alert('delete success')
      const remaining=cart.filter(ord=> ord._id !== id)
      setCart(remaining)
    }   
   })
 }
  return (
    <div>
     
      <div>
         
      <div class="mt-8">
          
                <div class="flow-root border w-full p-5">
                  <ul  class="-my-6 ">
                    <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={img} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center"/>
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <p>{name}</p>
                            </h3>
                            <p class="ml-4">${price}</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500"></p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                        <Link to={`/checkout/${cart.productID}`} class="flex items-center justify-center rounded-md border border-transparent text-indigo-600   text-base font-medium  hover:text-indigo-500">Checkout</Link>

                          <div class="flex">
                            <button onClick={()=>handleDelete(_id)} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>

                   

                   
                  </ul>
                </div>
              </div>

             
      </div>

    </div>
  );
};

export default CartCard;