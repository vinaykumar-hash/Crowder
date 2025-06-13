import React from 'react'
import { useNavigate } from 'react-router-dom'
const Review = ({ formData }) => {
    const navigator = useNavigate();
    function handleSubmit(){
        // let formData = JSON.parse(localStorage.getItem('register'));
        const payload = new FormData();

        payload.append('email', formData.email);
        payload.append('name', formData.PreviewName);
        payload.append('founder_name', formData.FounderName);
        payload.append('startup_description', formData.Description);
        payload.append('intro_video', formData.Intro);
        payload.append('website', formData.Website);
        payload.append('pitch_deck', formData.Pitch);
        payload.append('funded',0);
        setForm(payload);
    }
    async function setForm(payload){
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKENDURL}register`, {
            method: 'POST',
            body: payload,
            });

            const data = await response.json();
            console.log('Success:', data);
            alert("Applicaton Successfully submitted, You will be redirected to Homepage")
            navigator('/');
        } catch (error) {
            console.error('Error:', error);
        }
    }
  return (
    <div style={{backdropFilter:"blur(10px)"}} className='absolute top-0 w-screen h-screen bg-black/50 flex justify-center items-center'>
        <div className='h-9/12 w-9/12 bg-white rounded-xl flex justify-center items-center'>
            <button className='fustat text-2xl font-bold tracking-tight bg-green-900 text-white py-2 px-4 rounded-xl' onClick={()=>handleSubmit()}>Submit</button>
        </div>
    </div>
  )
}

export default Review