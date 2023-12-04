'use client'
import React, { useState, useEffect } from 'react'
import { Breadcrumbs } from '@material-tailwind/react';
import FilterBar from '../components/FilterBar';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled, {css} from 'styled-components';
import HorizontalCard from '../components/ProductCardHorizontal';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';
import { getPropertiesbyCategory } from "../components/API";
const PaginationButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
  props.active &&
  css`
    background-color: #ECE7E6;
    color: #806056;
  `}
 `;
function Rental() {
    const [sortByPrice, setSortByPrice] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [properties, setProperties] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [phoneNumbersHidden, setPhoneNumbersHidden] = useState(true);
    const handleToggleVisibility = () => {
        setPhoneNumbersHidden((prev) => !prev);
      };
    const tag = [
        {name: 'Hồ Chí Minh', value: '4.491'},
        {name: 'Hà Nội', value: '3.716'},
        {name: 'Bình Dương', value: '2.805'},
        {name: 'Đồng Nai', value: '2.450'},
        {name: 'Đà Nẵng', value: '1.860'},
        {name: 'Hải Phòng', value: '1.504'},
        {name: 'Bà Rịa - Vũng Tàu', value: '1.080'},
        {name: 'Bắc Ninh', value: '990'},
        {name: 'Khánh Hòa', value: '760'},
    ]
    const info = [
        {name: 'Bản đồ quy hoạch Hà Nội mới nhất 2022'},
        {name: 'Bản đồ quy hoạch Bình Dương mới nhất 2022'},
        {name: 'Bản đồ quy hoạch Đà Nẵng mới nhất 2022'},
        {name: 'Bản đồ quy hoạch Hải Phòng mới nhất 2022'},
        {name: 'Bản đồ quy hoạch Long An mới nhất 2022'},
        {name: 'Bản đồ quy hoạch Bà Rịa - Vũng Tàu mới nhất 2022'},
        {name: 'Bản đồ quy hoạch Bắc Giang mới nhất 2022'},
    ]
    const news =[
        {image: '/pic1.jpg', content: 'Chung cư và nhà ở riêng lẻ đang khởi sắc trở lại ', date: '6/12/2023  10:48 AM'},
        {image: '/pic2.jpg', content: 'Lâm Đồng chính thức phê duyệt quy hoạch sử dụng đất đến năm 2030 của thành phố Đà Lạt', date: '10/11/2023  3:24 PM'},
        {image: '/pic3.jpg', content: 'Quảng Nam: Hàng loạt resort, biệt thự du lịch, nhà hàng ven biển thấp thỏm nỗi lo sạt lở', date: '12/11/202312/11/2023  7:41 AM'},
        {image: '/pic4.jpg', content: 'Hạ Long: Tiết lộ mức giá mà hai doanh nghiệp này phải trả cho 16.000m2 đất để xây khu nhà ở thương mại', date: '10/11/2023  10:36 AM'},
        {image: '/pic5.jpg', content: 'Thứ trưởng Bộ Xây dựng nêu lý do không tăng lợi nhuận cho doanh nghiệp làm nhà xã hội', date: '30/09/2023  9:27 PM'},
        {image: '/pic6.jpg', content: 'Chung cư và nhà ở riêng lẻ đang khởi sắc trở lại ', date: '6/12/2023  4:20 PM'},
    ]
    const reseller =[
        {name: 'Cameron Williamson', phone: '0984 123 456', avatar: '/avatar2.png'},
        {name: 'Cameron Williamson', phone: '0984 123 456', avatar: '/avatar2.png'},
        {name: 'Cameron Williamson', phone: '0984 123 456', avatar: '/avatar2.png'},
        {name: 'Cameron Williamson', phone: '0984 123 456', avatar: '/avatar2.png'},
        {name: 'Cameron Williamson', phone: '0984 123 456', avatar: '/avatar2.png'},
    ]
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    const handleSortChange = (event) => {
        setSortByPrice(event.target.value);
    };
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPropertiesbyCategory('rent', currentPage);
            let sortedProperties = [...data.elements];
    
            sortedProperties = sortedProperties.map(property => {
                return {
                    ...property,
                    status: property.status === 'available' ? 'renting' : 'rented'
                };
            });
    
            if (sortByPrice === 'lowToHigh') {
                sortedProperties.sort((a, b) => a.price - b.price);
            } else if (sortByPrice === 'highToLow') {
                sortedProperties.sort((a, b) => b.price - a.price);
            }
    
            setProperties(sortedProperties);
            setTotalPages(Math.ceil(sortedProperties.length / 12));
        };
    
        fetchData();
        }, [currentPage, sortByPrice]);    
  return (
    <div className='flex  flex-col'>
          <Breadcrumbs  className='bg-white w-auto h-[21px] mb-[15px] '>
      <a href="/#" className="opacity-60 text-sm font-medium text-[#282E3C]">
        Trang chủ
      </a>
      <a href="" className="opacity-60 text-sm font-medium text-[#282E3C]">
        Bán bất động sản
      </a>
      <a href="" className=' text-sm font-medium text-[#282E3C]'>Tìm kiếm</a>
    </Breadcrumbs>
        <div className='w-full bg-gradient-green py-[15px] px-5  rounded-xl flex flex-col relative mb-10'>
            <span className='text-[#29df7d] text-2xl font-semibold mb-[5px]'>Nhà đất bán</span>
            <span className='text-[#099c4d] text-sm font-normal'>Khám phá danh sách các căn hộ, biệt thự, nhà phố và đất nền đang được bán trên toàn quốc.</span>
        </div>
        {/* <FilterBar/> */}
        <div className='flex  justify-between'>
            <div className='flex flex-col max-w-[1000px]'>
                <div className='flex justify-between mb-[30px]'>
                    <span className='text-[#000] text-lg font-medium'>Hiện có 17.645 kết quả</span>
                    <div>
                            <select
                                id="sortPrice"
                                name="sortPrice"
                                className='border border-[#D6D6D6] rounded-lg p-1 w-[200px] bg-[#fff] py-[10px] px-[15px] text-[#868798] text-sm font-normal'
                                value={sortByPrice}
                                onChange={handleSortChange}
                            >
                                <option value="highToLow">Giá cao đến thấp</option>
                                <option value="lowToHigh">Giá thấp đến cao</option>
                            </select>
                    </div>
                </div>
                <div className='flex flex-col gap-y-10'>
                {properties.map((property) => (
                <HorizontalCard
                key={property.id}
                image={property.image_url}
                name={property.property_name}
                location={`${property.address}, ${property.district_name}, ${property.province_name}`}
                price={property.price}
                superficiality={property.area}
                bedroom={property.bedroom}
                bathroom={property.bathroom}
                status={property.status}
                
                />
                    ))}
                </div>
                <div className='flex items-center justify-center gap-[10px] mt-[60px] mb-[60px]'>
    <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          >
            {<GrFormPrevious className='w-[20px] h-[20px]' />}
        </PaginationButton>
      {pageNumbers.map(number => (
        <PaginationButton  
        key={number}
        onClick={() => setCurrentPage(number)} 
        className={` ${currentPage === number ? 'active' : ''}`}
        >
          {number}
        </PaginationButton>
      ))}
       <PaginationButton
       
           onClick={() => setCurrentPage(currentPage + 1)}
           disabled={currentPage === totalPages}
          >
            {<GrFormNext className='w-[20px] h-[20px]' />}
        </PaginationButton>
    </div>

    <div className='max-w-[1000px] flex flex-col '>
        <span className='text-[#000] text-lg font-semibold mb-5' >Tìm kiếm theo từ khóa</span>
        <div className='flex gap-x-[30px] gap-y-[15px] flex-wrap'>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                     Bán nhà ngõ Quỳnh Hai Bà Trưng 
                </div>
            </Link>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                     Bán nhà ngõ Quỳnh 
                </div>
            </Link>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                     Bán nhà quận 7
                </div>
            </Link>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                     Bán nhà ở đường Kha Vạn Cân
                </div>
            </Link>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                     Bán nhà HẺM HUỲNH VĂN BÁNH
                </div>
            </Link>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                    Bán đất gần làng đại học Thủ Đức 
                </div>
            </Link>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                     Bán đất gần cầu Đông Trù
                </div>
            </Link>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                     Bán nhà gần công viên Lê Thị Riêng 
                </div>
            </Link>
            <Link href='#'>
                <div className='flex py-[6px] px-[15px] justify-center items-center rounded-lg bg-[#F6F8FA] text-sm font-normal whitespace-nowrap'>
                      Bán nhà ngõ Quỳnh Hai Bà Trưng 
                </div>
            </Link>

        </div>

    </div>
            </div>
            <div className='flex flex-col w-[243px] gap-y-[35px]'>
                <div className='rounded-[20px] border-[0.5px] border-solid border-[#f5f5f5] shadow-sm flex-col flex p-5'>
                    <span className='text-[#806056] text-base font-semibold uppercase mb-[10px]'>Mua bán nhà đất</span>
                    <hr className='border-[#806056] mb-[15px]'/>
                    <div className='flex flex-col gap-y-[15px]'>
                        {tag.map((item) => (
                            <div className='flex justify-between h-6'>
                                <span className='text-[#6f737E] text-[13px] font-normal'>{item.name}</span>
                                <div className='px-[10px] py-[2px]  flex justify-center items-center rounded-md border-[0.5px] border-solid border-[#806056] text-[#806056]'>{item.value}</div>
                            </div>
                       
                       ))}
                    </div>

                </div>
                <div className='rounded-[20px] border-[0.5px] border-solid border-[#f5f5f5] shadow-sm p-5 flex flex-col'>
                <span className='text-[#806056] text-base font-semibold uppercase mb-[10px]'>BẢN ĐỒ, THÔNG TIN QUY HOẠCH CÁC TỈNH/TP</span>
                <hr className='border-[#806056] mb-[15px]'/>
                            <div className='flex flex-col gap-y-[15px] mb-[15px]'>
                                {info.map((item) => (
                                    <div className='flex flex-wrap text-[#6f737E] text-sm font-normal'>
                                        {item.name}
                                    </div>
                                ))}

                            </div>
                            <hr className='border-[#806056] mb-[10px]'/>
                            <a className='text-[#806056] text-sm font-normal self-center cursor-pointer'>Xem thêm</a>

                </div>
                <div className='rounded-[20px] border-[0.5px] border-solid border-[#f5f5f5] shadow-sm p-5 flex flex-col'>
                <span className='text-[#806056] text-base font-semibold uppercase mb-[10px]'>TIN TỨC NỔI BẬT</span>
                <hr className='border-[#806056] mb-[15px]'/>
                <div className='flex flex-col gap-y-5 mb-[15px]'>

                {news.map((item) => (
                    <div className='flex flex-row gap-x-[10px]'>
                        <img src={item.image} alt="news" className='w-[52px] h-[52px] rounded-lg'></img>
                        <div className='flex flex-col overflow-hidden max-h-[57px]'>
                            <span className='text-[#282E3C] text-[13px] font-medium overflow-hidden   '>{item.content}</span>
                            <span className='text-[#6f737E] text-[12px] font-normal'>{item.date}</span>
                        </div>

                    </div>))}
                        </div>
                <hr className='border-[#806056] mb-[10px]'/>
                            <a className='text-[#806056] text-sm font-normal self-center cursor-pointer'>Xem thêm</a>
                </div>

                <div className='rounded-[20px] border-[0.5px] border-solid border-[#f5f5f5] shadow-sm p-5 flex flex-col'>
                <span className='text-[#806056] text-base font-semibold uppercase mb-[10px]'>Nhà môi giới nổi bật</span>
                <hr className='border-[#806056] mb-[15px]'/>
                <div className='flex flex-col gap-y-5 '>

                {reseller.map((item) => (
                    <div className='flex flex-row gap-x-[10px]'>
                        <img src={item.avatar} alt="news" className='w-[50px] h-[50px] rounded-full'></img>
                        <div className='flex flex-col overflow-hidden max-h-[57px] gap-y-[5px]'>
                            <span className='text-[#000] text-sm font-medium overflow-hidden   '>{item.name}</span>
                            <div className='flex justify-between'>
                            <span className='text-[#6f737E] text-[12px] font-normal'>{phoneNumbersHidden ? `${item.phone.slice(0, -7)}******` : item.phone}</span>
                            <button onClick={handleToggleVisibility}>
                            {phoneNumbersHidden ? <FaEyeSlash className='w-4 h-3'/> : <IoEyeSharp className='w-4 h-3'/>}
                            </button>
                            </div>
                        </div>

                    </div>))}
                        </div>
                </div>
                <div className='rounded-[20px] border-[0.5px] border-solid border-[#f5f5f5] shadow-sm p-5 flex flex-col'>
                <span className='text-[#806056] text-base font-semibold uppercase mb-[10px]'>HỖ TRỢ TIỆN ÍCH</span>
                <hr className='border-[#806056] mb-[15px]'/>
                <div className='flex flex-col gap-y-[15px] '>
                    <a className='text-[#6F737E] text-sm font-normal cursor-pointer'>Tư vấn phong thủy</a>
                    <a className='text-[#6F737E] text-sm font-normal cursor-pointer'>Dự tính chi phí làm nhà</a>
                    <a className='text-[#6F737E] text-sm font-normal cursor-pointer'>Tính lãi suất</a>
                    <a className='text-[#6F737E] text-sm font-normal cursor-pointer'>Quy trình xây nhà</a>
                    <a className='text-[#6F737E] text-sm font-normal cursor-pointer'>Xem tuổi làm nhà</a>
                </div>
                </div>

             
            </div>
        </div>
    </div>
  )
}

export default Rental