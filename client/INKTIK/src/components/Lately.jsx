import React from 'react'
import LatelyCards from './LatelyCards'

const Lately = () => {
  return (
    <div className='w-full'>
        <hr className='w-[90%] m-auto border-t border-[#363535d8]' />
       
       <div className='flex items-center justify-between p-4 px-8'>
       <h1 className='text-2xl'>See what we’ve
            <hr className='border-none'/>
       <span className='text-4xl font-bold'> written lately</span></h1>
       <div className="flex items-center -space-x-4">
    <img
      alt="user 1"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
      className="relative inline-block h-12 w-12 !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10"
    />
    <img
      alt="user 2"
      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
      className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
    />
    <img
      alt="user 3"
      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1288&amp;q=80"
      className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
    />
    <img
      alt="user 4"
      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80"
      className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
    />
    <img
      alt="user 5"
      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1760&amp;q=80"
      className="relative inline-block h-12 w-12 !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
    />
  </div>

       </div>

   <div className='grid w-full grid-cols-2 md:grid-cols-3  overflow-hidden gap-4 px-6'>
   <LatelyCards/>
    <LatelyCards/>
    <LatelyCards/>
    
   </div>
      

     

    </div>
  )
}

export default Lately