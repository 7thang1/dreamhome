import React, {useState} from 'react';
import styled from 'styled-components';
import Link from "next/link";
const menuItems = [
    "Bán",
    "Thuê",
    "Tin tức",
    "Dự án",
    "On Sale",
]
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleMouseEnter = () => {
      setIsOpen(true);
    };
    
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
    return(
        <div className='max-w-[1280px] px-[50px] bg-gradient-to-tr from-[rgba(243,243,243,0.56)] via-[rgba(244,244,244,0.45)] to-transparent rounded-[10px] shadow-md py-[12px]  flex mb-10 shrink-0'>
            <header className=''>
               <div className=' flex items-center justify-between h-auto'>
            <Link href="/" className="font-semibold text-[16px]  flex flex-col justify-self-center	w-fit mr-[183px]">
                <img src="/logo1.png" alt="DreamHome" width={43} height={21} />
                <span className='capitalize text-transparent bg-gradient-to-t from-[#7A5F61] to-[#C28653] bg-clip-text'>Dream Home</span>
            </Link> 
                <ul className=" max-w-[388px] flex items-center justify-center gap-[25px] bg-black w-[388px] rounded-[100px] h-[44px] shrink-0" >
                    {menuItems.map((link) => (
                        <li key={link} className='text-white font-medium text-[14px]'>
                            <Link href={"#"}>{link}</Link>
                        </li>
                    ))}
                     <li className='rounded-full w-[31px] h-[31px] justify-center bg-[#535353] p-[6px] cursor-pointer'>
            <img src='/search.png' alt='search' sizes='18px' />
          </li>
                </ul>
                <div
    className='w-auto inline-flex items-center gap-[10px] relative ml-[59px] h-fit '
    onMouseEnter={toggleDropdown}
    onMouseLeave={toggleDropdown}
  >
    <span className='text-[14px] font-medium'>Dịch vụ khác</span>
    {isOpen ? (
      <img src='/up-arrow.png' alt='up-arrow' className='w-[12px] h-[8px]' />
    ) : (
      <img src='/down-arrow.png' alt='down-arrow' className='w-[12  px] h-[8px]' />
    )}
    {isOpen && (
      <div
        className='absolute bg-white border rounded-[5px] p-[10px] flex flex-col top-[80%]'
        style={{
          flexDirection: 'column', 
          left: '0', 
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <a href="#">Service 1</a>
        <a href="#">Service 2</a>
        <a href="#">Service 3</a>
      </div>
    )}
  </div>
  <button className="inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-[#806056] ml-[39px]">
    Quan tâm
    <img src='/bookmark.png' alt='bookmark'></img>
  </button>
  <button className="inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-white ml-[20px] bg-[#806056]">
    Đăng tin
    <img src='/post.svg' alt='post'></img>
  </button>
    </div>
    </header>
        </div>
    )
}
export default NavBar;