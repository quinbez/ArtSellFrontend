import React from 'react'
import MainLayout from '../Layout/MainLayout'
import OrderTable from '../Pages/OrderTable/OrderTable'

const Order = () => {
  return (
    <div className="App">
    <div className='AppGlass'>
      <div className="pages">
        <MainLayout/>
        <h1>Orders</h1>
      </div>
      <OrderTable/>
    </div>
  </div>
 
    )
}

export default Order