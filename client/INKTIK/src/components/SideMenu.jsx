import React, { useContext, useEffect, useState } from 'react'
import { navLinks } from '../constants'
import { MenuContext } from '../contexts/MenuContext'
import { Link } from 'react-router-dom'
import ProfileIcon from './ProfileIcon'
import axios from 'axios'
import { userContext } from '../contexts/UserContext'

const SideMenu = () => {

    const { menu } = useContext(MenuContext);    

    const {userInfo, setUserInfo} = useContext(userContext)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/user/profile', {
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


  return (
    <div className={`bg-[#000000] fixed w-80 h-[100vh]  top-0 left-0 transition-all duration-700 p-5 z-50 ${menu ? 'translate-x-0 ' : '-translate-x-full'}`}>
        <nav>
           <h1 className='text-3xl item-center text-white'>Bytevance</h1>
        <div>
            
            <ul className='flex flex-col items-center text-4xl pt-20 gap-6 text-white'>
            
               {navLinks.map((item, index  )=>{
                return(
                    <li key={index} className='flex items-center gap-1'>
                    <span className='w-8 h-8'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" fill-rule="evenodd" d="M9 6.75a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V7.81L6.53 18.53a.75.75 0 0 1-1.06-1.06L16.19 6.75z" clip-rule="evenodd"/></svg></span>{item.name}
                </li>
                )
               })}
                <button className='bg-white text-black px-6 py-2 text-center rounded-[5rem]'>
                    <Link to={'/signup'}>Join</Link>
                </button>
                {userInfo && <ProfileIcon/>}
                <p className='text-sm'>Already have an account? <Link to={'/login'} className='underline'>Login</Link></p>
            </ul>
            
        </div>
        </nav>
    </div>
  )
}

export default SideMenu