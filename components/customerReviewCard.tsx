import React from 'react'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import { UserCircle } from 'lucide-react'
const CustomerReviewCard = () => {
  return (
    <div className='w-8/10 p-3 flex flex-col rounded-3xl border-primary bg-white border-4'>
      <p className='text-primary text-xs self-center font-medium mb-3'>Rosaline Cake</p>
      <Quote  size={20}/>
      <p className='text-sm text-pink-950 w-8/10 mx-auto'>"I love this cake! The flavor is amazing and the presentation is perfect. Highly recommend!"</p>
      <Quote className='self-end'/>


      <div className="user-section flex gap-2 text-xs font-medium text-primary">
       
<UserCircle size={30}/>  
<p className='self-center '>Maria Jones</p>      </div>
      
    </div>
  )
}

export default CustomerReviewCard
