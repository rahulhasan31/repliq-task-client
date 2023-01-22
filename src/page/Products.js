import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductsCard from './ProductsCard';


const Products = () => {
    
    
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
        <div className='grid grid-cols-1 lg:grid-cols-3 px-10 gap-5'>
            
       {
        products?.map(product=> <ProductsCard 
        product={product}
        key={product._id}
        ></ProductsCard>)
       }
        </div>
    );
};

export default Products;