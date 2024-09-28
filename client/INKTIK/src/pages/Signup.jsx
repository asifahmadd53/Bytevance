import React, { useState } from 'react';
import { signupImg } from '../assets'; 
// Removed signupImg since it's not used
import axios from 'axios'

const Login = () => {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signup = async (e)=>{
      e.preventDefault()
      try{
        const response = await axios.post('http://localhost:4000/user/signup', {
          fullname,
          email,
          password
      });
         console.log(response.data)
      }
      catch(err){
        console.log('error', err)
      }
    }


  return (
    <div className='h-screen w-full'>
      <div className='flex w-full h-full relative'>
        {/* Left Section with Image */}
        <div className="left w-[20%] hidden md:block h-full">
          <img src={signupImg} className='object-cover h-full' alt="Login Background" />
        </div>
        {/* Right Section with Form */}
        <div className="right md:w-[80%] flex items-center justify-center w-full m-2 relative">
          <h1 className='absolute left-36 top-6 text-4xl sm:text-5xl md:text-6xl text-left font-bold mb-5'>
            InkTiq
          </h1>
          <div className='flex flex-col items-start w-full max-w-md relative'>
            <form 
            onSubmit={signup} 
            action=''
            className='flex flex-col items-start justify-center mt-20 w-full'> 
              <h1 className='text-4xl sm:text-5xl font-bold mb-8'>Welcome back!</h1>
              <button
    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mb-5">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-0.5 0 48 48" version="1.1">

        <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Color-" transform="translate(-401.000000, -860.000000)">
                <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1" fill="#FBBC05"> </path>
                    <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2" fill="#EB4335"> </path>
                    <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3" fill="#34A853"> </path>
                    <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4" fill="#4285F4"> </path>
                </g>
            </g>
        </g>
    </svg>
    <span>Continue with Google</span>
</button>

              <input 
              value={fullname}
              onChange={(e)=> setFullname(e.target.value)}
                type="text" 
                placeholder="Full name" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-200 text-sm px-4 mb-3'
              />
              <input 
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
                type="text" 
                placeholder="Your email address" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-200 text-sm px-4 mb-3'
              />
              <input 
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
                type="password" // Changed type to "password" for the password field
                placeholder="Password" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-200 text-sm px-4 mb-3'
              />
              <button type='submit' className='bg-[#000] text-white py-2 rounded-3xl mt-4 px-5'>
                Create 
              </button>
              <p className='text-sm md:text-lg mt-7'>Login?</p>

             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
