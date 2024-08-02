import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Header = () => {

  const [email, setEmail] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault(); 
    const formData = new FormData();
    formData.append("email", email);
    const response  = await axios.post('/api/email', formData)
    if (response.data.success) {
      toast.success(response.data.msg)
      setEmail("")
    }
    else {
      toast.error("Error")
    }
  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-8'>
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} alt='Logo' className='w-[130px] sm:w-auto cursor-pointer'/>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 
            sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='Icon' /></button>
      </div>

      <div className="text-center my-10">

      
        <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-sm sm:text-md'>This blog website delivers a seamless and modern user experience, combining efficient technology with a sleek design that makes the content stand out.</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter Your E-mail' className='pl-4 outline-none' />
          <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>
        
      </div>
    </div>

  )
}

export default Header