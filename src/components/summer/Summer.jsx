import React from 'react'
import { SUMMER, SUMMER_TEXT } from '../../static'

const Summer = () => {
  return (
    <div  className='container mx-auto mb-50'>
     <div className='text-center'>
      <h2 className='text-3xl'>Summer upgrades</h2>
      <div className='flex gap-4 justify-center mb-10'>
      {
        SUMMER_TEXT?.map((info, index) => (
           <h3 className='hover:underline' key={index}>{info}</h3>
        ))
      }
      </div>
        
        <div className='flex gap-20'>
            {
                SUMMER?.map((summer) => (
                     <div key={summer.id}>
                        <img className='relative z-0' src={summer.image} alt="" />
                        <div className='absolute z-10 mt-[-100px] text-center text-white'>
                        <h1 className='text-2xl'>{summer.title}</h1>
                        <p>{summer.desc}</p>
                        </div>
                     </div>
                ))
            }
        </div>

     </div>
    </div>
  )
}

export default Summer