import React, { useState } from 'react';
import NavBar from '../Navbar'
import '../Css/homePages.css'
import roseTitanic from './inkDrawing/eye.jpg';
import Bbg from './inkDrawing/bbg.jpeg';
import Billy from './inkDrawing/billly.jpeg';
import Boy from './inkDrawing/boy.jpg';
import Eye from './inkDrawing/eye.jpg';
import Gnw from './inkDrawing/girlNwater.jpeg';
import GlassWater from './inkDrawing/glassWater.jpeg';
import Guy from './inkDrawing/guy.jpeg';
import Hindi from './inkDrawing/hindi.jpeg';
import Joker from './inkDrawing/joker.jpeg';
import MomKid from './inkDrawing/girlNwater.jpeg';
import MiniTgr from './inkDrawing/miniTgr.jpeg';
import { Link } from 'react-router-dom';

const InkDrawing= () =>{
    const [activeFilter, setActiveFilter] = useState('*');

    const handleFilterClick = (filter) => {
      setActiveFilter(filter);
    };
  return (
    <div className='Home'>
        <NavBar/>  
        <section id="products" className="allProducts pageTitle">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2><b>Ink Drawing</b></h2>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="allProducts-flters">
              <Link to="/allProducts" >
              <li
                data-filter="*"
                className={activeFilter === '*' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('*')}
              >
                All
              </li></Link>                
             <Link><li
                data-filter=".filter-app"
                className={activeFilter === '.filter-app' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-app')}
              >
                Sketches
              </li></Link>
              <Link><li
                data-filter=".filter-card"
                className={activeFilter === '.filter-card' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-card')}
              >
                Paintings
              </li></Link>
              <Link><li
                data-filter=".filter-web"
                className={activeFilter === '.filter-web' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-web')}
              >
                Digital
              </li></Link>
              <Link ><li
                data-filter=".filter-ink"
                className={activeFilter === '.filter-ink' ? 'filter-active' : ''}
                onClick={() => handleFilterClick('.filter-ink')} 
              >
                Ink
              </li></Link>
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
                    <img src={Guy} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={Guy} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                        <Link title="More Details"><i className="bx bx-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 allProducts-item filter-app">
                <div className="allProducts-wrap">
                    <img src={Boy} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={Boy} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                        <Link title="More Details"><i className="bx bx-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 allProducts-item filter-app">
                <div className="allProducts-wrap">
                    <img src={Bbg} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={Bbg} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                        <Link title="More Details"><i className="bx bx-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 allProducts-item filter-app">
                <div className="allProducts-wrap">
                    <img src={Hindi} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={Hindi} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                        <Link title="More Details"><i className="bx bx-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 allProducts-item filter-app">
                <div className="allProducts-wrap">
                    <img src={Joker} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={Joker} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                        <Link title="More Details"><i className="bx bx-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row allProducts-container" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4 col-md-6 allProducts-item filter-app">
                <div className="allProducts-wrap">
                    <img src={GlassWater} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={GlassWater} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                        <Link title="More Details"><i className="bx bx-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 allProducts-item filter-app">
                <div className="allProducts-wrap">
                    <img src={Eye} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={Eye} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                        <Link title="More Details"><i className="bx bx-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 allProducts-item filter-app">
                <div className="allProducts-wrap">
                    <img src={Billy} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={Billy} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
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
                    <img src={MiniTgr} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }}  />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={MiniTgr} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
                        <Link title="More Details"><i className="bx bx-link"></i></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 allProducts-item filter-app">
                <div className="allProducts-wrap">
                    <img src={Gnw} className="img-fluid" alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                    <div className="allProducts-info">
                    <h4>Rose Sketch</h4>
                    <p>Hanna.G</p>
                    <div className="allProducts-links">
                        <Link to={Gnw} data-gallery="allProductsGallery" className="allProducts-lightbox" title="App 1"><i className="bx bx-plus"></i></Link>
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

export default InkDrawing