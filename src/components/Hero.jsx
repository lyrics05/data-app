import React from 'react'
import Typed from 'react-typed';

const Hero= () => {
  return (
    <div className='text-white' id='home'>
       <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a]  font-bold p-2 '>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold p-2 md:py-6'>Grow With Data</h1>
            <div className='flex justify-center items-center'>
                <p className='text-xl sm:text-4xl md:text-5xl font-bold'>fast, flexible, financing for </p>
                <Typed 
                className='text-xl sm:text-4xl md:text-5xl font-bold pl-2'
                strings={["BTB","BTC","SASS"]} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='text-xl md:text-2xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto p-3'>Get Started</button>
       </div>
    </div>
  )
}

export default Hero
