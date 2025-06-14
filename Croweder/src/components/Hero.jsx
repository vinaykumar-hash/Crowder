import React from 'react'
import Heromain from './Heromain'
import SmallHero from './Smallhero'
const Hero = () => {
  return (
    <div className='w-full h-lvh flex justify-start items-center flex-col gap-4'>
        <div className='w-full' style={{backgroundColor:"#537D5D"}}></div>
        <div className=' bg-black/0' style={{height:"80%",width:"100%"}}>
          <Heromain/>
        </div>
        <p className='fustat text-2xl '>Our Favourate's</p>
        <div className='flex justify-start items-center gap-4'>
            <div className='h-40 w-80 bg-black/0 rounded-xl'>
              <SmallHero videoIndex={1} />
            </div>
            <div className='h-40 w-80 bg-black/0 rounded-xl'><SmallHero videoIndex={2} /></div>
            <div className='h-40 w-80 bg-black/0 rounded-xl'><SmallHero videoIndex={3} /></div>
            <div className='h-40 w-80 bg-black/0 rounded-xl'><SmallHero videoIndex={4} /></div>
        </div>
    </div>
  )
}

export default Hero