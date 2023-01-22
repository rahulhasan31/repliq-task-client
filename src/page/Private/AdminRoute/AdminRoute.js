import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hook/useAdmin';
import Loading from '../../Loading/Loading';



const AdminRoute = ({children}) => {
    const location= useLocation()
    const {user, loading}= useContext(AuthContext)
    const[isAdmin, isAdminLoading]=useAdmin(user?.email)
  
   if(loading||isAdminLoading){
    return <Loading></Loading>
   }
   if(user && isAdmin){
    return children
   }
 
   return<Navigate to='/login' state={{from:location}}></Navigate>
    
};

export default AdminRoute;