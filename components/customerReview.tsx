import React from 'react'
import CustomerReviewCard from './customerReviewCard'
const CustomerReview = () => {
  return (
    <section className='grid grid-cols-1 md:max-w-5xl  mx-auto md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 place-items-center'>
      <CustomerReviewCard/>
            <CustomerReviewCard/>

      <CustomerReviewCard/>

  </section>
  )
}

export default CustomerReview
