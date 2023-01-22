import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../Contaxt/AuthProvider';
import useToken from '../page/Hook/useToken';
import Swal from 'sweetalert2'

const Signup = () => {
    const {createUser}=useContext(authContext)
    const [createUserEmail, setCreateUserEmail ]=useState('')
    const [token]=useToken(createUserEmail)
    const navigate=useNavigate()
    if(token){
      Swal.fire(
         'Signup Success!',
         'You clicked the button!',
         'success'
       )
      navigate('/')
     
     }

console.log('email',createUserEmail);
    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const email= form.email.value
        const name=form.name.value
        const number=form.number.value
        const password=form.password.value
      
      
     createUser(email,password)
     .then(result=>{
        const user=result.user
        console.log(user);
        
        createUser(user.email)

     })
     .catch(e=>{
        console.log(e);
     })
        const addSignup={
          email:email,
          name:name,
          number:number,
          password:password
       
        }
        fetch('https://repliq-server.vercel.app/users', {
         method:"POST",
         headers:{
            'content-type': 'application/json'
         },
         body:JSON.stringify(addSignup)
        })
        .then(res=>res.json())
        .then(data=>{
         console.log(data);
         setCreateUserEmail(email)
        })
        console.log(addSignup);
    }
    return (
        <div>
             <form onSubmit={handleSubmit} className='h-96'>
             <h1 className='text-2xl  text-indigo-500 font-bold mb-3'>Signup</h1>
          <div className='mb-3 '>
            
          <input name='email' type="email" placeholder="enter email" className=" bg-blue-100 input   w-full max-w-xs" />
          </div>
          <div className='mb-3'>
          <input name='name' type="text" placeholder="User Name" className="bg-blue-100 input   w-full max-w-xs" />
          </div>
        
          <div className='mt-3'>
          <input name='number' type="number" placeholder="number" className="bg-blue-100 input   w-full max-w-xs" />
          </div>
          <div className='mt-3'>
          <input name='password' type="password" placeholder="password" className="bg-blue-100 input   w-full max-w-xs" />
          </div>
        
       
          
          <div className='mt-3'>
            <button className='text-white inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-blue-600 w-full max-w-xs'>
           Register
            </button>
          </div>
          </form>
        </div>
    );
};

export default Signup;