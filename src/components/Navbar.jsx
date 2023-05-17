import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from 'react'

const Navbar = () => {
    const[nav, setNav]= useState(false)
    function handleNav(){
        setNav(!nav)
        console.log(nav)
    }
  return (
    <div className='flex justify-between  items-center h-24 m-w-[1240px] mx-auto px-4 text-white'>
        <h1  className=' text-3xl font-bold text-[#00df9a]'>React.</h1>
         <ul className='hidden md:flex'>
            <a href="#home"> <li className='p-4'>Home</li></a>
            <a href="#subscribe"> <li className='p-4'>Subscribe</li></a>
            <a href="#about"> <li className='p-4'>About</li></a>
            <a href="#plans"> <li className='p-4'>Plans</li></a>
         </ul>
         <div onClick={handleNav} className='block md:hidden'>
            {nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
         </div>
         <ul  className={nav? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':"fixed left-[100%]"}>
            <h1  className=' text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
         </ul>
    </div>
  )
}

export default Navbar