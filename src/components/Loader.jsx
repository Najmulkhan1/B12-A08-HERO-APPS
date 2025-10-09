import React from 'react'
import logo from '../assets/logo.png'

const Loader = () => {
  return (
    
    <>
    {/* // <div className='flex items-center justify-center'>
    //     <div className='flex text-[100px] items-center font-bold'>L <img className='h-24 animate-spin' src={logo} alt="" /> ading</div>
    // </div> */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className='flex flex-col gap-4'>
          <div className='skeleton h-48 w-full'></div>
          <div className='skeleton h-4 w-28'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
          <div className='skeleton h-4 w-full'></div>
        </div>
      ))}
    </div>

    </>
  )
}

export default Loader