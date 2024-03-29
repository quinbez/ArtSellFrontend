import React from 'react'
import CustomersReview from '../CustomersReview/CustomersReview'
import Updates from '../Updates/Updates'
import './RightSide.css'

const RightSide = () => {
  return (
      <div className="RightSide">
        <div>
          <h3>Updates</h3>
          <Updates/>
        </div>
        <div>
          <h3>Customer Review</h3>
          <CustomersReview/>
        </div>
      </div>
    )
}

export default RightSide