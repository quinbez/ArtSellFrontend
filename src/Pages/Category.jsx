import React from 'react'
import MainLayout from '../Layout/MainLayout'
import CategoryTable from '../Pages/CategoryTable/CategoryTable'

const Category = () => {
  return (
    <div className="App">
    <div className='AppGlass'>
      <div className="pages">
        <MainLayout/>
        <h1>Categories</h1>
      </div>
      <CategoryTable />
    </div>
  </div>
    )
}

export default Category