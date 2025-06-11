import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState , useEffect} from 'react';
const Signupbutton = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [currentState, setState] = useState('Signup')
    useEffect(()=>{
        // const user = JSON.parse(localStorage.getItem('user'));
            if(user){
                setState(user?.name);
            }
    },[])
    
    const navigator = useNavigate();
    function handleSignup(){
        navigator("/signup")
    }
  return (
    <div>{user ? 
        (
            <div className='fustat text-xl  bg-green-950 h-10 w-10 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-green-950/80 transition-all' onClick={()=>handleSignup()} >{currentState[0]}</div>
        )
         : 
        (<button onClick={()=>handleSignup()} className='fustat text-2xl hover:text-green-950 cursor-pointer'>{currentState}</button>)}</div>
    
  )
}

export default Signupbutton