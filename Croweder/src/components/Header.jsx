import React from 'react'
import Signupbutton from './Signupbutton'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigator = useNavigate()
  return (
    <div className='relative flex justify-center items-center py-4'>
        <div className='cursor-pointer' onClick={()=>{navigator('/')}}><img className='flex-1 text-center h-20' src="/Logo.svg" alt="" /></div>
        
        <div className='absolute right-20 flex gap-8'>
            <div className='py-2 px-4 bg-gray-100 rounded-xl text-start min-w-80'>
                <input className='fustat text-xl outline-none' type="text" placeholder='Search'/>
            </div>
            <Signupbutton/>
        </div>
        
    </div>
  )
}

export default Header