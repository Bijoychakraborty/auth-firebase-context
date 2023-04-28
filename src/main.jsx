import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProviders from './Components/Providers/AuthProviders.jsx';
import PrivateRoutes from './Components/routes/PrivateRoutes.jsx';
import Orders from './Components/Orders.jsx';
import Profile from './Components/Profile.jsx';


const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/home',
        element:<Home></Home>

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path:'/profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
