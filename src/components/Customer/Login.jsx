import React, { useState } from 'react';
import './Css/homePages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="getStarted pt-4">
        <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type="submit">Login</button>
            <h6 className='mt-3'><Link to="/register" style={{color:['Black']}}><i>Don't have an account? </i><span style={{color:['orange']}}>Register</span></Link></h6>
            <h6><Link to="/home" style={{color:['gray']}}><i>home page</i></Link></h6>
        </form>
        </div>
    </div>  
  );
}

export default Login;
