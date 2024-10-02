import React, { useState } from "react";
import { loginImg } from "../assets";
import axios from "axios";

const CreateBlogs = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const [summary, setSummary] = useState('')

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const createdBlog = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("summary", summary);
    
        if (image) {
            formData.append("image", image); // Directly append the file
        }
        
        try {
            const response = await axios.post('http://localhost:4000/blog/created-blog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
            if (!response.data) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div>
      <div className="h-screen w-full">
        <div className="flex w-full h-full relative">
          {/* Left Section with Image */}
          <div className="left w-[20%] hidden md:block h-full">
            <img
              src={loginImg}
              className="object-cover h-full"
              alt="Signup Background"
            />
          </div>
          {/* Right Section with Form */}
          <div className="right md:w-[90%] flex items-center justify-center w-full m-2  relative">
            <h1 className="absolute left-10 md:left-14 lg:left-8 top-4 text-4xl sm:text-5xl md:text-6xl text-left font-bold mb-5">
              Bytevance
            </h1>
            <div className="flex flex-col items-start w-full max-w-md md:max-w-lg lg:max-w-xl  relative md:mt-32">
              {/* Logo placed at the top */}

              

              <form onSubmit={createdBlog}  encType="multipart/form-data" className="flex flex-col items-center justify-center mt-32 w-full">
              <h1 className="text-center text-4xl sm:text-5xl font-bold mb-6">
                  Create Blog 
                </h1>
                {" "}
                {/* Added margin-top to push form down */}
               
                <div className="w-full px-4">
                <label className="pb-5" htmlFor="">Title</label>
                  <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-2"
                    placeholder="Type here..."
                  />
                <label className="pb-5" htmlFor="">Description</label>
                  <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-2 resize-none "
                    placeholder="Type here..."
                    rows={4}
                  />
                <label className="pb-5" htmlFor="">Details</label>
                  <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-2 resize-none"
                    placeholder="Type here..."
                    rows={6}
                  />
                   <div className="w-10 h-10 rounded-full mt-4 flex items-center justify-center ">
    <input
    onChange={handleImageChange}
    type="file"
        className="absolute opacity-0"
        id="fileInput"
        accept="image/*"
    />
    <svg
        className="w-5 h-5 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 397 511.92"
        onClick={() => document.getElementById('fileInput').click()}
    >
        <path
            fillRule="nonzero"
            d="M370.42 212.78c4.94-6.51 14.23-7.78 20.73-2.85 6.51 4.94 7.78 14.23 2.84 20.73L216.08 464.63c-20.06 26.3-49.03 42.03-79.53 46.18-30.03 4.09-61.64-3.04-87.78-22.38a15.67 15.67 0 0 1-2.56-1.94c-25.65-20.04-41.01-48.64-45.1-78.71-4.09-30.05 3.06-61.66 22.39-87.79.53-.88 1.16-1.71 1.86-2.47L239.33 36.15c16.39-19.23 34.57-31.3 54.79-34.97 20.41-3.71 41.94 1.25 64.75 16.18l.97.69.26.2.03.02c10.88 8.4 19.01 17.76 24.58 27.84 5.98 10.85 8.96 22.5 9.17 34.68.27 16.39-3.62 30.03-9.87 42.56-5.75 11.55-13.57 22.01-21.92 32.99l-198.2 260.67c-8.38 11.02-20.48 17.61-33.2 19.34-12.16 1.66-24.98-1.14-35.71-8.75-.96-.57-1.86-1.25-2.69-2.05-10.23-8.32-16.36-19.95-18.03-32.15-1.71-12.69 1.4-26.09 9.76-37.09L255.26 131.1c4.93-6.5 14.22-7.77 20.73-2.84 6.5 4.94 7.77 14.23 2.84 20.73L107.59 374.2c-3.4 4.48-4.66 10-3.95 15.26.71 5.22 3.4 10.17 7.86 13.56l.05.05c4.46 3.36 9.96 4.61 15.2 3.9 5.23-.71 10.18-3.39 13.57-7.85l198.2-260.67c7.26-9.55 14.07-18.66 18.9-28.34 4.33-8.68 7.02-17.98 6.85-28.86-.12-7.25-1.94-14.25-5.57-20.85-3.56-6.45-8.94-12.61-16.3-18.34-16.01-10.43-30.3-14.04-43.06-11.73-13.02 2.37-25.5 11.03-37.5 25.07L48.04 336.59c-15.1 19.85-20.69 44.13-17.55 67.24 3.08 22.65 14.58 44.16 33.77 59.22.75.46 1.47 1 2.14 1.62 19.67 14.5 43.51 19.85 66.21 16.76 22.67-3.08 44.19-14.61 59.24-33.82.48-.76 1.03-1.48 1.65-2.17l176.92-232.66z"
        />
    </svg>
</div>

                </div>
                
                <button className="bg-[#000] text-white py-2 rounded-3xl mt-4 px-5">
                  Post
                </button>
                <p className="text-sm md:text-lg mt-7">
                  Don't have an account yet?
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogs;
