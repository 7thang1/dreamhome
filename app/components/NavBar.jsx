import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import Signin from "./Signin";
import Signup from "./Signup";
import { Dialog } from "@material-tailwind/react";
import { Avatar } from "flowbite-react";
import { AiFillHeart } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import Cookies from "js-cookie";
import Search from "./Search"

function NavBar({ isLoggedIn }) {
const menuItems = [
  { label: "Bán", href: "/selling" },
  { label: "Thuê", href: "/rental" },
  { label: "Tin tức", href: "#" },
  { label: "Dự án", href: "#" },
  { label: "On Sale", href: "#" },
];
  const [isOpen, setIsOpen] = useState(false);
  const [isSigninDialogOpen, setIsSigninDialogOpen] = useState(false);
  const [isSignupDialogOpen, setIsSignupDialogOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState("signin");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  const dialogRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user info"));
    if (userInfo) {
      setUserEmail(userInfo[0].user_email);
      setUserName(userInfo[0].user_name);

      const image =
        userInfo[0].user_image ||
        "https://cdn.thedreamhome.click/default-avt.jpg";
      setUserImage(image);
    }
  }, [Cookies.get("accessToken")]);
  useEffect(() => {
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
  });
  useEffect(() => {
    function handleClickOutside(event) {
      if (isMenuOpen && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);
  const openForm = (form) => {
    setCurrentForm(form);
    if (form === "signin") {
      setIsSigninDialogOpen(true);
      setIsSignupDialogOpen(false);
    } else if (form === "signup") {
      setIsSigninDialogOpen(false);
      setIsSignupDialogOpen(true);
    }
  };
  const handleLogout = () => {
    Cookies.remove("accessToken");
    localStorage.removeItem("token");
    localStorage.removeItem("user info");
    window.location.reload();
  };
  return (
    <div className=" px-[50px] bg-gradient-to-tr from-[rgba(243,243,243,0.56)] via-[rgba(244,244,244,0.45)] to-transparent rounded-[10px] shadow-md py-[12px]  flex mb-10 shrink-0">
      <header className="">
        <div className=" flex items-center justify-between h-auto">
          <Link
            href="/"
            className="font-semibold text-[16px]  flex flex-col justify-self-center	w-fit mr-[183px]"
          >
            <img src="/logo1.png" alt="DreamHome" width={43} height={21} />
            <span className="capitalize text-transparent bg-gradient-to-t from-[#7A5F61] to-[#C28653] bg-clip-text">
              Dream Home
            </span>
          </Link>
          <ul className=" relative max-w-[388px] flex items-center justify-center gap-[25px] bg-black w-[388px] rounded-[100px] h-[44px] shrink-0 mr-[130px]">
            {menuItems.map((menuItems) => (
              <li
                key={menuItems.label}
                className="text-white font-medium text-[14px]  hover:text-red-500 ease-in-out duration-500 "
              >
                <Link href={menuItems.href}>{menuItems.label}</Link>
              </li>
            ))}
            {/* <li 
            onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
            className="rounded-full w-[31px] h-[31px] justify-center bg-[#535353] p-[6px] cursor-pointer">
              <img
                src="/search.svg"
                alt="search"
                className="w-[18px] h-[18px] hover:scale-110 ease-in-out duration-500"
              />
            </li>{" "}
            {isSearchBarOpen && (
            <div className="absolute w-[320px] h-[30px] p-2 bg-white rounded-full flex items-center mr-[40px] transition-transform  duration-1000">
              <input className="w-full h-full focus:outline-none"></input>
            </div>
          )} */}
     
          <Search/>
        
          </ul>

          {isLoggedIn ? (
            <>
              <button className="inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-[#806056] hover:scale-110 ease-in-out duration-500">
                Yêu thích
                <AiFillHeart className="w-6 h-6" />
              </button>
              <Link href="/post">
                <button className="inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-white ml-[20px] bg-[#806056] hover:scale-110 ease-in-out duration-500">
                  Đăng tin
                  <img src="/post.svg" alt="post"></img>
                </button>
              </Link>
              <div className="relative" ref={menuRef}>
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(!isMenuOpen);
                  }}
                  className="w-10 h-10 rounded-full cursor-pointer ml-5 border-[4px] border-solid border-[#806056]"
                  src={`${userImage}`}
                  alt="Avatar"
                />
                <div
                  className={`${
                    isMenuOpen ? "" : "hidden"
                  } absolute z-10 left-0 top-full w-[240px]   bg-white rounded shadow-lg flex flex-col`}
                >
                  <div className="flex flex-col justify-center py-[15px] px-5 gap-y-[5px] flex-wrap">
                    <span className="text-[#1c1d21] text-sm font-medium ">
                      {userName}
                    </span>
                    <span className="text-[#575757] text-[13px] font-normal">
                      {userEmail}
                    </span>
                  </div>
                  <hr className="border-[#DFDFDF] border-[1px] " />
                  <div className="flex flex-col justify-center py-[15px] px-5 gap-y-[10px]">
                    <div className="flex flex-row gap-x-[15px] flex-wrap p-2 hover:bg-[#E4E6E8]  rounded-md">
                      <img src="/person.svg" alt="person" />
                      <Link
                        href="/account"
                        className="text-[#1c1d21] text-sm font-normal "
                      >
                        Xem trang cá nhân
                      </Link>
                    </div>
                    {/* <div className='flex flex-row gap-x-[15px] flex-wrap p-2 hover:bg-[#E4E6E8]  rounded-md'>
        <img src='/setting-regular.svg' alt='setting'/>
        <Link href='' className='text-[#1c1d21] text-sm font-normal '>Cài đặt tài khoản</Link>
      </div> */}
                    <div className="flex flex-row gap-x-[15px] flex-wrap p-2 hover:bg-[#E4E6E8]  rounded-md">
                      <img src="/logout.svg" alt="logout" />
                      <span
                        onClick={handleLogout}
                        className="text-[#1c1d21] text-sm font-normal cursor-pointer "
                      >
                        Đăng xuất
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => openForm("signin")}
                className="w-[136px] justify-center inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-[#806056] ml-[39px] hover:scale-110 ease-in-out duration-500"
              >
                Đăng nhập
              </button>
              <Dialog
                open={isSigninDialogOpen}
                handler={() => openForm("signin")}
                ref={dialogRef}
                className="bg-transparent shadow-none"
              >
                <Signin
                  setIsLoggedIn={isLoggedIn}
                  setIsSigninDialogOpen={setIsSigninDialogOpen}
                  openSignup={() => openForm("signup")}
                />
              </Dialog>

              <button
                onClick={() => openForm("signup")}
                className="w-[136px] justify-center inline-flex py-[10px] px-[25px] items-center gap-[10px] rounded-full  border-[1px] border-[#806056] border-opacity-50 text-[14px] font-medium text-white ml-[20px] bg-[#806056] hover:scale-110 ease-in-out duration-500"
              >
                Đăng ký
              </button>
              <Dialog
                open={isSignupDialogOpen}
                handler={() => openForm("signup")}
                ref={dialogRef}
                className="bg-transparent shadow-none"
              >
                <Signup
                  setIsSignupDialogOpen={setIsSignupDialogOpen}
                  onSignInClick={() => openForm("signin")}
                />
              </Dialog>
            </>
          )}
        </div>
      </header>
    </div>
  );
}
export default NavBar;
