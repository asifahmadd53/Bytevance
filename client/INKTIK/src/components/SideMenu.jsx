import React, { useContext, useEffect, useRef, useState } from 'react'
import { navLinks } from '../constants'
import { MenuContext } from '../contexts/MenuContext'
import { Link } from 'react-router-dom'
import ProfileIcon from './ProfileIcon'
import axios from 'axios'
import { userContext } from '../contexts/UserContext'

const SideMenu = () => {

    const { menu, setMenu, clickOnMenu } = useContext(MenuContext);    

    const {userInfo, setUserInfo} = useContext(userContext)



    const menuRef = useRef(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://bytvance-backend.vercel.app/user/profile', {
                    withCredentials: true
                });
                setUserInfo(response.data);
            } catch (err) {
                console.error('Error fetching user profile:', err);
                setUserInfo(false); 
            }
        };

        fetchUserData();
    }, []);

    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if(menuRef.current && !menuRef.current.contains(event.target)){
                clickOnMenu()
            }
        }
        if (menu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
        

    },[menu,clickOnMenu])
   


  return (
    <div ref={menuRef} className={`bg-[#000000] fixed w-80 h-[100vh]  top-0 left-0 transition-all duration-700 p-5 z-50 ${menu ? 'translate-x-0 ' : '-translate-x-full'}`}>
        <nav>
            <div className='flex items-center justify-between'>
            <Link to={'/'}>
            <h1 onClick={()=> clickOnMenu(!setMenu)} className='text-3xl item-center text-white logo cursor-pointer'>Bytevance</h1>
            </Link>
            <svg onClick={()=>clickOnMenu(!setMenu)} className='w-10' xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 21 21"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" d="m15.5 15.5l-10-10zm0-10l-10 10"/></svg>
            </div>
           
        <div>
            
            <ul className='flex flex-col items-center text-4xl pt-20 gap-6 text-white'>
            
               {navLinks.map((item, index  )=>{
                return(
                    <Link to={`${item.id}`} key={index}>
                    <li onClick={()=>clickOnMenu(!setMenu)} className='flex items-center gap-1 hover:underline hover:translate-x-2 transition-all duration-500'>
                    <span className='w-8 h-8'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" clip-rule="evenodd"/></svg></span>{item.name}
                </li>
                    </Link>
                )
               })}
                <button className='bg-white text-black px-6 py-2 text-center rounded-[5rem]'>
                    <Link to={'/signup'}>Join</Link>
                </button>
                {/* {userInfo && <ProfileIcon/>} */}
                <p className='text-sm'>Already have an account? <Link to={'/login'} className='underline'>Login</Link></p>
            </ul>
            
        </div>
        </nav>
    </div>
  )
}

export default SideMenu