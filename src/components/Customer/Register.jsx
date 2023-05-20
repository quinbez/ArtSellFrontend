import React, { useState } from 'react';
import './Css/homePages.css'
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="getStarted pt-4">
        <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
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
            <button type="submit">Register</button>
            <h6 className='mt-3'><Link to="/login" style={{color:['Black']}}><i>Already have an account? </i><span style={{color:['orange']}}>Login</span></Link></h6>
            <h6><Link to="/home" style={{color:['gray']}}><i>home page</i></Link></h6>
        </form>
        </div>
    </div>
  );
}

export default Register;