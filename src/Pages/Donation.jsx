import React from 'react'
import MainLayout from '../Layout/MainLayout';
import DonationsTable from './DonationsTable/DonationsTable';

const Donation = () => {
  return (
    <div className="App">
        <div className='AppGlass'>
            <div className="pages">
                <MainLayout/>
                <h1>Donations</h1>
            </div>
            <DonationsTable/>
        </div>
    </div>
  )
}

export default Donation