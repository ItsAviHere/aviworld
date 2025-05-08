import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import { useForm  } from "react-hook-form"

 
 

function Register() {
  const [value,setValue]=useState('')
  const { register, handleSubmit,formState:{errors} } = useForm()
  const onsubmit=(e)=>{
    console.log(e)
  }
    
     
    const handleClick=(e)=>{
      setValue(e.target.value)
      
    } 
 
   
  return (
    <form onSubmit={handleSubmit(onsubmit)}> 
    <div>
        <div className='bg-dark d-flex  align-items-center ' >
              <div className='container-fluid'>
                <div className='row  bg danger  d-flex justify-content-center align-items-center'>
                  <div className='col-md-4'>
                    <div className='container-fluid cus-radius cus-filter'>
                      <div className='row   mt-5  pb-5 ps-3 pe-3 text-light'>
                        <section className='col-12 mt-3 cus-regfont'>
                           Sign up
                        </section>
                        <section className='col-6 mt-3'>
                          <label class="form-label" >First name</label>
                          <input type="text" className='form-control input-theme maya form-cons'   onInput={handleClick} value={value}   id='firstname' {...register("firstname",{required:true,minLength:4,})} />
                          {errors.firstname?.type==='required' && <p className='text-danger'>First name is required</p>}
                          {errors.firstname?.type==='minLength' && <p className='text-warning'>Fisrt Name must be greater than 4 </p>}
                        </section>
                        <section className='col-6 mt-3'>
                          <label class="form-label">Last name</label>
                          <input type="text" class="form-control input-theme maya"    id='lastname'   {...register("lastname",{required:true,minLength:5})}/>
                          {errors.lastname?.type==='required' && <p className='text-danger'>Last name is required</p>}
                          {errors.lastname?.type==='minLength' && <p className='text-warning'>Last name must be greater than 5 </p>}
                        </section>
                        <section className='col-6 mt-3'>
                          <label class="form-label">Email</label>
                          <input type="email" class="form-control input-theme maya form-cons"  id='email'  {...register("email",{required:true,pattern:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ })}/>
                          {errors.email?.type==='pattern' && <p className='text-danger'>Invalid Email</p>}
                          {errors.email?.type==='required' && <p className='text-danger'> Email is required</p>}
                        </section>
                        <section className='col-6 mt-3'>
                          <label class="form-label">Mobile Number</label>
    
                          <input type="text" class="form-control input-theme  maya" id='mo' {...register("mo",{required:true,minLength:10})} />
                          {errors.mo?.type==='required' && <p className='text-danger'>Mobile Number is Required</p>}
                          {errors.mo?.type==='minLength' && <p className='text-warning'>Mobile Number should be contain 10 Number </p>}
                        </section>
                        <section className='col-6 mt-3'>
                          <label class="form-label">Password</label> 
                          <input type="password" class="form-control input-theme  maya" id='pass' {...register('pass',{required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,minLength:8})}/>
                          {errors.pass?.type==='pattern' && <p className='text-danger'> Password must be contain atleast uppercase letters, lowercase letters, numbers, and special characters</p>}
                          {errors.pass?.type==='required' && <p className='text-danger'> Password is required</p>}
                          {errors.pass?.type==='minLength' && <p className='text-warning'>Password should contain 8 character </p>}
                        </section>
                        <section className='col-6 mt-3'>
                          <label class="form-label">Confirm Password</label>
                          <input type="password" class="form-control input-theme maya" />
                        </section>
                         
                        <section className='col-12'>
                        <button type="submit" class="btn cus-color btn-lg btn-block mt-4 "   style={{width:'100%'}}>Sign Up</button>
                        </section>
                        <section className='col-12  text-center mt-4'>
                          You already have an account? 
                        <Link to="./../ " className='text-white'>  <button type="button" class="btn cus-color btn-lg btn-block " style={{width:'100%'}}>Log In</button></Link>
                        </section>
        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
    </form>
  )
}

export default Register