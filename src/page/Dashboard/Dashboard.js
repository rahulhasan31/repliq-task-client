
import React, { useContext } from 'react';
import { authContext } from '../../Contaxt/AuthProvider';


const Dashboard = () => {
    const {user}=useContext(authContext)
   
    return (
        <div>
           <h1 className='text-2xl font-bold'>Welcome to Your Dashboard </h1>
           <h1 className='text-xl text-red-500'>Your Email :{user?.email}</h1>
        </div>
    );
};

export default Dashboard;