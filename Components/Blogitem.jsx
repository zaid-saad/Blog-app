import React from 'react'
import Image from 'next/image'
import { assets, blog_data } from '@/Assets/assets'
import Link from 'next/link'

const Blogitem = ({title , description ,category , image , id}) => {
    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
            <Link href={`/Blogs/${id}`}>
            <Image src={image} alt='Blog_image' width={400} height={400} 
            className='border-b border-black' />
            </Link>
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
            <div className="p-5">
                <h5 className='mb-2 text-xl font-medium tracking-tight text-gray-900'>{title}</h5>
                <p className='mb-3 text-sm tracking-tight text-gray-900'
                dangerouslySetInnerHTML={{__html: description.slice(0,150)}}
                ></p>
                <Link href={`/Blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                    Read More <Image src={assets.arrow } alt='arrow_Icon' width={12} className='ml-2'/>
                </Link>
            </div>
        </div>
    )
}

export default Blogitem