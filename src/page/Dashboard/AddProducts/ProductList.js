import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DashboardRow from '../DashboardRow';

const ProductList = () => {
    const {data:products, }=useQuery({
        queryKey:['products'],
        queryFn: async ()=>{
            const res= await fetch('https://repliq-server.vercel.app/products')
            const data= await res.json()
           return data
        }
        
        
    })
    console.log('products',products);
    return (
        <div>
                <div>
           
           <div className="overflow-x-auto w-full">
 <table className="table w-full">
     
   <thead>

     <tr>
       
       <th>product list</th>
       
     </tr>
   </thead>
   <tbody>
     
    {
       products?.map(product=> <DashboardRow 
           product={product}
           key={product._id}
       ></DashboardRow>)
    }
   </tbody>
 </table>
</div>
       </div>
        </div>
    );
};

export default ProductList;