import React from 'react'
import AboutTimeline from './timeline'
const AboutSection = () => {
  return (
    <div className='flex flex-col mt-15 items-center'>
      <p className='text-3xl font-semibold my-10  text-white '>👩🏻‍🍳 About Us 👩🏻‍🍳</p>
       <AboutTimeline/>
    </div>
  )
}

export default AboutSection
