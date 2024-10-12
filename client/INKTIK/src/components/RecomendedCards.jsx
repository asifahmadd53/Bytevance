import React from 'react'
import Footer from './Footer'

const RecomendedCards = () => {
  return (
    <div className="">
    <div className={`w-full lg:w-52 rounded-lg mb-5 `}>
        <div className='relative'>
        <img className="rounded-xl w-full h-[12rem] md:h-[16rem]  object-cover" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
        <div className='absolute bottom-2 left-2'>
            
<img className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"/>

        </div>
        </div>
        <div className="">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-lg tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
            </a>
            
            
        </div>
    </div>
   
   

</div>
  )
}

export default RecomendedCards