import React, { useContext } from 'react'
import { AdminSideMenuContext } from '../contexts/AdminSideMenuContext'
import AdminSideMenu from './AdminSideMenu'
import { admin } from '../assets'


const AdminHeader = () => {
    const {setOpen} = useContext(AdminSideMenuContext)
    
  return (
    <div className='w-full '>
        <AdminSideMenu/>
 <nav className='z-50 inline-block fixed bg-white border  w-full py-2'>
 <div className='flex items-center justify-between px-6 '>
   <div onClick={()=> setOpen((prev) => !prev)} className='w-10 h-10 '>
   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h12M6 12h12M6 16h12"/></svg>
   </div>
   
    <div className=' w-10 h-10 '>
        <img className='h-full w-full object-cover object-top rounded-full' src={admin} alt="" />
    </div >
   </div>
 </nav>
 
    </div>
  )
}

export default AdminHeader