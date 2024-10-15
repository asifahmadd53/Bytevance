import { loginImg, logo3 } from '../assets';

const Login = () => {
  return (
    <div className='h-screen w-full '>
      <div className='flex w-full h-full relative'>
        {/* Left Section with Image */}
        <div className="left md:w-[30%] hidden md:block h-full">
          <img src={loginImg} className='object-cover h-full' alt="Signup Background" />
        </div>
        
        {/* Right Section with Form */}
        <div className="right flex items-center flex-col justify-center w-full h-screen m-2 relative ">
          <div className='flex items-start sm:justify-center sm:items-center w-full mb-8'> {/* Flex container for left-alignment */}
            <div className='w-44'>
              <img className='relative' src={logo3} alt="Logo" />
            </div>
          </div>
          
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-start justify-center w-full max-w-lg  p-2 h-[30rem]'>
              <h1 className='text-4xl sm:text-5xl font-bold mb-10'>Contact Us</h1>
              <form className='flex flex-col items-start justify-center w-full'>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className='p-3 w-full border outline-none rounded-3xl bg-gray-200 text-sm px-4 mb-3'
                />
                <input 
                  type="text" 
                  placeholder="Your email address" 
                  className='p-3 w-full border outline-none rounded-3xl bg-gray-200 text-sm px-4 mb-3'
                />
                <div className="w-full">
                  <textarea 
                    className="py-3 resize-none px-4 block w-full border-transparent focus:outline-none rounded-3xl text-sm bg-gray-200" 
                    rows="3" 
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
