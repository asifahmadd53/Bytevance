import React, { useContext } from 'react'
import { AdminSideMenuContext } from '../contexts/AdminSideMenuContext'
import AdminSideMenu from './AdminSideMenu'


const AdminHeader = () => {
    const {setOpen} = useContext(AdminSideMenuContext)
  return (
    <div className='w-full  pt-4 '>
        <AdminSideMenu/>
   <div className='flex items-center justify-between px-6'>
   <div onClick={()=> setOpen((prev) => !prev)} className='w-10 h-10 '>
   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12"/></svg>
   </div>
   <h1 className='text-2xl'>
       WELCOME ASIF 
       
    </h1>
    <div className='bg-red-500 w-10 h-10'>
        <img src="" alt="" />
    </div>
   </div>
   
    </div>
  )
}

export default AdminHeader