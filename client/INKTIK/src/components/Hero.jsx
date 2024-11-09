import { useState } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Stories from './Stories';
import Lately from './Lately';
import Recomended from './Recomended';
import Footer from './Footer';
import axios from 'axios';
import { toast } from 'sonner';

const Hero = () => {

    let [email, setEmail] = useState('')
    let [error, setError  ] = useState(false)
    const subscribe = (e) => {
      e.preventDefault();

      try{
        if(email.length > 0){
          let response = axios.post('https://bytvance-backend.vercel.app/user/subscriber', { email },{
            withCredentials:true
          })
        setEmail(response.data)
        toast.success('You have been subscribed')
        setEmail('')
        }
        else{
          toast.error('Please enter the valid email')
          setError(true)
        }
      }catch(err){
        toast.error('Event has not been created')
      }
      
    };


  return (
    <>
    <Header/>
    <SideMenu/>
    <div className='h-auto w-full'>
      <div className='pt-6 px-3 pl-6 md:px-16'>
      <h1 className='text-[2rem] xs:text-7xl md:text-8xl tracking-wide'>
  <span className='font-bold text-[2.4rem] xs:text-6xl md:text-8xl'>
    Hey, we're Bytvance<span className='text-2xl md:text-4xl'>●</span>
  </span>
  <br className='hidden' /> <span className='tracking-wider text-4xl xs:text-[3.4rem] sm:text-6xl md:text-8xl font-thin sub-heading'>See our thoughts, stories and ideas.</span>

</h1>

        
        <div className='flex items-center gap-4 '>
        <form onSubmit={subscribe} className="mt-8 md:mx-0  max-w-sm xs:max-w-sm sm:max-w-md rounded-full bg-[#F2F0F2]  flex focus-within:border-gray-300 md:w-max-[60%] w-full">
          <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type='email'
            placeholder="Your email address"
            className="bg-transparent w-full focus:outline-none pr-4 border-0 xs:text-xl md:text-lg focus:ring-0 px-6 py-4 placeholder:text-zinc-600 xs:py-2"
            name="topic"
          />
          <button
            className="flex flex-row items-center justify-center xs:min-w-[160px] px-6  rounded-full border disabled:cursor-not-allowed disabled:opacity-50  ease-in-out  xs:text-2xl bg-black text-white font-medium tracking-wide border-transparent py-4  md:h-auto hover:bg-[#314bff] transition-colors duration-300"
          >
            Subscribe
          </button>
        
        </form>
      
        <p className='hidden md:block w-96 mt-10'>Get the email newsletter and unlock access to members-only content and updates</p>
        </div>
         
          {error?<p className='mt-4 text-[.75rem] md:text-sm bg-gray-200  px-3 py-1 rounded-[2rem] whitespace-nowrap  w-64 hidden md:block'> There was an error sending the email </p>: ''}
          
          
      </div>
    </div>
    <Stories/>
    <Lately/>
    {/* <LatelyCards/> */}
    <Recomended/>
    <Footer/>
    </>
  );
};

export default Hero;
