import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './Pages/User';
import Order from './Pages/Order';
import Payment from './Pages/Payment';
import Product from './Pages/Product';
import Category from './Pages/Category';
import Donation from './Pages/Donation';
import Home from './components/Customer/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/donation",
    element: <Donation/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.render(
    <RouterProvider router = {router} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
