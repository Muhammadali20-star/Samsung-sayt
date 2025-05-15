import React from 'react'
import { NAVIGATION_DATA } from '../../static'

const Footer = ({date}) => {
  return (
    <footer className='container mx-auto'>
  <div className='grid grid-cols-5 gap-6'>
    {
      NAVIGATION_DATA?.map((date) => (
        <div key={date.title} className='border border-gray-300 p-8'>
          <h2 className="font-bold mb-4">{date.title}</h2>
          <div className='flex flex-col'>
            {date.items?.map((item, id) => (
              <div key={id}>
               <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      ))
    }
  </div>
</footer>
  )
}

export default Footer