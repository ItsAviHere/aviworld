import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

         
          <div className="col-md-3 col-sm-6 mb-4">
            <h4 className="fw-bold text-white mb-3">Avi World !</h4>
            <p className="">Premium online shopping experience with quality, speed and support.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light fs-5"><FaFacebookF /></a>
              <a href="#" className="text-light fs-5"><FaInstagram /></a>
              <a href="#" className="text-light fs-5"><FaTwitter /></a>
              <a href="#" className="text-light fs-5"><FaLinkedinIn /></a>
            </div>
          </div>

          
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled text-light">
              <li className="mb-2"><Link to="/dashboard" className=" text-decoration-none">Home</Link></li>
              <li className="mb-2"><Link to="/dashboard/product" className=" text-decoration-none">Product</Link></li>
              <li className="mb-2"><Link to="/dashboard/about" className=" text-decoration-none">About Us</Link></li>
              <li className="mb-2"><Link to="/dashboard/contact" className=" text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-semibold mb-3">Support</h5>
            <ul className="list-unstyled text-light">
              <li className="mb-2"><a href="#" className=" text-decoration-none">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className=" text-decoration-none">Refund Policy</a></li>
              <li className="mb-2"><a href="#" className=" text-decoration-none">Shipping Policy</a></li>
              <li className="mb-2"><a href="#" className=" text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>

           
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-semibold mb-3">Subscribe</h5>
            <p className="text-light">Get the latest updates and offers.</p>
            <form className="d-flex flex-column gap-2">
              <input type="email" className="form-control bg-dark text-light border-0" placeholder="Your Email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        
        <hr className="border-secondary mt-4" />
        <div className="text-center text-light">
          © {new Date().getFullYear()} AviCart. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
