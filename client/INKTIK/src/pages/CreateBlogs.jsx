import React, { useState } from "react";
import { blogimg, loginImg, logo3, signupimg } from "../assets";
import axios from "axios";
import { toast } from "sonner";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CreateBlogs = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [summary, setSummary] = useState('')
  const [isPostCreated, setIsPostCreated] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const createdBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("summary", summary);

    if (image) {
      formData.append("image", image); 
    }
    if (!title || !description || !summary || !image) {
      toast.error('Please fill all the fields');
      return;
    }

    try {

      await axios.post('https://bytvance-backend.vercel.app/blog/created-blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true // Ensure cookies are sent with the request
      });
      setImage('')
      setTitle('')
      setDescription('')
      setSummary('')
      setIsPostCreated(true)
      toast.success('Blog created successfully')

    } catch (err) {

      toast.error('Error creating blog')
    }
  };
  
  const summaryToolbarOptions = [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['clean']  // remove formatting button
  ];


  return (
    <div className='min-h-screen w-full relative'>
      <div className='flex w-full h-full relative'>

        <div className="left fixed md:max-w-[22%] md:min-w-[22%] hidden md:block overflow-y-hidden max-h-screen">
          <img src={signupimg} className='object-cover w-full min-h-screen' alt="Signup Background" />
        </div>
<div className="right flex items-center flex-col justify-center w-[95%] h-screen m-2 relative md:pl-16 ">          <div className='flex items-start sm:justify-center sm:items-center w-full mt-2 ml-4 sm:ml-0'>
            <div className='w-44'>
              <img className='relative mb-2' src={logo3} alt="Logo" />
            </div>
          </div>
          <div className='w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col items-start justify-center w-full max-w-xl  p-2 h-[30rem] md:ml-20 lg:ml-10'>

              <form onSubmit={createdBlog} method="post" encType="multipart/form-data" className="flex flex-col mt-64  w-full">
                <h1 className="text-left text-4xl sm:text-5xl font-bold my-10">
                  Create Blog
                </h1>
                {" "}

                <div className="w-full px-4">
                  <label>Title</label>
                  <input
                    value={title}

                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700  border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow my-2"
                    placeholder="Title"
                  />

                  <label >Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow my-2 resize-none "
                    placeholder="Type here..."
                    rows={4}
                  />
                  <label htmlFor="">Details</label>
                  <ReactQuill
                    value={summary}
                    onChange={setSummary}
                    modules={{ toolbar: summaryToolbarOptions }}
                    className="my-2 h-40 w-full "
                    placeholder="Add a Symmary..."
                    rows={8}
                  />
                  <div className="flex items-center pt-10">
                    <div className="w-10 h-10 rounded-full mt-4 flex items-center justify-center ">
                      <input
                        onChange={handleImageChange}
                        type="file"
                        className="absolute opacity-0"
                        id="fileInput"
                        accept="image/*"
                      />
                       
                      <svg  className="w-8 h-8 cursor-pointer" onClick={() => document.getElementById('fileInput').click()} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="black" d="M2.283 7.975a.5.5 0 0 0 .854.354l4.595-4.597a2.5 2.5 0 1 1 3.536 3.536l-5.303 5.303a1 1 0 0 1-1.414-1.414l5.303-5.303a.5.5 0 0 0-.708-.708L3.843 10.45a2 2 0 1 0 2.828 2.828l5.303-5.303a3.5 3.5 0 1 0-4.95-4.95L2.43 7.621a.5.5 0 0 0-.146.354"/></svg>
                    </div>
                    <p className="pt-4 px-3 line-clamp-1 text-ellipsis">{image ? image.name : ''}</p>

                  </div>

                </div>

                 <div className="flex flex-col items-center justify-center gap-4">
               <button className="bg-[#000] text-white py-2 rounded-3xl mt-4 px-5 w-24 my-5">
                  Post
                </button>
                {isPostCreated ? <p className="text-sm md:text-lg pb-3">
                  Your post will appear after admin approval. Thank you!
                </p> : ''}

               </div>




              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogs;
