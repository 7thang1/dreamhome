'use client'
import React, { useState } from 'react'
import { Breadcrumbs, Avatar,  } from "@material-tailwind/react";
import ProductCarousel from '../components/ProductsCarousel';
import VerticalThumbnailSlider from '../components/Thumbslider';
import Link from 'next/link';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import FilterBar from '../components/FilterBar';
function Detailed(props) {
    const [locationFilter, setLocationFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [superficialityFilter, setSuperficialityFilter] = useState('');  
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const keywords = ['Quận 7', 'Thủ Đức', 'Quận 1', 'Tân Bình', 'Bình Thạnh', 'Bình Chánh', 'Phú Nhuận', 'Quận 9', 'Quận 10', 'Quận 11', 'Quận 8' , 'Quận 4'];
  const phoneNumber = '0902090909';
  const [isBookmarked, setIsBookmarked] = useState(false);


    const handleBookmarkClick = () => {
      setIsBookmarked(!isBookmarked);
    };

    const handleTogglePhoneNumber = () => {
      setShowPhoneNumber(!showPhoneNumber);
    };
  
    const getMaskedPhoneNumber = () => {
      const visiblePart = showPhoneNumber ? phoneNumber : phoneNumber.slice(0, -6).padEnd(10, '*');
      return `${visiblePart.slice(0, 4)} ${visiblePart.slice(4, 7)} ${visiblePart.slice(7)}`;
    };
  return (
    <div className='mt-10 max-w-[1280px]'>
         <Breadcrumbs  className='bg-white w-auto h-[21px] '>
      <a href="/#" className="opacity-60 text-sm font-medium text-[#282E3C]">
        Trang chủ
      </a>
      <a href="" className="opacity-60 text-sm font-medium text-[#282E3C]">
        Bán bất động sản
      </a>
      <a href="" className=' text-sm font-medium text-[#282E3C]'>Tìm kiếm</a>
      <a href="" className=' text-sm font-medium text-[#282E3C]'>Nhà đất mặt tiền Hai Bà Trưng  Quận 1</a>
    </Breadcrumbs>
    <FilterBar/>

    <div className='flex max-w-[1280px] flex-wrap mb-20 '>
<VerticalThumbnailSlider/>
      {/* Contact Div */}
<div className='flex flex-col ml-[25px]'>
      <div className='w-[260px] h-[265px] flex flex-col items-center  border-[0.5px] border-solid border-[#D6D6D6] bg-[#fff] rounded-t-md  '>
        <div className='flex items-center justify-center w-[65px] h-[65px] mt-[30px] p-[3px] rounded-full bg-white border-[1px] border-[#BCACA7]'>
          <Avatar className='w-[60px] h-[60px]' src='/avatar.jpg' alt='avatar'/>
        </div>
        <span className='mt-[6px] text-[#848484] text-[13px] font-normal leading-[19.5px]'>Người đăng</span>
        <span className='mt-[5px] text-[#000] text-base font-bold'>Cameron Williamson</span>
        <div className='w-[230px] h-[44px] rounded-md bg-[#ECE7E6] mt-[15px] mb-[14px] p-[15px] flex justify-between items-center'>
        <span className='text-[#282E3C] text-[13px] font-normal '>{getMaskedPhoneNumber()}</span>
            <a
              className='text-[#806056] text-[13px] font-medium underline cursor-pointer'
              onClick={handleTogglePhoneNumber}
            >
              {showPhoneNumber ? 'Ẩn số' : 'Hiển thị số'}
            </a>
        </div>
        <Link className='flex items-center text-[#6f737e]' href=''>
        <span className='text-sm font-medium mr-[7px]'>5 bài đăng khác</span>
        <img className='w-[12px] h-[12px] fill-current   ' src='/arrow.svg' alt='arrow'></img>
        </Link>
      </div>
      <div className='mb-[30px] w-[260px] h-[171px] flex flex-col items-center px-[15px] bg-gray-100 opacity-90 border-[0.5px] border-solid border-[#D6D6D6] rounded-b-md'>
        <button className='w-[230px] flex px-[15px] py-3 justify-center items-center gap-[10px] text-sm font-normal text-[#fff] rounded-lg bg-[#806056] mt-[25px]'>
          <img src='/mail.jpg' alt='mail' className='w-6 h-6'/>
          <p>Liên hệ email</p>
        </button>
        <button className='w-[230px] flex px-[15px] py-3 justify-center items-center gap-[10px] text-sm font-normal text-[#806056] rounded-lg bg-transparent border-[1px] border-solid border-[#806056] mt-5'>
          <img src='/zalo.jpg' alt='zalo' className='w-6 h-6 '/>
          <p>Chat qua Zalo</p>
        </button>
      </div>
      <div className='flex flex-col'>
        <span className='text-[#282E3C] text-sm font-normal'>Từ khóa:</span>
        <div className='max-w-[260px] h-auto flex flex-wrap gap-3'>
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className="w-auto h-[32px] px-[15px] justify-center flex items-center whitespace-nowrap  rounded-lg bg-[#F6F8FA] text-[13px]"
          >
            {keyword}
          </div>
        ))}
        </div>
      </div>
    </div>
            {/* Advertise */}
          <div className='max-w-[160px] max-h-[500px] mt-[-83px]'>
            <Link href=''>
            <img src='/ad1.gif' alt='ad1' ></img>
            </Link>

          </div>
          <div className='max-w-[790px] ml-[45px] mr-[35px] mt-[-166px] flex flex-col'>
            {/* Info Section 1 */}
            <div className='flex '>
            <p className='text-[#000] text-[22px] font-semibold mr-7'>Nhà mặt tiền Hai Bà Trưng Quận 1 đang có hợp đồng thuê sẵn, kinh doanh tốt, hai mặt tiền</p>
            <button className='max-w-[40px] max-h-[40px] flex p-[11px] mr-[10px] justify-center items-center rounded-full bg-[#F6F8FA]'>
              <img src='/share.png' alt='share' className='' ></img>
              </button>
            <button 
            onClick={handleBookmarkClick}
            className='max-w-[40px] max-h-[40px] flex p-[11px] justify-center items-center rounded-full bg-[#F6F8FA]'>
               {isBookmarked ? <AiFillHeart color='red'  size={20} /> : <AiOutlineHeart  size={20} />}
              </button>
            </div>
            <span className='text-[#727386] text-sm font-medium mb-[10px] '>Dự án KDC Phú Mỹ, Đường Hoàng Quốc Việt, Phường Phú Mỹ, Quận 7, Hồ Chí Minh</span>
            <span className='text-[#282E3C] text-sm font-normal mb-5 '>Địa chỉ: Đường Hoàng Quốc Việt, Phường Phú Mỹ, Quận 7, Hồ Chí Minh</span>
            <hr/>
              {/* Info Section 2 */}
            <div className='mt-[30px] max-w-[790px] flex justify-stretch gap-x-[100px] '>
              <div className=''>
              <div className='flex flex-col mb-[23px] '>
                <span className='text-[#727386] text-sm font-medium'>Mức giá</span>
                <span className='text-[#806056] text-3xl font-bold'>60 tỷ <span className='text-[#282E3C] text-sm font-normal'>~1,33 tỷ/m²</span></span>
              </div>
              <div className='flex flex-col gap-[15px]'>
                <span className='text-[#727386] text-sm font-medium'>Mức độ an toàn</span>
                <img src='/safebar.svg' alt='safebar' className='max-w-[137px]'></img>
              </div>
              </div>
              <div className='grid grid-cols-3 grid-rows-3 gap-y-[25px] max-w-[442px] gap-x-[100px]  '>
                <div className='flex flex-col max-w-[100px] '>
                  <span className='text-[#727386] text-sm font-medium'>Phòng ngủ</span>
                  <span className='text-[#282E3C] text-[22px] font-semibold'>4</span>
                </div>
                <div className='flex flex-col max-w-[100px] '>
                  <span className='text-[#727386] text-sm font-medium'>Phòng tắm</span>
                  <span className='text-[#282E3C] text-[22px] font-semibold'>2</span>
                </div>
                <div className='flex flex-col max-w-[100px] '>
                  <span className='text-[#727386] text-sm font-medium'>Diện tích</span>
                  <span className='text-[#282E3C] text-[22px] font-semibold'>360 m²</span>
                </div>
                <div className='flex flex-col max-w-[100px] flex-wrap whitespace-nowrap '>
                  <span className='text-[#727386] text-sm font-medium'>Năm xây dựng</span>
                  <span className='text-[#282E3C] text-[22px] font-semibold'>2017</span>
                </div>
                <div className='flex flex-col max-w-[100px] flex-wrap whitespace-nowrap '>
                  <span className='text-[#727386] text-sm font-medium'>Bãi đỗ xe</span>
                  <span className='text-[#282E3C] text-[22px] font-semibold'>1</span>
                </div>
                <div className='flex flex-col max-w-[100px] flex-wrap whitespace-nowrap '>
                  <span className='text-[#727386] text-sm font-medium'>Trạng thái</span>
                  <div className='flex px-[15px] py-[6px] bg-[#29DF7D] rounded-lg text-white  text-[13px] font-normal'>Đang bán</div>
                </div>
                <div className='flex flex-col max-w-[100px] flex-wrap whitespace-nowrap '>
                  <span className='text-[#727386] text-sm font-medium'>Ngày đăng </span>
                  <span className='text-[#282E3C] text-[22px] font-semibold'>27-10-2023</span>

                </div>
                <div className='flex flex-col max-w-[100px] flex-wrap whitespace-nowrap '>
                  <span className='text-[#727386] text-sm font-medium'>Ngày hết hạn</span>
                  <span className='text-[#282E3C] text-[22px] font-semibold'>06-11-2023</span>

                </div>
                <div className='flex flex-col max-w-[100px] flex-wrap whitespace-nowrap '>
                  <span className='text-[#727386] text-sm font-medium'>Loại tin</span>
                  <div className='flex px-[15px] py-[6px] bg-[#F6F8FA] rounded-lg text-[#282E3C]  text-[13px] font-normal'>Tin thường</div>
                </div>

              </div>
          </div>
          {/* Info Section 3 */}
          <div className='flex justify-stretch max-w-[790px] mt-10 gap-x-[137px] '>
            <span className='text-[#000] text-base font-semibold'>Thông tin mô tả</span>
            <div className='max-w-[520px] flex-wrap flex  text-[#6F737E] text-base font-normal leading-7'>
              Chính chủ bán gấp tòa nhà mặt tiền Hai Bà Trưng, Phường Bến Thành, Quận 1.
              - Diện tích: 9 x 40m.
              - Kết cấu: 5 tầng.
              - HĐ thuê: 400 triệu tháng.
              - Pháp lý cá nhân sổ hồng.
              - Giá: 110 tỷ.
              - Vị trí siêu đắc địa, tuyến đường thương hiệu kinh doanh sầm uất: Ngân hàng, nhà hàng, khách sạn, thẫm mỹ viện, thời trang cao cấp, kinh doanh vàng bạc đá quý, đa ngành nghề,...
              </div> 
          </div>

            </div>
    </div>
    <ProductCarousel/>
    </div>
  )
}

export default Detailed