import React from 'react'
import Navbar from './Navbar'
import './Css/homePages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import girlInFixerImage from '../images/girlinfixer.jpg';

function Services() {
    return (
    <div className="Home">
          <Navbar/>
            <main id="main">
                <section id="services" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                <img src={girlInFixerImage} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                                <h3>Our Services</h3>
                                <p className="fst-italic">
                                Welcome to our services page! We are thrilled to offer a platform that empowers artists of all levels to showcase their talent and creativity. Our website is designed to unlock the potential of undiscovered artists and reveal hidden gems to the world.
                                </p>
                                <ul>
                                <li><i className="ri-check-double-line"></i> Discover and spotlight hidden creative talents</li>
                                <li><i className="ri-check-double-line"></i> Encouraging and empowering talented individuals</li>
                                <li><i className="ri-check-double-line"></i> No fame or recognition required to share works</li>
                                <li><i className="ri-check-double-line"></i> Online marketplace for fine art</li>
                                </ul>
                                <p>
                                Indulge in a world of art with our diverse range of unique styles and mediums, curated to captivate the hearts of every art enthusiast. Our platform offers stunning pen drawings, breathtaking paintings, and unique material art pieces that are sure to inspire and ignite your imagination.
                                </p>
                                <p>
                                Join us today to discover the perfect piece that resonates with you and experience the magic of art at its finest.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    </div>
    );
  }
  
  export default Services;