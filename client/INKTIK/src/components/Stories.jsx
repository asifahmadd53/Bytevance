import React from 'react'
import Story from './Story'

const Stories = () => {
  return (
    <div className='h-screen w-full mt-28'>
        
        <hr className='w-[90%] m-auto border-t border-[#363535d8]' />
        <div className='flex justify-end px-10 pt-10 gap-3'>
            <div className='w-6'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 12h-15m0 0l5.625-6M4.5 12l5.625 6"/></svg>
            </div>
            <div className='w-6'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>
            </div>
        </div>
        <Story/>
    </div>
  )
}

export default Stories