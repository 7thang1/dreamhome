import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import { addBookmark, removeBookmark, getBookmarkslist } from './API';
function Card(props) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [userBookmarks, setUserBookmarks] = useState([]); 
    const convertPrice = (price) => {
        const hasTrailingZeros = price % 1000000 === 0;
        if (price >= 1000000000 && hasTrailingZeros) {
          // Nếu giá lớn hơn hoặc bằng 1 tỷ và có chứa số 0 ở cuối, chuyển đổi sang tỷ
          return `${(price / 1000000000).toFixed(2)} tỷ`;
        } else if (price >= 1000000) {
          // Nếu giá lớn hơn hoặc bằng 1 triệu, chuyển đổi sang triệu
          return `${(price / 1000000).toFixed(2)} triệu`;
        } else {
          // Nếu giá nhỏ hơn 1 triệu, hiển thị theo đơn vị hiện tại
          return `${price}`;
        }
      };
      const convertArea = (area) => {
        const roundedArea = Number(area).toFixed(0);
        return roundedArea;
      }
    const handleBookmarkClick = () => {
      setIsBookmarked(!isBookmarked);
      if (isBookmarked) {
        removeBookmark(props.id);
      } else {
        addBookmark(props.id);
      }
    };
    useEffect(()=>{
        const fetchBookmarks = async () => {
          const bookmarks = await getBookmarkslist();
          if (!bookmarks) {
            setUserBookmarks(bookmarks.elements);
            bookmarks.elements.forEach((bookmark) => {
            if (bookmark.property_id === props.id) {
              setIsBookmarked(true);
            }
          });
        }
        };
        fetchBookmarks();
    }, [props.id])
    return (
        <div className='max-w-[300px] shadow-md items-center  flex flex-col' key={props.id}>
        <img className='w-[300px] h-[203px] rounded-[6px]' src={props.image} alt='HouseImage'></img>
        <button
        className='w-[30px] h-[30px] absolute rounded-md cursor-pointer flex justify-center items-center bg-[#8c8c8c] opacity-50  self-end mr-[10px] mt-[10px] ' onClick={handleBookmarkClick}>
        {isBookmarked ? <AiFillHeart color='white' size={20} /> : <AiOutlineHeart color='white' size={20} />}</button>
        <div className='max-w-[300px]  flex flex-col justify-center items-center px-[15px] py-[15px]  '>
            <span className='overflow-hidden text-ellipsis text-[14px] font-medium leading-[21px] text-[#282E3C]'>{props.name}</span>
            <div className='flex flex-row   mb-[12px] mt-[5px]  '>
                <img className='w-[16px] h-[16px] mr-[2px]' src='/location2.png' alt='location'></img>
                <span className='text-[13px] text-[#7A7C81] font-normal leading-[19.5px] mr-[22px]'>{props.location}</span>
                <span className='text-[13px] text-[#282E3C] font-medium leading-[19.5px] mr-[10px]'>Mức giá:</span>
                <span className='text-[16px] text-[#806056] font-medium leading-[24px]'>{convertPrice(props.price)}</span>
            </div>
            <div className='flex flex-row justify-evenly mb-[18px] '>
                <img className='mr-[10px] w-[16px] h-[16px]' src='/house-icon.png' alt='house-icon'></img>
                <span className='text-[13px] text-[#282E3C] font-normal leading-[19.5px] mr-[15px]'>{convertArea(props.superficiality)}m<sup>2</sup></span>
                <img className='mr-[10px] w-[16px] h-[16px]' src='/bed-icon.png' alt='bed-icon' ></img>
                <span className='text-[13px] text-[#282E3C] font-normal leading-[19.5px] mr-[15px]'>{props.bedroom}</span>
                <img className='mr-[10px] w-[16px] h-[16px]' src='/bathtub-icon.png' alt='bathtub-icon'></img>
                <span className='text-[13px] text-[#282E3C] font-normal leading-[19.5px]'>{props.bathroom}</span>
                
            </div>
            <Link href={`/properties/${props.id}`}>
            <button className='w-[270px] py-2 px-[15px] gap-[10px] rounded-[5px] bg-[#806056] text-white text-[14px] font-medium leading-[21px] hover:scale-110 ease-in-out duration-500 active:bg-[#5a4038]'>
                Xem chi tiết
            </button>
            </Link>
        </div>
        </div>

)
}
export default Card;