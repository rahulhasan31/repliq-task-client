import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../Contaxt/AuthProvider';
import useAdmin from '../page/Hook/useAdmin';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {

    const{user}=useContext(authContext)
  const[isAdmin]=useAdmin(user?.email)
    return (
        <div>
             <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content  ">
<Outlet></Outlet>


</div> 
<div className="drawer-side ml-5">
<label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
<ul className="menu p-4 w-80 bg-badge badge-primary rounded-xl  text-2xl">
 
  <Link className='mb-3' to={'/dashboard'}>Dashboard</Link>
  
{
  isAdmin && <> 
  <Link className='mb-3' to={'/dashboard/productlist'}> product list</Link>
  
  <Link className='mb-3' to={'/dashboard/addproduct'}>Add product</Link>
   <Link to={'/dashboard'}>All Users</Link>
 
   
   </>
}

</ul>

</div>
      </div>
    </div> 
       </div>
       
    );
};

export default DashboardLayout;