import React from 'react'
import AboutTimeline from './timeline'
const AboutSection = () => {
  return (
    <div  id="about" className='flex flex-col scroll-m-35 md:scroll-m-20 mt-25 items-center  md:px-10 px-5'>
      <p className='text-3xl styled-font font-semibold mt-10 text-primary '>👩🏻‍🍳 About Us 👩🏻‍🍳</p>
       <AboutTimeline/>
    </div>
  )
}

export default AboutSection
