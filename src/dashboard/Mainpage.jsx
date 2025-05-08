import React from 'react'
import {Outlet } from 'react-router-dom'
import Header from './Header' 
import Footer from './Footer'
function Mainpage() {
  return (
    <> 
     <Header/>
    <div className='container'> 
    <div className='row'>
    
       <div className='row mt-3'>
         
        <Outlet/>
    </div>
    
    </div > 
    </div>
    <Footer/>
    </>
  )
}

export default Mainpage