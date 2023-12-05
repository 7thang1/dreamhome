import React from 'react';
import { Typography } from "@material-tailwind/react";

const LINKS = [
    {
        title: "Home",
        items: ["About Us", "Collection","Blog & News"]
    },
    {
        title: "Security",
        items: ["Privacy Policy", "User Agreements","Copyright"]
    },
    {
        title: "Social Media",
        items: ["Instagram", "Facebook","Twitter"]
    },
]
function Footer() {
  return (
 <div className=' rounded-2xl shrink-0 bg-[#1b1b1b] flex-row p-[40px]   '>
    <div className='mb-[30px] w-auto h-auto space-y-[10px]'>
    <Typography className='text-white  text-[30px] font-semibold leading-[45px]'>
    Ready To Work With Us?
    </Typography>
    <Typography className='text-white  text-[16px] font-normal leading-[24px] h-[30px]'>
    Lorem ipsum dolor sit amet consectetur. Sed rutrum amet lacinia convallis tempor ut purus id.
    </Typography>
    </div>
    <hr className=' h-fit  '/>
    <div className=' mt-[40px] justify-between flex'>
        <div>
        <img className=' fill-gray-300 w-[43px] h-[21px]' src="/logo 1.png" alt="DreamHome" />
        <Typography className='capitalize text-white'>Dream Home</Typography>
        <Typography className='text-white text-[14px] font-medium leading-[21px] pt-[12px]'>Amet consectetur. Sed rutrum amet lacinia <br/> convallis tempor ut purus id.</Typography>
       <div className='w-[348px] h-[70px] shrink-0 rounded-[20px] border-solid border-[1px] border-[#fff] p-[25px] items-center flex mt-[18px]  justify-between'>
        <input className='bg-transparent text-white focus:outline-none border-none rounded-md' placeholder='Enter your email' type='email'>   
        </input>
        <button className='text-white py-[10px] px-[25px] flex items-center rounded-[50px] text-[14px] font-medium bg-[#806056] hover:bg-blue-gray-500  duration-500 '>
            Gửi
        </button>
       </div>
        </div>
        <div className='grid grid-cols-3 justify-between gap-[60px]'>

    {LINKS.map(({ title, items }) => (
        <ul key={title}>
                <Typography
                  color="white"
                  className=" font-medium text-[15px] leading-[22.5px] mb-[14px] "
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className=" mb-[14px] font-normal text-[14px] leading-[21px] hover:text-blue-100"
                      >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
            </div>
    </div>
 </div>

  );
}
export default Footer;