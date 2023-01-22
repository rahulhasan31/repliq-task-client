import {  useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Contaxt/AuthProvider';
import CartCard from './CartCard';

const Carts = () => {
     const {user}=useContext(authContext)
    const {data:carts}=useQuery({
        queryKey:['products'],
        queryFn: async ()=>{
            const res= await fetch(`https://repliq-server.vercel.app/cart?email=${user?.email}`)
            const data= await res.json()
           return data
        }
    })
    console.log(carts);
   
    return (
        <div className=' p-5'>

              <div class="flex max-w-screen-md  mx-auto  flex-col  bg-white shadow-xl">
            <div class="flex-1  py-6 px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
               
              </div>

              {
                carts?.map(cart=><CartCard 
                    cart={cart}
                    
                    key={cart._id}
                ></CartCard>)
            }
            </div>

            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
            
           
            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
          
                <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                  <Link to={'/'}>Continue Shopping</Link>
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
          </div>
            

        </div>
    );
};

export default Carts;