
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import OrderCakeModal from './popupform'
const ProductCard = () => {
    //card must contain  product image , cake name , a small description , price.
    //below card add a buy btn.

  return (
    <div className='w-[300px] bg-white border-3  border-primary  min-h-[375px] rounded-2xl'>
      <Image src="/cake1.jpg"  width={350} height={350} className='rounded-t-2xl w-auto h-fit'  alt="cake" />
      <div className='px-2 py-1 flex flex-col justify-center  space-y-1'>
          <p className='text-md text-primary text-left pl-2 font-semibold '>Rosaline Cake</p>
          <p className="description  text-left text-xs w-95/100 self-center font-medium text-pink-900">A coconut infused cake with a moist three layer ganache with cream toppings.</p>
          <div className="price mt-1 text-pink-950 font-semibold pl-2 text-left text-md">
          <span className='text-primary text-sm font-semibold'> Rs 500 <span className='text-xs'>(10 pax)</span></span>
      </div>
                <OrderCakeModal/>

      </div>
    </div>
  )
}

export default ProductCard
