import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Carts from "../page/Carts/Carts";
import CheckoutProducts from "../page/CheckoutProducts/CheckoutProducts";
import AddProducts from "../page/Dashboard/AddProducts/AddProducts";
import ProductList from "../page/Dashboard/AddProducts/ProductList";
import Dashboard from "../page/Dashboard/Dashboard";
import Home from "../page/Home";
import PrivateRoute from "../page/Private/PrivateRoute";
import ProductsDetails from "../page/ProductsDetails/ProductsDetails";
import Login from "../Shared/Login";
import Signup from "../Shared/Signup";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
              path:'/',
              element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/cart',
                element:<PrivateRoute><Carts></Carts></PrivateRoute>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckoutProducts></CheckoutProducts></PrivateRoute>,
                loader:({params})=>fetch(`https://repliq-server.vercel.app/products/${params.id}`)
            },
            {
                path:'/product/:id',
                element:<ProductsDetails></ProductsDetails>,
                loader:({params})=>fetch(`https://repliq-server.vercel.app/products/${params.id}`)
                
            }
        ]
       
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
              path:'/dashboard',
              element:<Dashboard></Dashboard>
            },
            {
                path:'/dashboard/addproduct',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/dashboard/productlist',
                element:<ProductList></ProductList>
            },
        ]
        
    }
])