"use client";
import React, { useState, useEffect } from "react";
import { Avatar, Breadcrumbs, Badge } from "@material-tailwind/react";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { getBookmarkslist, getPropertiesbyUser, updatePassword, updateUserInfo } from "../components/API";
import Card from "../components/ProductCard";
import requireAuth from "../requireAuth";
function AccountPage() {
  const [userInfo, setUserInfo] = useState([]);
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userRole, setUserRole] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [userPass, setUserPass] = useState("");
  const [userNewPass, setUserNewPass] = useState("");
  const [userConfirmPass, setUserConfirmPass] = useState("");
  const [isPassMatch, setIsPassMatch] = useState(true);
  const [posts, setPosts] = useState([]);
  const [Bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user info"));
    if (userInfo) {
      setUserEmail(userInfo[0].user_email);
      setUserName(userInfo[0].user_name);
      setUserPhone(userInfo[0].user_phone);
      setUserRole(userInfo[0].user_role);
      setUserPass(userInfo[0].user_password);
      const image =
        userInfo[0].user_image ||
        "https://cdn.thedreamhome.click/default-avt.jpg";
      setUserImage(image);
    }
    const fetchPosts = async () => {
      const result = await getPropertiesbyUser();
      setPosts(result.elements);
    };
    const fetchBookmarks = async () => {
      const result = await getBookmarkslist();
      setBookmarks(result.elements);
    };
    fetchPosts();
    fetchBookmarks();
    console.log(Bookmarks)
  }, []);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
    setUserName(userInfo[0].user_name);
    setUserEmail(userInfo[0].user_email);
    setUserRole(userInfo[0].user_role);
  };
  const handleSaveClick = () => {
    setIsEditing(false);
    const result = updateUserInfo(userEmail,userName,userPhone,userRole,userImage)
    if(result.status === 200){
      const updatedUserInfo = {
        user_name: userName,
        user_email: userEmail,
        user_phone: userPhone,
        user_role: userRole,
        user_image: userImage,
        user_password: userNewPass, 
      };
  
      localStorage.setItem("user info", JSON.stringify([updatedUserInfo]));
  
      alert("Cập nhật thành công");
    }
  };
  const handleChangePassClick = () => {
    const result = updatePassword(userNewPass);
    if (result.status === 200) {
      alert("Đổi mật khẩu thành công");
  }
}
  useEffect(() => {
    setIsPassMatch(userNewPass === userConfirmPass);
  }, [userNewPass, userConfirmPass]);
 
  const TabContent = () => {
    switch (activeTab) {
      case "posts":
        return <div className="flex flex-col gap-y-[30px]">
          <span className="text-[#000] text-xl font-medium">Bài đăng</span>
          <div className=' grid grid-cols-4 justify-center gap-x-[27px] gap-y-[50px] '>
        {posts.map((post) => (
        <Card
        key={post.property_id}
        id={post.property_id}
        name={post.property_name}
        location={`${post.district_name}, ${post.province_name}`} 
        price={post.price}
        image={post.image_url}
        superficiality={post.area}
        bedroom={post.bedroom}
        bathroom={post.bathroom}
        isSwitchButton={true}
        />  
        ))}
      </div>
        </div>;
      case "favorites":
        return <div className="flex flex-col gap-y-[30px]">
          <span className="text-[#000] text-xl font-medium">Bài đăng yêu thích</span>
          <div className=' grid grid-cols-4 justify-center gap-x-[27px] gap-y-[50px] '>
        {Bookmarks.map((bookmark) => (
        <Card
        key={bookmark.property_id}
        id={bookmark.property_id}
        name={bookmark.property_name}
        location={`${bookmark.district_name}, ${bookmark.province_name}`} 
        price={bookmark.price}
        image={bookmark.image_url}
        superficiality={bookmark.area}
        bedroom={bookmark.bedroom}
        bathroom={bookmark.bathroom}
        />  
        ))}
      </div>
        </div>;
      default:
        return (
          <div className="flex flex-col ">
            <div className="flex flex-col p-[30px] rounded-2xl border-[0.5px] border-solid border-[#f5f5f5] bg-[#f8f8f8] mb-[50px]">
              <span className="text-[#000] text-sm font-semibold mb-6">
                Thông tin của tôi
              </span>
              <div className="flex flex-row justify-between items-center mb-[30px]">
                <div className="flex flex-col">
                  <label className="text-[#000] text-sm font-medium mb-2">
                    Tên người dùng
                  </label>
                  <input
                    value={userName}
                    disabled={!isEditing}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    className="flex w-[580px] items-center p-[15px] rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#000] text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    value={userEmail}
                    disabled={!isEditing}
                    onChange={(e) => setUserEmail(e.target.value)}
                    type="email"
                    className="flex w-[580px] items-center p-[15px] rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mb-[30px]">
                <div className="flex flex-col">
                  <label className="text-[#000] text-sm font-medium mb-2">
                    Số điện thoại/Zalo
                  </label>
                  <input
                    value={userPhone}
                    disabled={true}
                    type="phone"
                    className="flex w-[580px] items-center p-[15px] rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[#000] text-sm font-medium mb-2">
                    Vai trò
                  </label>
                  <select
                  disabled={!isEditing}
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                    className="p-[15px]  flex w-[580px] items-center rounded-md border-[0.5px] border-solid border-[#D6D6D6] bg-[#f8f8f8] text-[#1c1d21] text-sm font-normal "
                  >
                    <option value="admin">Quản trị viên</option>
                    <option value="user">Người dùng</option>
                    <option value="reseller">Môi giới</option>
                    <option value="investor">Nhà đầu tư</option>
                  </select>
                </div>
              </div>
              {isEditing ? (
                <div className="flex justify-end">
                  <button
                    onClick={handleCancelClick}
                    className="flex py-[15px] px-[30px] items-center rounded-xl bg-[#F6F6F6] text-[#1C1D21] text-sm font-normal mr-2 border-[0.5px] border-solid border-[#D6D6D6]"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    onClick={handleSaveClick}
                    className="flex py-[15px] px-[30px] items-center rounded-xl bg-[#806056] text-[#fff] text-sm font-medium"
                  >
                    Lưu
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEditClick}
                  className="flex py-[15px] px-[30px] items-center rounded-xl self-end bg-[#806056] text-[#fff] text-sm font-medium"
                >
                  Chỉnh sửa
                </button>
              )}
            </div>
            <div className="flex flex-col p-[30px] rounded-2xl border-[0.5px] border-solid border-[#f5f5f5] bg-[#f8f8f8]">
            <span className="text-[#000] text-sm font-semibold mb-6">Cài đặt mật khẩu</span>
            <div className="flex flex-row justify-stretch mb-[30px] items-center gap-x-[70px]">
              <span className="text-[#1c1d21] text-sm font-normal w-[130px]">Mật khẩu hiện tại:</span>
              <input
              value={userPass}
              disabled={true}
              type="password"
              className="flex items-center py-5 px-[15px] rounded-md border-[0.5px] border-solid border-[#D6D6D6] w-[580px]"
              />
            </div>
            <div className="flex flex-row justify-stretch mb-[30px] items-center gap-x-[70px]">
              <span className="text-[#1c1d21] text-sm font-normal w-[130px]">Mật khẩu mới:</span>
              <input
              value={userNewPass}
              onChange={(e) => setUserNewPass(e.target.value)}
              type="password"
              className="flex items-center py-5 px-[15px] rounded-md border-[0.5px] border-solid border-[#D6D6D6] w-[580px]"
              />
            </div>
            <div className="flex flex-row justify-stretch  items-center gap-x-[70px]">
              <span className="text-[#1c1d21] text-sm font-normal w-[130px]">Xác nhận mật khẩu:</span>
              <div className="flex flex-col  ">
              <input
              value={userConfirmPass}
              onChange={(e) => setUserConfirmPass(e.target.value)}
              type="password"
              className="flex items-center py-5 px-[15px] rounded-md border-[0.5px] border-solid border-[#D6D6D6] w-[580px]"
              />
              {isPassMatch ? (<></>) : (<span className="text-red-500 text-sm font-normal italic">Mật khẩu không khớp</span>)}
              </div>
            </div>
            <div className="flex justify-end mt-[50px]">
                  <button
                  disabled={isPassMatch ? false : true}
                    onClick={handleChangePassClick}
                    className="flex py-[15px] px-[30px] items-center rounded-xl bg-[#806056] text-[#fff] text-sm font-medium disabled:bg-[#E4E4E4]"
                  >
                    Lưu
                  </button>
                </div>
            </div>
          </div>
        );
    }
  };
  return (
    <div className="flex flex-col ">
      <Breadcrumbs className="bg-white w-auto h-[21px] mb-[30px] ">
        <a href="#" className="opacity-60 text-sm font-medium text-[#282E3C]">
          Trang chủ
        </a>
        <a href="#" className="opacity-60 text-sm font-medium text-[#282E3C]">
          Hồ sơ cá nhân
        </a>
        <a href="#" className=" text-sm font-medium text-[#282E3C]">
          Tổng quan
        </a>
      </Breadcrumbs>
      <div className="flex flex-col relative mb-[35px]">
        <img
          src="/cover.jpg"
          alt="cover"
          className="h-[160px] w-full object-cover rounded-2xl"
        />
        <img
          src={userImage}
          alt="user"
          className="absolute  transform  w-[100px] h-[100px] translate-x-10 translate-y-[120px] rounded-full "
        />
        <div className="absolute translate-x-[160px] translate-y-[120px] flex flex-col gap-y-[25px]">
          <span className="text-[#fff] text-xl font-bold ">{userName}</span>
          <div className="flex flex-row justify-evenly gap-x-5">
            <div className="flex-row flex items-center gap-x-[5px]">
              <IoMdMail />
              <span>{userEmail}</span>
            </div>
            <div className="flex-row flex items-center gap-x-[5px]">
              <FaPhone />
              <span>{userPhone}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] mb-[30px] mt-[50px] flex-row ">
        <button
          onClick={() => handleTabClick("overview")}
          className={`text-sm font-medium py-2 px-[15px] rounded-lg ${
            activeTab === "overview"
              ? "text-[#282E3C] bg-[#f0f0f0]"
              : "text-[#B8C2CC]"
          } focus:outline-none`}
        >
          Tổng quan
        </button>
        <Badge content={posts.length} color="brown">
        <button
          onClick={() => handleTabClick("posts")}
          className={`text-sm font-medium py-2 px-[15px] rounded-lg ${
            activeTab === "posts"
            ? "text-[#282E3C] bg-[#f0f0f0]"
            : "text-[#B8C2CC]"
          } focus:outline-none`}
          >
          Bài đăng
        </button>
          </Badge>
        <button
          onClick={() => handleTabClick("favorites")}
          className={`text-sm font-medium py-2 px-[15px] rounded-lg ${
            activeTab === "favorites"
              ? "text-[#282E3C] bg-[#f0f0f0]"
              : "text-[#B8C2CC]"
          } focus:outline-none`}
        >
          Yêu thích
        </button>
      </div>
      <hr className="border-[#D6D6D6] mb-[35px]" />
      {TabContent()}
    </div>
  );
}

export default requireAuth(AccountPage);
