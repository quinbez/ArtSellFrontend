import React from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/homePages.css'
import { Link } from 'react-router-dom';
import Walter from '../images/Team/team-1.jpg';
import Sarah from '../images/Team/team-2.jpg';
import William from '../images/Team/team-3.jpg';
import Amanda from '../images/Team/team-4.jpg';

const Team = () => {
  return (
    <div className="Home">  
      <Navbar/>
      <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>Check our Team</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Walter} className="img-fluid" alt="" />
                <div className="social">
                  <Link to=""><i className="bi bi-twitter"></i></Link>
                  <Link to=""><i className="bi bi-facebook"></i></Link>
                  <Link to=""><i className="bi bi-instagram"></i></Link>
                  <Link to=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Sarah} className="img-fluid" alt="" />
                <div className="social">
                  <Link to=""><i className="bi bi-twitter"></i></Link>
                  <Link to=""><i className="bi bi-facebook"></i></Link>
                  <Link to=""><i className="bi bi-instagram"></i></Link>
                  <Link to=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Johnson</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={William} className="img-fluid" alt="" />
                <div className="social">
                  <Link to=""><i className="bi bi-twitter"></i></Link>
                  <Link to=""><i className="bi bi-facebook"></i></Link>
                  <Link to=""><i className="bi bi-instagram"></i></Link>
                  <Link to=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>William Levy</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay="100">
              <div className="member-img">
                <img src={Amanda} className="img-fluid" alt="" />
                <div className="social">
                  <Link to=""><i className="bi bi-twitter"></i></Link>
                  <Link to=""><i className="bi bi-facebook"></i></Link>
                  <Link to=""><i className="bi bi-instagram"></i></Link>
                  <Link to=""><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Davis</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

  )
}

export default Team