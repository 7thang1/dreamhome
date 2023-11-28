import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Link from "next/link";
import Signin from './Signin';
import Signup from './Signup';
import {Dialog,} from "@material-tailwind/react";
const menuItems = [
  { label: "Bán", href: "/selling" },
  { label: "Thuê", href: "/rental" },
  { label: "Tin tức", href: "#" },
  { label: "Dự án", href: "#" },
  { label: "On Sale", href: "#" },
];
import Cookies from 'js-cookie';
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSigninDialogOpen, setIsSigninDialogOpen] = useState(false);
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState('signin');
  const dialogRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   setIsLoggedIn(true);
    // }
    function handleClickOutside(event) {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsSigninDialogOpen(false);
        setIsSignupDialogOpen(false);
      }
    }
  
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },);
  const openForm = (form) => {
    setCurrentForm(form);
    if (form === 'signin') {
      setIsSigninDialogOpen(true);
      setIsSignupDialogOpen(false);
    } else if (form === 'signup') {
      setIsSigninDialogOpen(false);
      setIsSignupDialogOpen(true);
    }
  };
    return(
        <div className=' px-[50px] bg-gradient-to-tr from-[rgba(243,243,243,0.56)] via-[rgba(244,244,244,0.45)] to-transparent rounded-[10px] shadow-md py-[12px]  flex mb-10 shrink-0'>
            <header className=''>
               <div className=' flex items-center justify-between h-auto'>
            <Link href="/" className="font-semibold text-[16px]  flex flex-col justify-self-center	w-fit mr-[183px]">
                <img src="/logo1.png" alt="DreamHome" width={43} height={21} />
                <span className='capitalize text-transparent bg-gradient-to-t from-[#7A5F61] to-[#C28653] bg-clip-text'>Dream Home</span>
            </Link> 
                <ul className=" max-w-[388px] flex items-center justify-center gap-[25px] bg-black w-[388px] rounded-[100px] h-[44px] shrink-0 mr-[130px]" >
                    {menuItems.map((menuItems) => (
                        <li key={menuItems.label} className='text-white font-medium text-[14px]  hover:text-red-500 ease-in-out duration-500 '>
                            <Link href={menuItems.href}>{menuItems.label}</Link>
                        </li>
                    ))}
                     <li className='rounded-full w-[31px] h-[31px] justify-center bg-[#535353] p-[6px] cursor-pointer'>
            <img src='/search.svg' alt='search' className='w-[18px] h-[18px] hover:scale-110 ease-in-out duration-500' />
          </li>
                </ul>
              
  {isLoggedIn ? (
  <>
  <button className="inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-[#806056] ml-[39px] hover:scale-110 ease-in-out duration-500">
    Quan tâm
    <img src='/bookmark.png' alt='bookmark' ></img>
  </button>
  <Link href='/post'>
  <button  className="inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-white ml-[20px] bg-[#806056] hover:scale-110 ease-in-out duration-500">
    Đăng tin
    <img src='/post.svg' alt='post'></img>
  </button> 
  </Link>
  </> ) : (
    <>
  <button onClick={() => openForm('signin')} className="w-[136px] justify-center inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-[#806056] ml-[39px] hover:scale-110 ease-in-out duration-500">
    Đăng nhập
  </button>
  <Dialog
        open={isSigninDialogOpen}
        handler={() => openForm('signin')}
        ref={dialogRef}
        className="bg-transparent shadow-none"
      >
        <Signin 
        setIsLoggedIn={setIsLoggedIn}
        setIsSigninDialogOpen={setIsSigninDialogOpen}
        openSignup={() => openForm('signup')}/>
      </Dialog>

  <button onClick={() => openForm('signup')} className="w-[136px] justify-center inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-white ml-[20px] bg-[#806056] hover:scale-110 ease-in-out duration-500">
    Đăng ký
  </button>
  <Dialog
        open={isSignupDialogOpen}
        handler={() => openForm('signup')}
        ref={dialogRef}
        className="bg-transparent shadow-none"
        >
        <Signup
        setIsSignupDialogOpen={setIsSignupDialogOpen} 
        onSignInClick={() => openForm('signin')} />
      </Dialog>
    </>
    )}
    </div>
    </header>
    </div>
    )
}
export default NavBar;