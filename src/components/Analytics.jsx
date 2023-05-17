import React from 'react'
import laptop from "../assets/laptop.jpg"

export const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='about'>
    <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem minus, sed at
               est, asperiores magni sunt aliquid commodi inventore ipsum saepe accusantium 
               quibusdam molestiae aspernatur temporibus, quae perferendis soluta!</p>
               <button  className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto p-3 text-[#00df9a]'>Get Started</button>
        </div>
      
    </div>
    </div>
  )
}
export default Analytics
