import React from 'react';
import Typed from 'react-typed';

function Hero() {
  return (
      <div className="text-white">
        <div className="max-w-[800px] mt-[-95px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-green-400 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                    fast, flexible financing for
                </p>
                <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]' 
                    strings={['BTB', 'BTC', 'SASS']} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop 
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>
                Get Started
            </button>
        </div>
      </div>
  )
}

export default Hero
