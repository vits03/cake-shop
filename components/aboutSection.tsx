import React from 'react'
import AboutTimeline from './timeline'
const AboutSection = () => {
  return (
    <div className='flex flex-col mt-25 items-center  md:px-10 px-5'>
      <p className='text-3xl styled-font font-semibold mt-10 text-white '>👩🏻‍🍳 About Us 👩🏻‍🍳</p>
       <AboutTimeline/>
    </div>
  )
}

export default AboutSection
