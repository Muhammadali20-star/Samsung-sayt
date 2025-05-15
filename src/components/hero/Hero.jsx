import React from 'react'

const Hero = ({title, desc, image, catigory, name}) => {
  return (
    <div style={{background: `url(${image})`}} className='container mx-auto w-full h-[600px] mb-4 bg-gray-200 text-center text-[#FFFFFF] mb-10'>
      <h2 className='text-5xl font-semibold'>{title}</h2>
      <div className='flex gap-6 justify-center mt-2'>
      {catigory.map((item, index) => (
         <h3  key={index}>{item}</h3>
      ))}
      </div>
        <div className='mt-90 mb-6'>
          <h1 className='text-4xl'>{name}</h1>
        </div>
        <p className='text-[14px] mb-4'>{desc}</p>
        <div className='flex gap-4 justify-center'>
          <button className='underline text-black-300'>shop all appliance deals</button>
          <button className='border border-black-600 text-black-600 px-4 py-2 rounded'>Buy Shop</button>
        </div>
    </div>
  )
}

export default Hero