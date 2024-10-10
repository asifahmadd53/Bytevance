import React from 'react';

const Story = () => {
  return (
      <div className="flex items-center m-6">
        <div className="object-fill">
          <div className="relative flex w-80 md:min-w-80 sm:min-w-72 xs:max-w-60  flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 border border-black">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border h-80 xs:h-60 sm:h-72 md:h-80 xl:h-96">
              <img
                className='rounded-xl h-full md:h-80 lg:h-96 w-full object-cover ' // Adjust the height here
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="ui/ux review check"
              />
            </div>
            <div className="px-4 py-2">
              <h4 className="block font-sans text-2xl xs:text-xl sm:text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                UI/UX Review Check hiii my name is ssif
              </h4>
              <p className="block mt-1 font-sans text-xl xs:text-lg sm:text-2xl antialiased font-normal leading-relaxed text-gray-700">
                Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
              </p>
            </div>
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center -space-x-3">
                <img 
                  alt="natali craig"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                  className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                />
                <img 
                  alt="Tania Andrew"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                  className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                />
              </div>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                January 10
              </p>
            </div>
          </div>
        </div>
      </div>
      
    
  );
};

export default Story;
