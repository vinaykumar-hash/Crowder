import React from 'react'

const InputComponent = () => {
  return (
    <div className='w-screen flex justify-start items-center px-40 py-10 flex-col gap-4'>
        <div className='relative flex w-full'>
            <h2 className='fustat text-4xl font-bold tracking-tight base_black w-full'>Let's get your idea a <span className='bg-yellow-300 pr-2 pt-2 pl-1'>place</span></h2>
        </div>
        <div className='flex justify-start items-center w-full pt-4'>
            <div className='fustat w-full flex justify-start items-center gap-2'>
                <p className='font-semibold text-xl'>Name <span className='text-red-400'>*</span> :</p>
                <input type="text" placeholder='Enter name of your Idea/Startup/Project' className='text-xl px-4 py-2 outline-none rounded-xl underline underline-offset-4 flex-1' />
        </div>
        <div className='fustat w-full flex justify-start items-center gap-2'>
            <p className='font-semibold text-xl'>Email <span className='text-red-400'>*</span> :</p>
            <input type="text" placeholder='Enter email' className='text-xl px-4 py-2 outline-none rounded-xl underline underline-offset-4 flex-1' />
        </div>
        <div className='fustat w-full flex justify-start items-center gap-2 opacity-0'>
            <p className='font-semibold text-xl'>Email <span className='text-red-400'>*</span> :</p>
            <input type="text" placeholder='Enter email' className='text-xl px-4 py-2 outline-none rounded-xl underline underline-offset-4 flex-1' />
        </div>
        </div>
        <div className='flex justify-start items-center w-full pt-4'>
            <div className='fustat w-full flex justify-start items-center gap-2'>
                <p className='font-semibold text-xl'>Founder's Name <span className='text-red-400'>*</span> :</p>
                <input type="text" placeholder='Enter name of the Founder' className='text-xl px-4 py-2 outline-none rounded-xl underline underline-offset-4 flex-1' />
        </div>
        <div className='fustat w-full flex justify-start items-center gap-2'>
            <p className='font-semibold text-xl'>Website 'optional' :</p>
            <input type="text" placeholder='https://wwww.com' className='text-xl px-4 py-2 outline-none rounded-xl underline underline-offset-4 flex-1' />
        </div>
        <div className='fustat w-full flex justify-start items-center gap-2'>
            <p className='font-semibold text-xl'>Intro Video <span className='text-red-400'>*</span> :</p>
            <input type="text" placeholder='Drive Link' className='text-xl px-4 py-2 outline-none rounded-xl underline underline-offset-4 flex-1' />
        </div>
        </div>
        <div className='flex justify-start items-center w-full pt-4'>
        <div className='fustat w-full flex justify-center items-start gap-2 flex-col'>
            <textarea name="Description" id="" placeholder='Describe your Idea/Startup/Project' className='text-xl px-4 py-2 bg-gray-100 w-full min-h-40 outline-none rounded-xl flex-1'></textarea>
        </div>
        </div>
        <div className='fustat w-full flex justify-start items-center gap-2'>
            <p className='font-semibold text-xl'>Pitch Deck <span className='text-red-400'>*</span> :</p>
            <input type="file" placeholder='Drive Link' accept='.pdf' className='file:bg-yellow-300 text-xl px-4 py-2 outline-none rounded-xl underline underline-offset-4 flex-1' />
        </div>
        <button className='fustat py-2 px-4 font-semibold text-xl tracking-tight bg-black rounded-xl text-white'>Review</button>
    </div>
  )
}

export default InputComponent