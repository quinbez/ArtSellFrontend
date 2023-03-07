import React from 'react'
import MainLayout from '../Layout/MainLayout';
import ProductTable from '../Pages/ProductTable/ProductTable'

const Product = () => {
  return (
    <div className="App">
      <div className='AppGlass'>
        <div className="pages">
          <MainLayout/>
          <h1>Products</h1>
        </div>
        <ProductTable />
      </div>
    </div>
    )
}

export default Product