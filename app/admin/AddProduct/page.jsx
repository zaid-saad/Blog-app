"use client"
import { assets } from '@/Assets/assets'
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { toast } from 'react-toastify'


const Page = () => {

  const [image, setImage] = useState(false)
  const [data, setdata] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata(data => ({ ...data, [name]: value }))
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    const response = await axios.post("/api/blog", formData)
    if (response.data.success) {
      toast.success(response.data.msg)
      setImage(false)
      setdata({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bentley",
        authorImg: "/author_img.png"
      })
    }
    else {
      toast.error("Error")
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} className='px-5 pt-5 sm:pt-12 sm:pl-16'>

        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor="image">
          <Image src={!image ? assets.upload_area : URL.createObjectURL(image)} className='cursor-pointer mt-4' width={140} height={70} alt='Icon' />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        <p className='text-xl mt-4 '>Blog Title</p>
        <input name='title' onChange={onChangeHandler} value={data.title} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' placeholder='Enter Blog Title' required />
        <p className='text-xl mt-4 '>Blog Description</p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" className='w-full sm:w-[500px] mt-4 px-4 py-3 border ' placeholder='Enter Blog Description' rows={6} required />
        <p className='text-xl mt-4'>Blog Category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type='submit' className='bg-black text-white mt-8 w-40 h-12 '>Add</button>
      </form>
    </>
  )
}

export default Page
