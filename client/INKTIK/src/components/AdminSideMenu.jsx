import React, { useContext, useState } from 'react'
import { AdminSideMenuContext } from '../contexts/AdminSideMenuContext'
import { Link, useNavigate } from 'react-router-dom'
import { logo, logo3 } from '../assets'
import axios from 'axios'
import toast from 'react-hot-toast'

const AdminSideMenu = () => {

    const {open, setOpen} = useContext(AdminSideMenuContext)
    const [adminInfo, setAdminInfo] = useState(false)
    const navigate = useNavigate();
    const logout =async ()=>{
        try {
            const response = await axios.post('http://localhost:5000/admin/logout',{}, {
                withCredentials: true,
            });
            if (response.status === 200) {
                
                toast.success('Logout successful');
                setAdminInfo(false);
                navigate('/');
            }
        } catch (error) {
            toast.error('Failed to logout');
        }
      }

  return (
    <div
                className={`fixed top-0 left-0 bg-shadow-2xl w-80 md:w-[25rem] h-screen overflow-y-auto transform transition-all duration-700 bg-gray-600 z-20 pt-20
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                }
            `}>
                <div className='flex items-center justify-between p-3 px-6 '>
                    <div className='relative flex items-center gap-2'>
                        
                            <img src={logo3} className='w-32 mix-blend-color-burn z-30 '  alt="Logo" />
                        
                        
                    </div>
                    <div onClick={()=> setOpen((prev)=> !prev)} className='rounded-full h-11 w-11 items-center flex justify-center'>
                        <svg className='w-8 h-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="none" stroke="white" strokeLinecap="round" d="m6 6l12 12m0-12L6 18"/>
                        </svg>
                    </div>
                </div>
                

                <div className="relative p-3 rounded-lg w-full max-w-lg">
                

                  
                </div>
                <hr className="w-[90%] m-auto border-t border-neutral-700 outline-none mt-3" />

                <ul className='flex md:hidden gap-4 flex-col items-start px-6 text-black'>
                    
                </ul>

                <h1 className='text-black text-center text-xl p-4 font-bold'>Admin Dashboard</h1>
                <ul className='text-3xl text-black text-center py-8'>
                <li className="pb-2 relative transition-all ease-linear duration-700 hover:underline after:bg-black cursor-pointer">
                <Link onClick={()=> setOpen((prev)=> !prev)} to={'/admin-panel/blogs-by-admin'}>
                Create Blogs

                </Link>
                </li>

                    <li className="pb-5 relative transition-all ease-linear duration-1000 hover:underline  after:bg-black cursor-pointer">
                        <Link onClick={()=> setOpen((prev)=> !prev)} to='/admin-panel/pending-blogs'>
                        Pending Blogs
                        </Link>
                        </li>
                    <li className="pb-5 relative transition-all ease-linear duration-1000 hover:underline  after:bg-black cursor-pointer">
                        <Link onClick={()=> setOpen((prev)=> !prev)} to='/admin-panel/approved-blogs'>
                        Approved Blogs
                        </Link>
                        </li>
                    <li>

                    <button
                        onClick={logout}
                        className="rounded-md bg-slate-900 py-2 px-6 text-white transition hover:bg-slate-700 focus:outline-none focus:bg-slate-700 shadow-md hover:shadow-lg"
                        type="button"
                    >
                        Sign out
                    </button>
                    </li>
                </ul>
            </div>
  )
}

export default AdminSideMenu