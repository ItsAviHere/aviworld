import React from 'react'

function ResetPass() {
  return (
    <div className='bg-dark d-flex   align-items-center' style={{ height: '735px' }}>
      <div className='container-fluid '>
        <div className='row  d-flex justify-content-center '>
          <div className='col-md-4'>
            <div className='container-fluid cus-radius cus-filter  '>
              <div className='row   mt-5  pb-5 ps-3 pe-3 text-light  rounded' style={{height:'400px'}}>
                 
                <section className='col-12 text-center mt-5'>
                  <span className='font-s '><h5> Reset Password</h5> </span>
                </section>
                <p className='mt-2 text-white'>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                <section className='col-12 mt-3'>
                  <label class="form-label mb-3">Username</label>
                  <input type="text" class="form-control input-theme maya placeh" placeholder='Enter your username or email'/>
                </section>
                   <section > 
                    <button className='btn btn-outline-primary mt-5 mb-5' style={{width:'100%'}}>Reset</button>
                  </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPass