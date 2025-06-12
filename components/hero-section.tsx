import React from 'react'
import { Button } from './ui/button'
import dynamic from 'next/dynamic';

import ModelViewer from './modelViewer';

const HeroSection = () => {
    //inlcude  header msg , gradient bg and rotating 3d model.
  return (
    <section className='  min-h-[calc(100vh-73px)] kbg-[#281e2 bg-[#281e2a] flex  flex-col md:px-10 px-5 py-15'>

     <div className="main-wrapper flex flex-col md:flex-row md:justify-evenly justify-between items-center">

     <div className="header self-start mt-10">
        <p className='text-5xl text-primary '>     Delight in every bite !
</p>
     <div className='mx-auto'><Button className='mt-10'>view our cakes</Button></div>

     </div>

     <div className="3d-item ">
        <ModelViewer/>
     </div>

     </div>
    </section>
  )
}

export default HeroSection
