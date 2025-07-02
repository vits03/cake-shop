import React from 'react'
import ImageSlider from './imageSlider'
import ProductCard from './productCard'
import { AllProducts } from '@/constants/constants'
import { Heart } from 'lucide-react'
const ProductSection = () => {


  //each product 
  // id, title, description , price- 10pax 15pax.,image url.
  //iterate through each item in list to render products.
  return (
    <div  id="products"    className='flex flex-col   md:px-10 px-5 my-10 max-w-6xl mx-auto text-center'>
      <ImageSlider/>

      
               <p className='text-3xl styled-font font-semibold my-10  mt-20 text-primary'><Heart  size={35} className='inline-block'/> Our Products <Heart   size={35} className='inline-block' /></p>

       <div  className="card-container  grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center">

     {(Object.keys(AllProducts) as (keyof typeof AllProducts)[]).map((product, index) => (
  <ProductCard key={index} product={product} />
))}

    
       </div>

    </div>
  )
}

export default ProductSection
