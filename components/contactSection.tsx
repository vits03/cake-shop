"use client"
import React from 'react'
import { Facebook } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MessageCircle } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
const ContactSection = () => {
  // include
  // icons of social media ( insta , fb)
// add an email icon  for contact and whatsapp.  
 const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce:true, threshold: 0.2 });
      useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);
    return (
    <div id="contact" className='flex flex-col items-center justify-center mb-15 md:px-10 px-5'>
           
            <p className='text-3xl styled-font font-semibold mt-10 text-primary '>👻 Contact us 👻</p>

   <section className="text-center flex flex-col  py-10 ">
      <p className="text-pink-950 mb-8">We’re happy to hear from you. Reach us through any of the channels below:</p>
 <motion.div
       ref={ref}
      initial={{ opacity: 0, y:30 }}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut' }}
className="flex flex-col md:flex-row  items-center gap-10 text-lg text-primary"      >
   
        <a href="tel:+2301234567" className="flex items-center gap-3 hover:text-pink-300 transition">
          <Phone size={22} /> +230 123 4567
        </a>

        <a href="mailto:hello@pawtisserie.com" className="flex items-center gap-3 hover:text-pink-300 transition">
          <Mail size={22} /> hello@pawtisserie.com
        </a>

        <a href="https://wa.me/2301234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-pink-300 transition">
          <MessageCircle size={22} /> WhatsApp Chat
        </a>

        

        <a href="https://instagram.com/pawtisserie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-pink-300 transition">
          <Instagram size={22} /> Instagram
        </a>
     </motion.div>
    </section>
    </div>
  )
}

export default ContactSection
