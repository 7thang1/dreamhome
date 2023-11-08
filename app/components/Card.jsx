import React, {useState} from 'react';


export default function Card(props) {

    return (
        <div className='max-w-[300px] shadow-md items-center justify-center' key={props.id}>
        <img className='w-[300px] h-[203px] rounded-[6px]' src={props.image} alt='HouseImage'></img>
        <div className='max-w-[300px]  flex flex-col justify-center items-center px-[15px] py-[15px]  '>
            <span className='overflow-hidden text-ellipsis text-[14px] font-medium leading-[21px] text-[#282E3C]'>{props.name}</span>
            <div className='flex flex-row justify-between  mb-[12px] mt-[5px]  '>
                <img className='w-[16px] h-[16px] mr-[2px]' src='/location2.png' alt='location'></img>
                <span className='text-[13px] text-[#7A7C81] font-normal leading-[19.5px] mr-[22px]'>{props.location}</span>
                <span className='text-[13px] text-[#282E3C] font-medium leading-[19.5px] mr-[10px]'>Mức giá:</span>
                <span className='text-[16px] text-[#806056] font-medium leading-[24px]'>{props.price}</span>
            </div>
            <div className='flex flex-row justify-evenly mb-[18px] '>
                <img className='mr-[10px] w-[16px] h-[16px]' src='/house-icon.png' alt='house-icon'></img>
                <span className='text-[13px] text-[#282E3C] font-normal leading-[19.5px] mr-[15px]'>{props.superficiality}m<sup>2</sup></span>
                <img className='mr-[10px] w-[16px] h-[16px]' src='/bed-icon.png' alt='bed-icon' ></img>
                <span className='text-[13px] text-[#282E3C] font-normal leading-[19.5px] mr-[15px]'>{props.bedroom}</span>
                <img className='mr-[10px] w-[16px] h-[16px]' src='/bathtub-icon.png' alt='bathtub-icon'></img>
                <span className='text-[13px] text-[#282E3C] font-normal leading-[19.5px]'>{props.bathroom}</span>
                
            </div>
        <button className='w-[270px] py-2 px-[15px] gap-[10px] rounded-[5px] bg-[#806056] text-white text-[14px] font-medium leading-[21px]'>Xem chi tiết</button>
        </div>
        </div>

)
}