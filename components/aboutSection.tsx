import React from 'react'
import AboutTimeline from './timeline'
import { ChefHat } from 'lucide-react'
const AboutSection = () => {
  return (
    <div  id="about" className='flex flex-col scroll-m-35 md:scroll-m-20 mt-25 items-center  md:px-10 px-5'>
      <p className='text-4xl styled-font  font-semibold mt-10 text-primary '><ChefHat  size={40} className='inline-block' /> About Us <ChefHat  size={40} className='inline-block' /></p>
       <AboutTimeline/>
    </div>
  )
}

export default AboutSection
