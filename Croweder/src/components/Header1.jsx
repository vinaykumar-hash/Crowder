import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header1 = () => {
    const navigor = useNavigate()
    
  return (
    <div className='w-full h-10'>
        <ul className='flex text-black justify-center items-center fustat text-xl gap-4 cursor-pointer'>
            <li>Art</li>
            <li>Design</li>
            <li>Fasion</li>
            <li>Film</li>
            <li>Music</li>
            <li>Photography</li>
            <li>Technology</li>
            <li>|</li>
            <li onClick={()=>{navigor('/create')}} className='base font-bold'>List Your Idea 🌱</li>
        </ul>
    </div>
  )
}

export default Header1