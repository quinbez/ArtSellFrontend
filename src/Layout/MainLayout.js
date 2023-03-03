import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout = ({children}) => {
  return (
     <div>
        <Sidebar></Sidebar>
        <div>{children}</div>
    </div>
    )
}

export default MainLayout