import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header1 = () => {
    const navigor = useNavigate()
    
  return (
    <div className='w-full h-10'>
        <ul className='flex text-black justify-center items-center fustat text-xl gap-4 cursor-pointer '>
            <li className='hover:underline transition-all underline-offset-2'>Art</li>
            <li className='hover:underline transition-all underline-offset-2'>Design</li>
            <li className='hover:underline transition-all underline-offset-2'>Fasion</li>
            <li className='hover:underline transition-all underline-offset-2'>Film</li>
            <li className='hover:underline transition-all underline-offset-2'>Music</li>
            <li className='hover:underline transition-all underline-offset-2'>Photography</li>
            <li className='hover:underline transition-all underline-offset-2'>Technology</li>
            <li>|</li>
            <li onClick={()=>{navigor('/create')}} className='base font-bold'>List Your Idea 🌱</li>
        </ul>
    </div>
  )
}

export default Header1