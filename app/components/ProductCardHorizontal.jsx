import React, {useState} from 'react'
import Link from 'next/link';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
function ProductCardHorizontal(props) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isSelling, setIsSelling] = useState(props.status === 'selling' ? true : false);

    const handleBookmarkClick = () => {
        
        setIsBookmarked(!isBookmarked);
      };
  return (
    <Link href='#' scroll={false}>
    <div key={props.id} className='max-w-[1000px] rounded-lg flex flex-row gap-x-[30px] bg-[#f8f8f8]'>
        <div className ='max-w-[300px] max-h-[273px] relative' >
            <img src={props.image} alt='HouseImage' className='w-full h-full rounded-lg' ></img>
            <button
        className='w-[30px] h-[30px] absolute right-0 top-0 mt-[10px] mr-[10px] rounded-md cursor-pointer flex justify-center items-center bg-[#8c8c8c] opacity-50  ' onClick={handleBookmarkClick}>
        {isBookmarked ? <AiFillHeart color='white' size={20} /> : <AiOutlineHeart color='white' size={20} />}</button>
        {isSelling ? (<div className='py-[5px] px-[10px] inline-flex items-center rounded-lg bg-[#F24D4DCC] text-white  text-[12px] font-medium absolute top-0 left-0 mt-[10px] ml-[10px]'>Đã bán </div> ):( <div className='py-[5px] px-[10px] inline-flex items-center rounded-lg bg-[#29DF7DCC] text-white  text-[12px] font-medium absolute top-0 left-0 mt-[10px] ml-[10px]'>Đang bán </div> )} 
        </div>
        <div className='flex flex-col py-[15px] pr-[30px]'>
            <span className='text-[#000] text-xl font-semibold max-w-[638px] mb-[10px] '>{props.name}</span>
            <span className='text-[#727386] text-sm font-medium mb-[10px]'>Dự án KDC Phú Mỹ, Đường Hoàng Quốc Việt, Phường Phú Mỹ, Quận 7, Hồ Chí Minh</span>
            <span className='text-[#282E3C] text-sm font-normal mb-[15px]'>{props.location}</span>
            <div className='flex flex-row gap-x-10 mb-[10px]'>
                <div className='max-w-[100px] flex flex-col flex-wrap'>
                    <span className='text-[#727386] text-sm font-medium'>Mức giá</span>
                    <span className='text-[#806056] text-[22px] font-bold'>{props.price}</span>
                </div>
                <div className='max-w-[100px] flex flex-col'>
                    <span className='text-[#727386] text-sm font-medium'>Phòng ngủ</span>
                    <span className='text-[#282E3C] text-[22px] font-semibold'>{props.bedroom}</span>
                </div>
                <div className='max-w-[100px] flex flex-col'>
                    <span className='text-[#727386] text-sm font-medium'>Phòng tắm</span>
                    <span className='text-[#282E3C] text-[22px] font-semibold'>{props.bathroom}</span>
                </div>
                <div className='max-w-[100px] flex flex-col'>
                    <span className='text-[#727386] text-sm font-medium'>Diện tích</span>
                    <span className='text-[#282E3C] text-[22px] font-semibold'>{props.superficiality}m<sup>2</sup></span>
                </div>
                <div className='max-w-[100px] flex flex-col'>
                    <span className='text-[#727386] text-sm font-medium'>Năm xây dựng</span>
                    <span className='text-[#282E3C] text-[22px] font-semibold'>2017</span>
                </div>
                <div className='max-w-[100px] flex flex-col'>
                    <span className='text-[#727386] text-sm font-medium'>Bãi đỗ xe</span>
                    <span className='text-[#282E3C] text-[22px] font-semibold'>1</span>
                </div>
                
            </div>
            <hr/>
            <div className='mt-[10px] flex justify-between'>
                <span className='text-[#6F737E] text-[13px] font-normal'>Ngày đăng: 27-10-2023</span>
                <span className='text-[#6F737E] text-[13px] font-normal'>Còn lại 30 ngày</span>

            </div>

        </div>

    </div>
    </Link>
  )
}

export default ProductCardHorizontal