import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
import { useDispatch } from 'react-redux';
import { myadd } from './../store/Action';
import { ToastContainer, toast } from 'react-toastify';


function Product() {
  const [product , setProduct]=useState([]);
  const myapi=()=>{
        axios.get('https://dummyjson.com/products').then((d)=>{
            setProduct(d.data.products);
        })
    }
   
  const dispatch=useDispatch()

    useEffect(()=>{
        myapi();
         
    },[])

    const topCenter = () => {
      toast.success('Your Item is added to cart', {
        position: 'top-center',
      });
    };
    const dataFind=(id)=>{
      axios.get(`https://dummyjson.com/products/${id}`).then((d) => {
        dispatch(myadd(d.data));
           topCenter();
   })}
     
   
  return (
    <div className='container cus-area'>
    <div className='row'>
      <ToastContainer />

      {product.map((d) => (
        <div key={d.id} className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex'>
          <div className='product-card bg-dark rounded-4 cus-filter w-100 h-100 position-relative p-3 d-flex flex-column'>
            <span className='badge bg-danger position-absolute top-0 end-0 m-2'>New</span>

            <div className='overflow-hidden d-flex align-items-center justify-content-center' style={{ height: '200px' }}>
              <img src={d.images?.[0]} className='img-fluid w-75 object-fit-contain' alt='Product' />
            </div>

            <div className='mt-3 text-light flex-grow-1 d-flex flex-column'>
              <h5 className='fw-bold mb-2'>{d.title}</h5>
              <p className='text-truncate'>{d.description}</p>

              <div className='d-flex align-items-center justify-content-between mb-2'>
                <div>
                  <FaStar className='text-warning' />
                  <FaStar className='text-warning' />
                  <FaStar className='text-warning' />
                  <FaStar className='text-warning' />
                  <FaStarHalfAlt className='text-warning' />
                </div>
                <small>{d.rating}/5</small>
              </div>

              <div className='d-flex justify-content-between align-items-center mb-3'>
                <span className='text-light small'>{d.category?.name || d.category}</span>
                <span className='price text-light fw-bold'>${d.price}</span>
              </div>

              <div className='d-flex justify-content-between'>
                <button className='btn btn-custom text-white px-3 py-2 rounded-pill' onClick={() => dataFind(d.id)}>
                  Add to Cart
                </button>
                <Link to={`details/${d.id}`}>
                  <button className='btn btn-custom text-white px-3 py-2 rounded-pill'>
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Product