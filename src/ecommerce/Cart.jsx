import React from 'react'
import { BsCartXFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuntity, removeItem } from './../store/Action';

function Cart() {
  const myprodata = useSelector((state) => state.counter.myprodata)

  const dispatch = useDispatch();

  const totalPrice = myprodata.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );



  return (
    <div className="container py-4 mt-5 text-light">
    <div className="row mt-4">
      {myprodata.length === 0 ? (
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="bg-primary text-white text-center p-5 rounded shadow w-100">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      ) : (
        <>
          
          <div className="col-lg-7 col-md-12 mb-4">
            {myprodata.map((d) => (
              <div
                key={d.id}
                className="cus-backg1 rounded shadow mb-4 p-3"
                style={{ backdropFilter: 'blur(6px)', border: '1px solid #444' }}
              >
                <div className="row align-items-center">
                  <div className="col-md-3 text-center mb-3 mb-md-0">
                    <img
                      src={d.images}
                      alt={d.title}
                      className="img-fluid rounded"
                      style={{ height: '100px', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="col-md-9">
                    <h5 className="mb-2">{d.title}</h5>
                    <p className="text-light mb-3">Price: <strong>${(d.price * d.quantity).toFixed(2)}</strong></p>
                    <div className="d-flex align-items-center flex-wrap gap-2">
                      <button className="btn btn-sm btn-danger" onClick={() => dispatch(decreaseQuantity(d))}>-</button>
                      <span className="bg-secondary px-3 py-1 rounded">{d.quantity}</span>
                      <button className="btn btn-sm btn-success" onClick={() => dispatch(increaseQuntity(d))}>+</button>
                      <button
                        className="btn btn-outline-light ms-auto"
                        onClick={() => dispatch(removeItem(d))}
                      >
                        Remove <BsCartXFill className="ms-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="col-lg-5 col-md-12">
            <div className="cus-backg1 rounded shadow p-4">
              <h5 className="mb-3 border-bottom pb-2">Apply Promo Code</h5>
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control border-secondary text-white input-theme maya"
                  placeholder="Enter promo code"
                />
                <button className="btn btn-outline-primary">Apply</button>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-light d-flex justify-content-between border-secondary">
                  Subtotal <span>${totalPrice.toFixed(2)}</span>
                </li>
                <li className="list-group-item bg-dark text-light d-flex justify-content-between border-secondary">
                  Shipping <span>$2.30</span>
                </li>
                <li className="list-group-item bg-dark text-light d-flex justify-content-between fw-bold border-top border-secondary">
                  Total (Incl. GST) <span>${(totalPrice + 2.30).toFixed(2)}</span>
                </li>
              </ul>

              <button className="btn btn-primary w-100 mt-4 py-2">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  </div>
)
  
}

export default Cart