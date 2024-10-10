import React from 'react'

const LatelyCards = () => {
  return (
    <div className="">
    <div className="w-full h-70 rounded-lg mb-5 ">
        <div className='relative'>
        <img className="rounded-lg w-full h-[16rem] sm:h-[27rem] md:h-[27rem] object-cover" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
        <div className='absolute bottom-2 left-2'>
            
<img className="w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"/>

        </div>
        </div>
        <div className="p-2">
            <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            
        </div>
    </div>
   
</div>
  )
}

export default LatelyCards