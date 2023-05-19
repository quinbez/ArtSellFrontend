import React, { useState } from 'react'
import Navbar from './Navbar';
import './Css/homePages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from '../images/bgEdited.jpg';
import { Link } from 'react-router-dom';

function Home() {
  // const styles = {
  //   backgroundImage: `url(${bgImage})`,
  //   backgroundPosition: 'top center',
  //   };
  return (
    <div className="Home">  
      <Navbar/>
      <section id="home" className="d-flex align-items-center justify-content-center"> 
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-6 col-lg-8">
              <h1>Unlocking<span> artists'</span> creativity</h1>
              <h2>Spotlight hidden talent with our platform</h2>
            </div>
          </div>
          <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line"></i>
              <h3><Link to="/allProducts">Ink drawing</Link></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-calendar-todo-line"></i>
              <h3><Link to="/allProducts">Digital drawing</Link></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-paint-brush-line"></i>
              <h3><Link to="/allProducts">Sketches</Link></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"></i>
              <h3><Link to="/allProducts">Material art</Link></h3>
            </div>
          </div>
          <div className="col-xl-2 col-md-4">
            <div className="icon-box">
              <i className="ri-database-2-line"></i>
              <h3><Link to="/allProducts">Paintings</Link></h3>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
    
  );
}

export default Home;


