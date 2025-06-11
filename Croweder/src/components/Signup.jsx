import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google'
const Signup = () => {
    const navigator = useNavigate()
    function handle_logout(){
        googleLogout();
        localStorage.removeItem('user')
        navigator('/');
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-4'>
        <GoogleLogin onSuccess={(credentialResponse)=>{
            console.log(jwtDecode(credentialResponse.credential));
            localStorage.setItem('user',JSON.stringify(jwtDecode(credentialResponse.credential)));
            navigator('/');
        }} onError={(err)=>{
            console.log(err)
        }}/>
        <button onClick={()=>handle_logout()} className='bg-red-500 text-2xl py-2 px-4 font-semibold rounded-lg text-white fustat'>Logout</button>
    </div>
  )
}

export default Signup