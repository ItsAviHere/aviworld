import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import ProductDetails from './ecommerce/ProductDetails.jsx';
import Cart from './ecommerce/Cart.jsx'; 
import { mstaorage } from './store/Store.jsx';
import { Provider } from 'react-redux';
import './store/Action.jsx'
import Mainpage from './component/Mainpage.jsx';
import Category from './ecommerce/Category.jsx'; 
import Login from './authentication/Login.jsx'; 
import Register from './authentication/Register.jsx';
import ResetPass from './authentication/ResetPass.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import Product from './ecommerce/Product.jsx';
import ContactUs from './component/ContactUs.jsx'; 
import AboutUs from './component/AboutUs.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Provider store={mstaorage}> 
        
       <Routes>
        <Route path='' element={<Login/>}></Route>
         <Route path='dashboard' element={<Mainpage/>}>
         <Route path='' element={<Dashboard/>}></Route>
          <Route path='contact' element={<ContactUs/>}></Route>
          <Route path='about' element={<AboutUs/>}></Route>
          <Route path='product' element={<Product/>}> </Route>
          <Route path ='category' element={<Category/>}></Route>
          <Route path='product/details/:id' element={<ProductDetails/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
        </Route>
         
        <Route path='register' element={<Register/>}></Route>
        <Route path='reset' element={<ResetPass/>}></Route>
        </Routes>
      </Provider>
     </BrowserRouter>
  </StrictMode>,
)
