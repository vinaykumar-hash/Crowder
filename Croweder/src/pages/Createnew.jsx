import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
const Createnew = () => {
    const navigator = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(()=>{
        if(!user){
            navigator('/signup')
        }
    },[])
  return (
    <div>
        <Header/>
    </div>
  )
}

export default Createnew