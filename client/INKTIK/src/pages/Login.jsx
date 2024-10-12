import { useContext, useEffect, useState } from 'react';
import { loginImg } from '../assets';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../contexts/UserContext';
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
      }
    );
      
      setUserInfo(response.data)

       if (response.data.role === 'admin') {
            navigate('/admin-panel');
        } else {
            navigate('/');
        }
      
    } catch (error) {
      console.error("Login failed", error); 
    }
  };

  return (
    <div className='h-screen w-full'>
      <div className='flex w-full h-full relative'>
        {/* Left Section with Image */}
        <div className="left w-[20%] hidden md:block h-full">
          <img src={loginImg} className='object-cover h-full' alt="Signup Background" />
        </div>
        {/* Right Section with Form */}
        <div className="right md:w-[80%] flex items-center justify-center w-full m-2  relative">
        <h1 className='absolute left-36 top-6 text-4xl sm:text-5xl md:text-6xl text-left font-bold mb-5'>
              Bytevance
            </h1>
          <div className='flex flex-col items-start w-full max-w-md relative'>
            {/* Logo placed at the top */}
            

            <form onSubmit={login} className='flex flex-col items-start justify-center mt-20 w-full'>
              <h1 className='text-4xl sm:text-5xl font-bold mb-8'>Welcome back!</h1>
              <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="text" 
                placeholder="Your email address" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-300 text-sm px-4 mb-3'
              />
              <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                type="text" 
                placeholder="Password" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-300 text-sm px-4 mb-3'
              />
              <button className='bg-[#000] text-white py-2 rounded-3xl mt-4 px-5'>
                Login
              </button>
              <p className='text-sm md:text-lg mt-7'>fdxgfsg</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
