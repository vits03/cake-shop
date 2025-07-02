import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import OrderCakeModal from './popupform'
import ImageSliderCard from './imageSlider1'
import { AllProducts } from '@/constants/constants'

type ProductCardProps = {
  product: keyof typeof AllProducts; // 'cake' | 'cakesicles' | 'strawberryDipped'
}

const ProductCard = ({ product }: ProductCardProps) => {
  const data = AllProducts[product]
  let firstPrice="0";
  let firstSize="";
  if ( product === "cake"){
   firstPrice = AllProducts["cake"].sizes.Bento.vanilla
  }
  else {
const sizes = AllProducts[product].sizes as Record<string, string>;
 firstSize = Object.keys(sizes)[0];
 firstPrice = sizes[firstSize];
  }
 

  return (
    <div className='w-[300px] bg-white border-3 border-primary min-h-[375px] rounded-2xl'>
      <ImageSliderCard product={product}/>

      <div className='px-2 py-1 flex flex-col justify-center space-y-1'>
        <p className='text-md text-pink-900 text-left pl-2 font-semibold'>
          {data.title}
        </p>

        <p className='text-left text-xs w-95/100 self-center font-medium  text-primary'>
          {data.description}
        </p>

        <div className='price mt-1 text-pink-900 font-semibold pl-2 text-left text-md'>
         { product === "cake" ? <span className=' text-sm font-semibold'>
            {firstPrice} <span className='text-xs'>(starting)</span>
          </span> :  <span className='text-sm font-semibold'>
             {firstPrice} <span className='text-xs'>(Box of {firstSize})
</span>
          </span>}
        </div>

        <OrderCakeModal product={product} />
      </div>
    </div>
  )
}

export default ProductCard
