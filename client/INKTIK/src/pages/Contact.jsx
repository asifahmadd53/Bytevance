
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
        <div className="right md:w-[80%] flex items-center justify-center w-full m-2 relative">
        <h1 className='absolute left-6 md:left-36 top-6 text-4xl sm:text-5xl md:text-6xl text-left font-bold mb-5'>
              Bytevance
            </h1>
          <div className='flex flex-col items-start w-full max-w-md relative'>
            {/* Logo placed at the top */}
            

            <form  className='flex flex-col items-start justify-center mt-20 w-full'> {/* Added margin-top to push form down */}
              <h1 className='text-4xl sm:text-5xl font-bold mb-16'>Contact Us</h1>
              <input 
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
                type="text" 
                placeholder="Your name" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-200 text-sm px-4 mb-3'
              />
              <input 
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
                type="text" 
                placeholder="Your email address" 
                className='p-3 w-full border outline-none rounded-3xl bg-gray-200 text-sm px-4 mb-3'
              />
              <div class="w-full">
  <textarea class="py-3 resize-none px-4 block w-full  border-transparent focus:outline-none rounded-3xl text-sm  bg-gray-200" rows="3" placeholder="This is a textarea placeholder"></textarea>
</div>
              <button className='bg-[#000] text-white py-2 rounded-3xl mt-4 px-5'>
                Send message
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
