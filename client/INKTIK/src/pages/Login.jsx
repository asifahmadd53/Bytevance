import { loginImg } from '../assets';

const Login = () => {
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
              InkTiq
            </h1>
          <div className='flex flex-col items-start w-full max-w-md relative'>
            {/* Logo placed at the top */}
            

            <form className='flex flex-col items-start justify-center mt-20 w-full'> {/* Added margin-top to push form down */}
              <h1 className='text-4xl sm:text-5xl font-bold mb-8'>Welcome back!</h1>
              <input 
                type="text" 
                placeholder="Your email address" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-300 text-sm px-4 mb-3'
              />
              <input 
                type="text" 
                placeholder="Password" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-300 text-sm px-4 mb-3'
              />
              <button className='bg-[#000] text-white py-2 rounded-3xl mt-4 px-5'>
                Send Login Link
              </button>
              <p className='text-sm md:text-lg mt-7'>Don't have an account yet?</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
