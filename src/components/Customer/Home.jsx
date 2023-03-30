import React, { useState } from 'react'
import Navbar from './Navbar';
import HomePic from '../../imgs/homePic.jpg';


const Home = () => {

  return (
    <div className="App">
      <div className='AppGlass'>   
        <Navbar/>
        <div className="homePic">
          <img src={HomePic} alt=''/>
        </div>
      </div>
    </div>
    )
}

export default Home