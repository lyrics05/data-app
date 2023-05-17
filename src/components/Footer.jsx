import React from 'react'
import{
    FiGithub,
    FiLinkedin,
} from "react-icons/fi"

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3  gap-8 text-gray-300'>
       <div>
         <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT.</h1>
         <p className='py-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
          id doloremque. Expedita officiis aperiam molestias nulla quo ea fugiat nemo!</p>
          <div className='flex justify-between md:w-[75%] my-6'>
           <a href="https://github.com/lyrics05" rel="noreferrer" target='_blank'>
           <FiGithub size={30}/>
           </a>
           <a href="https://www.linkedin.com/in/isidro-rivera-bab6971a5/" rel="noreferrer" target='_blank'>
           <FiLinkedin size={30}/>
           </a>
          </div>
       </div>
       <div className='lg:col-span-2 flex justify-between'>
          <div>
           <h6 className='font-medium text-gray-400 '>Solutions</h6>
           <ul>
             <li className='py-2 text-sm'>Analytics</li>
             <li className='py-2 text-sm'>Marketing</li>
             <li className='py-2 text-sm'>Commerce</li>
             <li className='py-2 text-sm'>Insigths</li>
           </ul>
        
       </div>

       <div >
           <h6 className='font-medium text-gray-400 '>Support</h6>
           <ul>
             <li className='py-2 text-sm'>Pricing</li>
             <li className='py-2 text-sm'>Documentation</li>
             <li className='py-2 text-sm'>Guides</li>
             <li className='py-2 text-sm'>Api Status</li>
           </ul>
        
       </div>

       <div >
           <h6 className='font-medium text-gray-400 '>Company</h6>
           <ul>
             <li className='py-2 text-sm'>About</li>
             <li className='py-2 text-sm'>Blog</li>
             <li className='py-2 text-sm'>Jobs</li>
             <li className='py-2 text-sm'>Press</li>
             <li className='py-2 text-sm'>Carrers</li>
           </ul>
        
       </div>

       <div >
           <h6 className='font-medium text-gray-400 '>Legals</h6>
           <ul>
             <li className='py-2 text-sm'>Claim</li>
             <li className='py-2 text-sm'>Policy</li>
             <li className='py-2 text-sm'>Terms</li>
           </ul>
        
       </div>
      </div>
    </div>
  )
}

export default Footer