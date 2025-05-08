import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const mycartplace = useSelector((state) => state.counter.myprodata);

  return (
    <header className="p-3 bg-black text-white fixed-top cus-borde">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center cus-wi">
            <li><Link to="/dashboard" className="nav-link px-2 text-light">Home</Link></li>
            <li><Link to="/dashboard/product" className="nav-link px-2 text-white">Product</Link></li>
            <li><Link to="/dashboard/about" className="nav-link px-2 text-white">About Us</Link></li>
            <li><Link to="/dashboard/contact" className="nav-link px-2 text-white">Contact</Link></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3   cus-ser">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          </form>

          <GiHamburgerMenu className="cus-ap ap" style={{ fontSize: '30px' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu" />

          <div className="text-end cus-flo d-flex align-items-center gap-2">
            <Link to="/"><button className="btn btn-outline-light">Login</button></Link>
            <Link to="/register"><button className="btn btn-warning">Sign-up</button></Link>

            <div className="position-relative">
              <Link to="/dashboard/cart"><FaCartShopping className="navbar-icon" /></Link>
              <span className={mycartplace.length === 0 ? 'cart-icon' : 'position-absolute top-0 start-100 translate-middle bg-warning navbaricon-circle border border-light'}>
                {mycartplace.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      
      <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-light" id="offcanvasMenuLabel">Avi World</h5>
          <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-3">
          <ul className="list-unstyled">
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                Dashboard
              </button>
               
            </li>

            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#ecom-collapse" aria-expanded="false">
                E-Commerce
              </button>
              <div className="collapse" id="ecom-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Link to="/dashboard/product" className="link-white rounded">Product</Link></li>
                  <li><Link to="/hel" className="link-white rounded">Product Details</Link></li>
                  <li>
                    <Link to="/dashboard/cart" className="link-white rounded">
                      <button className="btn btn-primary">
                        Cart <span className={mycartplace.length === 0 ? 'cus-cart' : 'badge badge-warning'}>{mycartplace.length}</span>
                      </button>
                    </Link>
                  </li>
                  <li><Link to="#" className="link-white rounded">Checkout</Link></li>
                </ul>
              </div>
            </li>

            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#auth-collapse" aria-expanded="false">
                Authentication
              </button>
              <div className="collapse" id="auth-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Link to="/" className="link-white rounded">Login</Link></li>
                  <li><Link to="/register" className="link-white rounded">Register</Link></li>
                  <li><Link to="/reset" className="link-white rounded">Forget Password</Link></li>
                  <li><Link to="#" className="link-white rounded">Error Page</Link></li>
                </ul>
              </div>
            </li>

            <li className="border-top my-3"></li>

            <li className="mb-1">
              <button className="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="true">
                Account
              </button>
              <div className="collapse show" id="account-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Link to="#" className="link-white rounded">New...</Link></li>
                  <li><Link to="#" className="link-white rounded">Profile</Link></li>
                  <li><Link to="#" className="link-white rounded">Settings</Link></li>
                  <li><Link to="#" className="link-white rounded">Sign out</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
