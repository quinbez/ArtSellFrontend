import React from 'react'
import Logo from '../../imgs/logo.png';
import './Sidebar.css'
import { SidebarData } from '../../data/data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { useState } from 'react';

const Sidebar = () => {

  const [selected, setSelected] = useState(0)

  return (
      <div className="Sidebar">
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt=''/>
          <span>
            <span>A</span>rt<span>S</span>ell
          </span>
        </div>
        {/* menu */}
        <div className="menu">
             {SidebarData.map((item, index)=>{
              return (
                <div className={selected === index? 'menuItem active': 'menuItem'}
                key = {index}
                onClick = {()=>setSelected(index)}
                >
                  <item.icon/>
                  <span>
                    {item.heading}
                  </span>
                </div>
              )
             })}
             <div className="menuItem">
                <UilSignOutAlt />
             </div>
        </div>
      </div>
    )
}

export default Sidebar