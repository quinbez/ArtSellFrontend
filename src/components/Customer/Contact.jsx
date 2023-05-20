import React from 'react'
import Navbar from './Navbar'
import './Css/homePages.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact () {
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };
  return (
    <div className="Home">
        <Navbar/>
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title mt-4">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 p-4 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group p-4">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group p-2">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group p-2">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="text-center p-4">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form onSubmit={handleSubmit} className="php-email-form">
                {/* Form fields */}
              </form>
            </div>
          </div>
        </section>  
      </div>
  )
}

export default Contact;