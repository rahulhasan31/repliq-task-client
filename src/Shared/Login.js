import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../Contaxt/AuthProvider';
import useToken from '../page/Hook/useToken';
import Swal from 'sweetalert2'

const Login = () => {
    const {login}=useContext(authContext)
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const navigate= useNavigate()
    const location=useLocation()
    const from= location.state?.from?.pathname || '/'

    console.log('email ki pai',loginUserEmail);

    if (token) {
        Swal.fire(
            'Login Success!',
            'You clicked the button!',
            'success'
          )
        navigate(from, { replace: true });
    }
    const handleSubmit=event=>{
        event.preventDefault()
        const form=event.target
        const email= form.email.value 
        const password=form.password.value
      
        

        // firebase ====

         login(email, password)
         .then(result=>{
            const user=result.user
            console.log('user',user.email);
            
            setLoginUserEmail(user.email)
            
         })
         .catch(e=>{
            console.log(e);
         })

        const addSignin={
          email,
          password
        }
        console.log(addSignin);
     

    }
    return (
        <div className=' mt-16 '>

            <form onSubmit={handleSubmit} className='h-96'>
                <h1 className='text-2xl  text-indigo-500 font-bold mb-3'>Login</h1>
                <div className='mb-3 '>
                    <input name='email' type="email" placeholder="enter email or user Name" className=" bg-blue-100 input   w-full max-w-xs" />
                </div>
                <div className='mb-3 '>
                    <input name='password' type="password" placeholder="password" className=" bg-blue-100 input   w-full max-w-xs" />
                </div>


               


                <div className='mt-3'>
                    <button className='text-white inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-blue-600 w-full max-w-xs'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;