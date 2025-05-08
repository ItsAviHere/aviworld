import React from 'react';

function ContactUs() {
  return (
    <div className="container py-5 mt-5">
      <div className="row mb-5 text-center text-light">
        <div className="col">
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="text-light">Have questions or need help? We'd love to hear from you.</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm  text-light cus-backg">
            <div className="card-body p-4">
              <h5 className="mb-4 fw-semibold">Send Us a Message</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control  input-theme maya" id="name" placeholder="John Doe" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control  input-theme maya" id="email" placeholder="you@example.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" className="form-control input-theme maya" id="subject" placeholder="Subject" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control input-theme maya" id="message" rows="5" placeholder="Write your message..." required></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary w-100 py-2">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 cus-backg text-white h-100 shadow-sm">
            <div className="card-body p-4 d-flex flex-column justify-content-center">
              <h5 className="fw-semibold mb-3">Contact Details</h5>
              <p className="mb-2"><strong>Address:</strong><br /> 123, Avi Plaza, Tech City, India</p>
              <p className="mb-2"><strong>Phone:</strong> <br /> +91-9876543210</p>
              <p className="mb-2"><strong>Email:</strong> <br /> support@aviworld.com</p>
              <p className="mb-0"><strong>Working Hours:</strong><br /> Mon - Fri, 10AM to 6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
