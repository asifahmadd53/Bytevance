import React, { useContext, useState } from 'react';
import { blogimg, loginImg, logo3, signupimg, } from '../assets'; 
import axios from 'axios';
import { userContext } from '../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserInfo } = useContext(userContext);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://bytvance-backend.vercel.app/user/signup', {
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
      toast.error("Sign-up unsuccessful.");
    }
  };

  return (
    <div className='h-screen w-full overflow-hidden'>
      <div className='flex w-full h-full relative'>
        {/* Left Section with Image */}
        <div className="left md:w-[28%] hidden md:block h-full">
          
          <img src={blogimg} className='object-cover h-full' alt="Signup Background" />
        </div>
        <div className="right flex items-center flex-col justify-center w-full h-screen m-2 relative">
          <div className='flex items-start sm:justify-center sm:items-center w-full'>
            <div className='w-32 xs:w-36 sm:w-44 ml-3 '>
              <img className='relative ' src={logo3} alt="Logo" />
            </div>
          </div>
          
          <div className='w-full flex flex-col items-center justify-center mt-4'>
            <div className='flex flex-col items-start justify-center w-full max-w-lg p-2 h-[30rem]'>
              <h1 className='text-3xl xs:text-4xl sm:text-5xl font-bold mb-10'>Create Account</h1>
              <form onSubmit={signup} className='flex flex-col items-start justify-center w-full'>
                <input 
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)} // Corrected
                  type="text" 
                  placeholder="Your fullname" 
                  className='p-3 sm:p-4 w-[90%] sm:w-full text-lg border outline-none rounded-[2.2rem] bg-[#EFEEF0] mb-5'
                />
                <input 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Corrected
                  type="email" 
                  placeholder="Your email address" 
                  className='p-3 sm:p-4 w-[90%] sm:w-full bg-[#EFEEF0] text-lg border outline-none rounded-[2.2rem] mb-5'
                />
                <input 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Corrected
                  type="password" 
                  placeholder="Password" 
                  className='p-3 sm:p-4 w-[90%] sm:w-full border outline-none rounded-[2.2rem] bg-[#EFEEF0] text-lg mb-3'
                />
                <button className='bg-[#000] text-white py-3 rounded-[2.2rem] mt-4 px-6 hover:bg-[#314bff] transition-all duration-500 text-xl'>
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
