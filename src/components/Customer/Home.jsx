import React, { useState } from 'react'
import {motion} from 'framer-motion';
import Logo from '../../imgs/logo.png';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../data/data';

const Home = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="App">
    <div className='AppGlass'>
    <motion.div className="Sidebar userNavbar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt=''/>
        <span>
          <span>A</span>rt<span>S</span>ell
        </span>
      </div>
      {/* menu */}
      <div className="userMenu">
        {SidebarData.map((item, index)=>{
        return (
          <Link to={item.path} className={selected === index? 'menuItem active': 'menuItem'}
          key = {index}
          onClick = {()=>setSelected(index)}
          >
            <item.icon/>
            <span >
              {item.heading}
            </span>
          </Link>
        );
        })}
      </div>
    </motion.div>
    </div>
    </div>
    )
}

export default Home