import React from 'react'
import { CARDS } from '../../static'

const Cards = () => {
  return (
    <div className='container mx-auto mb-20'>
       <div className='grid grid-cols-4 gap-4'>
        {
            CARDS?.map((card) =>(
                <div key={card.id} className='flex flex-col gap-6'>
                    <img src={card.image} alt="" />
                    <div className='flex flex-col gap-4 text-center'>
                    <h1 className='text-[18px]'>{card.title}</h1>
                    <p className='text-[10px] text-[#8B8E99]'>{card.desc}</p>
                    <button className='underline'>Lean more</button>
                    </div>
                </div>
            ))
        }
       </div>
    </div>
  )
}

export default Cards