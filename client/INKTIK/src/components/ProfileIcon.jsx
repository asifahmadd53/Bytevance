import React, { useContext, useEffect, useRef, useState } from 'react';
import { profileicon } from '../assets';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { userContext } from '../contexts/UserContext';

const ProfileIcon = () => {
  const dropdownRef = useRef(null); 
  const avatarButtonRef = useRef(null); 

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    // Check if click is outside the dropdown and avatar button
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      avatarButtonRef.current && !avatarButtonRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

//   const [userInfo, setIsLogin] = useState(false)

  const {userInfo, setUserInfo}  = useContext(userContext)
  const logout =async ()=>{
    try {
        const response = await axios.post('http://localhost:4000/user/logout',{}, {
            withCredentials: true,
        });
        if (response.status === 200) {
            
            console.log("Logout successful:", response.data);
            setUserInfo(false);
        }
    } catch (error) {
        console.error('Error logging out:', error);
    }
  }


  return (
    <div className="relative">
    
      <img
        id="avatarButton"
        onClick={toggleDropdown}
        ref={avatarButtonRef} 
        className="w-10 h-10 rounded-full cursor-pointer"
        src={profileicon} 
        alt="User dropdown"
      />

      
      {isDropdownOpen && (
        <div
          ref={dropdownRef} 
          id="userDropdown"
          className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <div className="px-4 py-3 text-sm text-gray-900">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link to={'create-blog'} className="block px-4 py-2 hover:bg-gray-100">Create Blog</Link>
            </li>
          </ul>
          <div className="py-1">
            <button onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
