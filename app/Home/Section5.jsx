import React from 'react'
import NewsData from '../newscontent'
function Section5() {
  return (
    <div className=' inline-flex flex-col justify-end items-start gap-[30px] mb-[73px]'>
        <span className='text-[20px] text-[#000] font-semibold leading-[30px]'>Tin tức bất động sản</span>
        <div className='flex flex-row gap-10 '>
            {NewsData.map((post) => (
                <div className='max-w-[400px] h-[400px] flex flex-col justify-center items-center' key={post.id}>
                    <img className='rounded-2xl'  src={post.image} alt="PostImage" />
                    <div className='flex justify-between gap-[26px] items-center p-[15px]'>
                        <p className='text-[50px] text-[#282E3C] font-bold leading-[75px]'>0{post.id}</p>
                    <p className='text-[14px] text-[#282E3C] font-medium leading-[21px] overflow-hidden text-ellipsis'>{post.content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Section5