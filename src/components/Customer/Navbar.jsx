import React from 'react'
import './Css/Navbar.css'
import { NavLink} from 'react-router-dom'
import Logo from '../../imgs/logo.png';

const Navbar = () =>{
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar__list">
                    <div className="logo">
                        <img src={Logo} alt=''/>
                        <span>
                            <span>A</span>rt<span>S</span>ell
                        </span>
                    </div>
                    <li className="navbar__item">
                        <NavLink  to='/home' className="navbar__link " activeClassName = 'active' >Home</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to='/allProducts' className="navbar__link ">Product</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to='/services' className="navbar__link">Services</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to='/contact'className="navbar__link">Contact</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to='/userpayment'className="navbar__link">Payment</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to='/userorders'className="navbar__link">Orders</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to='/usercart'className="navbar__link">Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        //  cart
    )
}

export default Navbar
