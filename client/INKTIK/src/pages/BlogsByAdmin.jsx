import React, { useState } from "react";
import { blogimg, loginImg, signupimg } from "../assets";
import axios from "axios";
import { toast } from "sonner";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const BlogsByAdmin = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [summary, setSummary] = useState('')

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
    

    try {
      await axios.post('https://bytvance-backend.vercel.app/admin/admin-blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true 
      });
      setTitle('')
      setDescription('')
      setSummary('')
      setImage(null)
      toast.success('Successfully')
    } catch (err) {
      toast.error('error')
    }
  };

    const summaryToolbarOptions = [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['clean']  // remove formatting button
  ];


  return (
    <div >
      <div className="min-h-screen w-full">
        <div className="flex w-full relative">
          {/* Left Section with Image */}
          <div className="left w-[20%] hidden md:block sticky top-0 h-screen">
            <img
              src={blogimg}
              className="object-cover h-full w-full"
              alt="Signup Background"
            />
          </div>
          {/* Right Section with Form */}
          <div className="right pt-20 md:w-[80%] flex items-center justify-center w-full m-2 relative">
           
            <div className="flex flex-col items-start w-full max-w-md md:max-w-lg lg:max-w-xl relative">
              <form onSubmit={createdBlog} method="post" encType="multipart/form-data" className="flex flex-col items-center justify-center w-full">
                <h1 className="text-center text-4xl sm:text-5xl font-bold mb-6">
                  Create Blog 
                </h1>
                <div className="w-full px-4">
                  <label className="pb-5" htmlFor="">Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-2"
                    placeholder="Type here..."
                  />
                  <label className="pb-5" htmlFor="">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow mt-2 resize-none "
                    placeholder="Type here..."
                    rows={4}
                  />
                  <label className="pb-5" htmlFor="">Details</label>
                  <ReactQuill
                    value={summary}
                    onChange={setSummary}
                    modules={{ toolbar: summaryToolbarOptions }}
                    className="my-2 h-40 w-full "
                    placeholder="Add a Symmary..."
                    rows={8}
                  />
                 <div className="flex items-center gap-2 pt-10">
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
                
                <button className="bg-[#000] text-white py-2 rounded-3xl mt-4 px-7 mb-6">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsByAdmin;
