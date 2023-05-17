import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white' id="subscribe">
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 md:grid-cols-2  justify-center items-center'>
            <div className='lg:col-span-2'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>sign up to our news letter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='enter your email' />
                    <button  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto p-3 text-white ml-5'>Notify me</button>
                </div>
                <p>we care bout the protection of your data. Read our <span className='text-[#00df9a]'>privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter