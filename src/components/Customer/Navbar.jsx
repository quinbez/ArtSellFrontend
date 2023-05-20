import React, { useState } from 'react'
import './Css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    // Function to update the active page
    return (
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-lg-between">
          <h1 className="logo me-auto me-lg-0">
            <Link className = "logoName" to="#">
              Art<span>Sell</span>
            </Link>
          </h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}
                    to="/home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                  to="/services"
                >
                  Services
                </Link>
              </li>  

              <li>
                <Link  className={`nav-link ${location.pathname === '/allProducts' ? 'active' : ''}`}
                    to="/allProducts"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
                    to="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                    to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <Link className="get-started-btn" to="/login">
            Get started
          </Link>
        </div>
      </header>
      
      
    );
  }
  
  export default NavBar;