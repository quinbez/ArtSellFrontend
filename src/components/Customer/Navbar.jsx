import React, { useState } from 'react'
import './Css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    const [activePage, setActivePage] = useState('home');

    // Function to update the active page
    const handlePageChange = (page) => {
      setActivePage(page);
    };
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <a className = "logoName" href="#">
              Art<span>Sell</span>
            </a>
          </h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a  className={`nav-link scrollto ${activePage === 'home' ? 'active' : ''}`}
                    href="#home"
                    onClick={() => handlePageChange('home')}>
                  Home
                </a>
              </li>
              <li>
                <a  className={`nav-link scrollto ${activePage === 'services' ? 'active' : ''}`}
                    href="#services"
                    onClick={() => handlePageChange('services')}>
                  Services
                </a>
              </li>
              <li>
                <a  className={`nav-link scrollto ${activePage === 'products' ? 'active' : ''}`}
                    href="#products"
                    onClick={() => handlePageChange('products')}>
                  Products
                </a>
              </li>
              <li>
                <a  className={`nav-link scrollto ${activePage === 'team' ? 'active' : ''}`}
                    href="#team"
                    onClick={() => handlePageChange('team')}>
                  Team
                </a>
              </li>
              <li>
                <a  className={`nav-link scrollto ${activePage === 'contact' ? 'active' : ''}`}
                    href="#contact"
                    onClick={() => handlePageChange('contact')}>
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#" className="get-started-btn scrollto">
            Get started
          </a>
        </div>
      </header>
      
      
    );
  }
  
  export default NavBar;