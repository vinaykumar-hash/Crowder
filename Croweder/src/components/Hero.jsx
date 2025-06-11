import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-lvh flex justify-start items-center flex-col gap-4'>
        <div className='w-full' style={{backgroundColor:"#537D5D"}}></div>
        <div className=' bg-black/10' style={{height:"80%",width:"100%"}}></div>
        <p className='fustat text-2xl '>Our Favourate's</p>
        <div className='flex justify-start items-center gap-4'>
            <div className='h-40 w-80 bg-black/10 rounded-xl'></div>
            <div className='h-40 w-80 bg-black/10 rounded-xl'></div>
            <div className='h-40 w-80 bg-black/10 rounded-xl'></div>
            <div className='h-40 w-80 bg-black/10 rounded-xl'></div>
        </div>
    </div>
  )
}

export default Hero