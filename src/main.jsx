import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'



// react Helmet and toast
import {HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Pages/Provider/AuthProvider';
import routers from './Pages/Router/Routers';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <HelmetProvider>
       <RouterProvider router={routers} />
       {/* react hot toast start */}
       <Toaster /> 
        {/* react hot toast end */}
       </HelmetProvider>
       </AuthProvider>
  </React.StrictMode>,
)
