import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './Pages/User';
import Order from './Pages/Order';
import Payment from './Pages/Payment';
import Product from './Pages/Product';
import Category from './Pages/Category';
import Donation from './Pages/Donation';
import Home from './components/Customer/Home';
import Products from './components/Customer/Products';
import Services from './components/Customer/Services';
import Contact from './components/Customer/Contact';
import UserPayment from './components/Customer/UserPayment';
import UserOrders from './components/Customer/UserOrders';
import Cart from './components/Customer/Cart';
import Team from './components/Customer/Team';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<User />} />
      <Route path="/product" element={<Product />} />
      <Route path="/category" element={<Category />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/order" element={<Order />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/home" element={<Home />} />
      <Route path="/allProducts" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/userpayment" element={<UserPayment />} />
      <Route path="/team" element={<Team />} />
      <Route path="/usercart" element={<Cart />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);