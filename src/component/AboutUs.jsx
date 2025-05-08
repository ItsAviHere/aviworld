import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div className="container py-5 text-light mt-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead text-light">
          We are passionate about building innovative solutions that solve real-world problems.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="row text-center mb-5">
        <div className="col-md-6">
          <h3 className="fw-semibold">Our Mission</h3>
          <p>
            To deliver high-quality products and services that empower businesses to achieve their goals efficiently and effectively.
          </p>
        </div>
        <div className="col-md-6">
          <h3 className="fw-semibold">Our Vision</h3>
          <p>
            To be a global leader in tech innovation, fostering growth through sustainable solutions.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Meet the Team</h2>
        <p className="text-muted">Our dedicated professionals behind the success.</p>
      </div>

      <div className="row g-4">
        {[
          { name: 'Avi Sharma', role: 'Founder & CEO', img: 'https://headshots-inc.com/wp-content/uploads/2020/12/what-to-wear-for-professional-headshots-1.jpg' },
          { name: 'Riya Mehta', role: 'CTO', img: 'https://www.lightroompresets.com/cdn/shop/articles/headshot_background_1024x.jpg?v=1653077312' },
          { name: 'Mohit Singh', role: 'Lead Designer', img: 'https://headshots-inc.com/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post.jpg' },
        ].map((member, index) => (
          <div className="col-md-4 text-center" key={index}>
            <img
              src={member.img}
              className="rounded-circle mb-3"
              alt={member.name}
              width="150"
              height="150"
            />
            <h5 className="fw-semibold">{member.name}</h5>
            <p className="text-muted">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
