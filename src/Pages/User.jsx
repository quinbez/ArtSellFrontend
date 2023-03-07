import React from 'react'
import MainLayout from '../Layout/MainLayout'
import UserTable from '../Pages/UserTable/UserTable'

const User = () => {
  return (
    <div className="App">
      <div className='AppGlass'>
          <div className='pages'>
              <MainLayout/>
            <h1>Users</h1>
          </div>
          <UserTable/>

      </div>
    </div>
     
  )
}

export default User