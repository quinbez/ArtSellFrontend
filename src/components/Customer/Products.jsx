import React, { useState } from 'react';
import Navbar from './Navbar'
import roseTitanic from '../images/titanicSketch.jpg';
import digitalGirl from '../images/digGirlCap.jpg';
import OldFather from '../images/oldsketch.jpg';
import dogInk from '../images/dogInk.jpeg';
import dudePainted from '../images/dude.jpeg';
import placePainted from '../images/paintingPlace.jpeg';
import treePainted from '../images/treePaint.jpg';
import digitalSample from '../images/digsample.jpg';
import Hands from '../images/hands.jpg';
import Madona from '../images/madonaSketch.jpeg';
import MomKid from '../images/momkidsketch.jpg';
import LionDig from '../images/digitallion.jpeg';
import { Link } from 'react-router-dom';

function Products() {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <div className="Home">  
      <Navbar/>
      <section id="products" className="allProducts pageTitle">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Our Products</h2>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="allProducts-flters">
              <li
                data-filter="*"
                className={activeFilter === '*' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('*')}
              >
                All
              </li>                
              <li
                data-filter=".filter-app"
                className={activeFilter === '.filter-app' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-app')}
              >
                Sketches
              </li>
              <li
                data-filter=".filter-card"
                className={activeFilter === '.filter-card' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-card')}
              >
                Paintings
              </li>
              <li
                data-filter=".filter-web"
                className={activeFilter === '.filter-web' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-web')}
              >
                Digital
              </li>
              <li
                data-filter=".filter-ink"
                className={activeFilter === '.filter-ink' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-ink')}
              >
                Ink
              </li>
              </ul>
            </div>
          </div>
          <div className="row allProducts-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={roseTitanic} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={roseTitanic} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={digitalSample} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={digitalSample} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={dogInk} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={dogInk} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={digitalGirl} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={digitalGirl} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={Hands} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={Hands} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={Madona} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={Madona} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row allProducts-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={treePainted} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={treePainted} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={dudePainted} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={dudePainted} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={OldFather} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={OldFather} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={MomKid} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={MomKid} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div><div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={LionDig} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={LionDig} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 allProducts-item filter-app">
              <div className="allProducts-wrap">
                <img src={placePainted} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div className="allProducts-info">
                  <h4>Rose Sketch</h4>
                  <p>Hanna.G</p>
                  <div className="allProducts-links">
                    <Link to={placePainted} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                    <Link title="More Details"><i className="bx bx-link"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>      
    </div>

  )
}

export default Products