import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router';
 
function Login() {
  const mynav = useNavigate();
  const [myform, setmyform] = useState({
    email: "",
    pass: ""
  });

  const passupdate = ((e) => {
    console.log(e);
    setmyform({
      pass: e.target.value
    })

  })


  const validfrom = () => {
    if (myform.pass === "123") {
      mynav("/dashboard")
    }
  }

  return (
    <div className='bg-dark d-flex   align-items-center'>
      <div className='container-fluid'>
        <div className='row bg danger d-flex justify-content-center'>
          <div className='col-md-3'>
            <div className='contain-fluid cus-radius cus-filter'>
              <div className='row   mt-5  pb-5 ps-3 pe-3 text-light'>
                <section className='col-12 text-center cus-iconsize'>
                  <FaCircleUser />

                </section>
                <section className='col-12 text-center'>
                  <span className='font-s '>Login to Avi World! </span>
                </section>
                <section className='mt-3 text-warning'>
                  <h6>Hint : Username is user and Password is 123</h6>
                </section>
                <section className='col-12 mt-3'>
                  <label class="form-label">Username</label>
                  <input type="text" class="form-control input-theme maya" />
                </section>
                <section className='col-12 mt-1'>
                  <label class="form-label ">Password</label>
                   <input type="password" class="form-control input-theme maya" value={myform.pass} onInput={passupdate} /><br />
                  {myform.pass === "" ? <p className='text-danger'>Psssword is Blank</p> : myform.pass.length <= 6 ? <p className='text-warning'>Weak Password</p> : myform.pass.length > 6 ? <p className='text-success'>Strong Password</p> : ""}
                </section>
                <section className='col-12'>

                  <div class="form-check">
                    <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                      Remember me
                    </label>
                    <span className='float-end'>
                      <Link to='reset' class="p-1 rounded" href="#simple-list-item-1"> Forget Password</Link>
                    </span>
                  </div>
                </section>
                <section className='col-12'>
                  <button type="button" class="btn cus-color btn-lg btn-block mt-4" style={{ width: '100%' }} onClick={validfrom}>Login</button>
                </section>
                <section className='col-12  text-center mt-4'>
                  Don't have an account?
                  <Link to="./../register" className='text-white'> <button type="button" class="btn cus-color text-light btn-lg btn-block " style={{ width: '100%' }}>Signup</button></Link>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
