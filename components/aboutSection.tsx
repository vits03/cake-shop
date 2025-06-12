import React from 'react'
import AboutTimeline from './timeline'
const AboutSection = () => {
  return (
    <div className='flex flex-col mt-15 items-center  md:px-10 px-5'>
      <p className='text-xl font-semibold mt-10 text-white rounded-lg border-2 border-primary p-3 bg-primary'>👩🏻‍🍳 About Us 👩🏻‍🍳</p>
       <AboutTimeline/>
    </div>
  )
}

export default AboutSection
