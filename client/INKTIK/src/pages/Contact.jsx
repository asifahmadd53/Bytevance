import { useState } from 'react';
import { loginImg, logo3 } from '../assets';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [message, setMessage] = useState('')

    let Contact = async (e) => {
      e.preventDefault();
      if(email.length > 0 && name.length > 0 && message.length > 0){
        try {
          await axios.post('http://localhost:5000/user/contact', {
          name,   
          email,   
          message  
        });
        toast.success('Message sent successfully')
       
        setName('')
        setEmail('')
        setMessage('')
      }
      
      catch (err) {
        toast.error('Error')

      }
      }
      else{
        toast.error('Please fill all fields')
      }
    };
    


  return (
    <div className='h-screen w-full overflow-hidden'>
      <div className='flex w-full h-full relative'>
        
        <div className="left md:w-[30%] hidden md:block h-full">
          <img src={loginImg} className='object-cover h-full' alt="Signup Background" />
        </div>
        
        
        <div className="right flex items-center flex-col justify-center w-full h-screen m-2 relative ">
          <div className='flex items-start sm:justify-center sm:items-center w-full mb-8'> {/* Flex container for left-alignment */}
            <div className='w-44'>
              <img className='relative' src={logo3} alt="Logo" />
            </div>
          </div>
          
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-start justify-center w-full max-w-lg  p-2 h-[30rem]'>
              <h1 className='text-4xl sm:text-5xl font-bold mb-10'>Contact Us</h1>
              <form onSubmit={Contact} className='flex flex-col items-start justify-center w-full'>
                <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                  type="text" 
                  placeholder="Your name" 
                  className='p-4 w-[90%] sm:w-full text-lg border outline-none rounded-[2rem] bg-gray-200 px-5 mb-4 '
                />
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                  type="text" 
                  placeholder="Your email address" 
                  className='p-4 w-[90%] sm:w-full text-lg  border outline-none rounded-[2rem] bg-gray-200  px-5 mb-4'
                />
                <div className="w-full">
                  <textarea 
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                    className="py-4 w-[90%] sm:w-full text-lg resize-none px-4 block  border-transparent focus:outline-none rounded-[1rem]  bg-gray-200 ml-1" 
                    rows="4" 
                    placeholder="This is a textarea placeholder">
                  </textarea>
                </div>
                <button className='bg-[#000] text-white py-2 rounded-3xl mt-4 px-5'>
                  Send message
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
