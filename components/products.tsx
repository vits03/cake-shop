import React from 'react'
import ImageSlider from './imageSlider'
import ProductCard from './productCard'
const ProductSection = () => {
  return (
    <div className='flex flex-col my-10 max-w-5xl mx-auto text-center'>
      <ImageSlider/>

      
               <p className='text-3xl font-semibold my-10 text-white '>🎂 Our Creations 🎂</p>

       <div className="card-container  grid gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center">
       <ProductCard/>  
<ProductCard/>  
<ProductCard/>  
       </div>

    </div>
  )
}

export default ProductSection
