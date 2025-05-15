import React from 'react'

const Table = () => {
  return (
    <div className='container mx-auto mb-20'>
      <div className='bg-gradient-to-r from-white to-blue-300 h-[250px]'>
          <div className='flex flex-col gap-4 text-center pt-2'>
            <p>Next-gen tech</p>
            <h1 className='text-[36px]'>Upgrade your home <br /> with AI this summer</h1>
            <div className='w-[300px] mx-auto'>
            <button className='bg-[#1E1D1D] text-[#FFFFFF] rounded-[15px] w-[120px] h-[30px]'>Shop now</button>
            </div>
          </div>
      </div>
   </div>
  )
}

export default Table