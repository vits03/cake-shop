import React from 'react'
import Image from 'next/image'
import logo  from '@/public/logo-final.png'
const Navbar = () => {
  return (
    <nav  className='  bg-[#F564A9] flex justify-center items-center'>
        <div  className='text-container max-w-7xl flex my-3 justify-center  items-center'>
<Image  src={logo} alt="logo" width={100} height={100}/>

        </div>
      
    </nav>
  )
}

export default Navbar
