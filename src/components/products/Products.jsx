import React from 'react'
import { PRODUCTS, TEXTS } from '../../static'

const Products = () => {
  return (
    <div className='container mx-auto mb-20'>
      <div className='flex flex-col gap-6 text-center mb-4'>
        <h1 className='text-[36px] leading-[100%]'>Shop all latest products and innovations</h1>
        <p className='underline'>View all offers</p>
      </div>
      <ul className='flex gap-6 justify-center mb-20'>
        {
          TEXTS?.map((text, index)=>(
            <li className='hover:underline' key={index}>{text}</li>
          ))
        }
      </ul>
      <div className='grid grid-cols-3 gap-6'>
        {
          PRODUCTS?.map((product) => (
            <div key={product.id} className='bg-[#F6F6F6] p-8 text-center'>
              <img src={product.image} alt="" />
              <div className='flex flex-col gap-2 mt-4'>
              <h2 className='text-black-800'>{product.title}</h2>
              <h4 className='text-blue-600'>{product.offer}</h4>
              <h4 className='text-[#8B8E99]'>{product.price}</h4>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products