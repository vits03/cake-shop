
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import OrderCakeModal from './popupform'

 interface Product {
  title: string;
  description: string;
  imageUrl: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  };
}

type ProductCardProps = {
  product:Product;
}
  
const ProductCard = ({product}:ProductCardProps) => {
    

  return (
    <div className='w-[300px] bg-white border-3  border-primary  min-h-[375px] rounded-2xl'>
<Image
  src={product.imageUrl}
  width={350}
  height={350}
  alt="cake"
  className="rounded-t-2xl object-cover w-[350px] h-[250px]"
/>      <div className='px-2 py-1 flex flex-col justify-center  space-y-1'>
          <p className='text-md text-primary text-left pl-2 font-semibold '>{product.title}</p>
          <p className="description  text-left text-xs w-95/100 self-center font-medium text-pink-900">{product.description}</p>
          <div className="price mt-1 text-pink-950 font-semibold pl-2 text-left text-md">
          <span className='text-primary text-sm font-semibold'> Rs {product.prices.small} <span className='text-xs'>(10 pax)</span></span>
      </div>
                <OrderCakeModal product={product}/>

      </div>
    </div>
  )
}

export default ProductCard
