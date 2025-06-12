import React from 'react'
import CustomerReviewCard from './customerReviewCard'
const CustomerReview = () => {
  return (
                <div className='flex flex-col items-center   '>  <p className='text-3xl font-semibold my-10  text-white '>🍪 Some reviews 🍪</p>

    <section className='grid grid-cols-1 max-w-5xl  md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center w-full '>
    <CustomerReviewCard/>
        <CustomerReviewCard/>

    <CustomerReviewCard/>


  </section></div> 
  )
}

export default CustomerReview
