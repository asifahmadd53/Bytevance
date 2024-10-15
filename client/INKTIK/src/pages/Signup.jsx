import React, { useContext, useState } from 'react';
import { logo3, signupImg } from '../assets'; 
import axios from 'axios';
import { userContext } from '../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserInfo } = useContext(userContext);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/user/signup', {
        fullname,
        email,
        password
      }, {
        withCredentials: true
      });

      setUserInfo(response.data);
      toast.success('Account Created Successfully');
      navigate('/');
    } catch (err) {
      console.log('error', err);
      toast.error('Sign up Failed!');
    }
  };

  return (
    <div className='h-screen w-full'>
      <div className='flex w-full h-full relative'>
        {/* Left Section with Image */}
        <div className="left md:w-[30%] hidden md:block h-full">
          <img src={signupImg} className='object-cover h-full' alt="Signup Background" />
        </div>
        
        <div className="right flex items-center flex-col justify-center w-full h-screen m-2 relative">
          <div className='flex items-start sm:justify-center sm:items-center w-full mb-8 ml-4 sm:ml-0'>
            <div className='w-44'>
              <img className='relative' src={logo3} alt="Logo" />
            </div>
          </div>
          
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-start justify-center w-full max-w-lg p-2 h-[30rem]'>
              <h1 className='text-4xl sm:text-5xl font-bold mb-10'>Create Account</h1>
              <form onSubmit={signup} className='flex flex-col items-start justify-center w-full'>
                <input 
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)} // Corrected
                  type="text" 
                  placeholder="Your fullname" 
                  className='p-5 w-full border outline-none rounded-[2.2rem] bg-gray-200 text-sm mb-5'
                />
                <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Corrected
                  type="email" 
                  placeholder="Your email address" 
                  className='p-5 w-full border outline-none rounded-[2.2rem] bg-gray-200 text-sm mb-5'
                />
                <input 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Corrected
                  type="password" 
                  placeholder="Password" 
                  className='p-5 w-full border outline-none rounded-[2.2rem] bg-gray-200 text-sm mb-3'
                />
                <button className='bg-[#000] text-white py-4 rounded-[2.2rem] mt-4 px-8 hover:bg-[#314bff] transition-all duration-500'>
                  Continue
                </button>
              </form>
              <p className='pt-4'>Already have an account? <span className='underline'><Link to={'/login'}>Sign in</Link></span></p>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Signup;
