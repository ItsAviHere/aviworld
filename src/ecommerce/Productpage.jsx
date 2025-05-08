import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Productpage() {
  return (
    <div>
        <div className='container cus-area'>
              <div className='row'>
                <div className='col-md-12 d-flex direction-row gap-4'> 
                  <Link to=''>  <button className='btn btn-primary' >All</button></Link>
                  <Link to='category' > <button className='btn btn-primary'>Beauty</button></Link>
                  <Link to='category' > <button className='btn btn-primary'>Grocery</button></Link>
                  <Link to='category' > <button className='btn btn-primary'>Furniture</button></Link>
                  <Link to='category' > <button className='btn btn-primary'>Aqua</button></Link>
              </div>
              </div>
              <div className='row'>
                <Outlet/>
              </div>
        </div>
    </div>
  )
}

export default Productpage