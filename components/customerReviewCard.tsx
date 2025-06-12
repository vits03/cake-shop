
'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react'
import { Quote } from 'lucide-react'
import Image from 'next/image'
import { UserCircle } from 'lucide-react'
import { useEffect } from 'react';

const CustomerReviewCard = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce:true, threshold: 0.2 });
      useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);
  return (
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className=" p-3 w-7/10 flex flex-col rounded-3xl border-primary bg-white border-4 rounded-2xl shadow-lg"
    >
   
      <p className='text-primary text-xs self-center font-medium mb-3'>Rosaline Cake</p>
      <Quote  size={20}/>
      <p className='text-sm text-pink-950 w-8/10 mx-auto'>"I love this cake! The flavor is amazing and the presentation is perfect. Highly recommend!"</p>
      <Quote className='self-end'/>


      <div className="user-section flex gap-2 text-xs font-medium text-primary">
       
<UserCircle size={30}/>  
<p className='self-center '>Maria Jones</p>      </div>
      
    </motion.div>
  )
}

export default CustomerReviewCard
