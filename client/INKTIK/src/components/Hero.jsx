import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Stories from './Stories';

const Hero = () => {
  return (
    <>
    <Header/>
    <SideMenu/>
    
   
    <div className='h-auto w-full'>
      <div className='pt-8 px-5'>
        <h1 className='text-4xl sm:text-5xl md:text-7xl '>
          <span className='font-bold'>
            Hey, we're InkTiq<span className='text-2xl'>●</span>
          </span>
          <br className='md:hidden' /> See our thoughts, stories and ideas.
        </h1>
        <form className="mt-10 md:mx-0 max-w-md  rounded-full bg-gray-200 border flex focus-within:border-gray-300 md:w-max-[50%]">
          <input 
            type="text"
            placeholder="Your email address"
            className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 text-sm md:text-lg focus:ring-0 px-6 py-3"
            name="topic"
          />
          <button
            className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5  md:h-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <Stories/>
    </>
  );
};

export default Hero;
