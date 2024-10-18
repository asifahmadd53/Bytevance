import { useContext, useEffect, useState } from 'react';
import { loginImg, logo3 } from '../assets';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../contexts/UserContext';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {userInfo, setUserInfo} = useContext(userContext)
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('http://localhost:4000/user/login', {
        email,
        password
      },{
        withCredentials:true
      });
  
      setUserInfo(response.data);
      toast.success('Login successful!');
      
      setEmail('')
      setPassword('')

      if (response.data.role === 'admin') {
        navigate('/admin-panel');
      } else {
        navigate('/');
      }
  
    } catch (error) {
      console.error("Login failed", error); 
      toast.error('Login failed!!');
    }
  };
  

  
  
  return (
    
    <div className='h-screen w-full overflow-hidden'>
    <div className='flex w-full h-full relative'>
      {/* Left Section with Image */}
      <div className="left md:w-[30%] hidden md:block h-full">
        <img src={loginImg} className='object-cover h-full' alt="Signup Background" />
      </div>
      
      {/* Right Section with Form */}
      <div className="right flex items-center flex-col justify-center w-full h-screen m-2 relative ">
        <div className='flex items-start sm:justify-center sm:items-center w-full mb-2 ml-4 sm:ml-0'> {/* Flex container for left-alignment */}
          <div className='w-44'>
            <img className='relative' src={logo3} alt="Logo" />
          </div>
        </div>
        
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='flex flex-col items-start justify-center w-full max-w-lg  p-2 h-[30rem]'>
            <h1 className='text-4xl sm:text-5xl font-bold mb-10'>Welcome back!</h1>
            <form onSubmit={login} className='flex flex-col items-start justify-center w-full'>
              <input 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
                type="text" 
                placeholder="Your email address" 
                className='p-5 w-full border outline-none rounded-[2.2rem] bg-gray-200 text-sm px-4 mb-5'
              />
              <input 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              
                type="password" 
                placeholder="Password" 
                className='p-5 w-full border outline-none rounded-[2.2rem] bg-gray-200 text-sm px-4 mb-3'
              />
             
              <button className='bg-[#000] text-white py-2 rounded-[2.2rem]  mt-4 px-5'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
