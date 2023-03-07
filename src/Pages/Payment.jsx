import React from 'react'
import MainLayout from '../Layout/MainLayout'
import PaymentTable from '../Pages/PaymentTable/PaymentTable'

const Payment = () => {
  return (
    <div className="App">
    <div className='AppGlass'>
      <div className="pages">
        <MainLayout/>
        <h1>Payment</h1>
      </div>
      <PaymentTable/>
    </div>
  </div>
    )
}

export default Payment