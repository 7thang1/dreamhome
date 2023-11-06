import React, { useState } from 'react';
import FeedBack from '../feedback';

function Section6() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalItems = FeedBack.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <div className='max-w-[1280px] h-[528px] flex flex-col items-center bg-[#F6F8FA] rounded-xl px-[15px] mb-20'>
        <img className='absolute w-[80px] h-[130px] self-end' src='./Frame16.svg' alt='feedback-image'></img>
      <div className='inline-flex justify-center items-center gap-[18px] mt-[90px] mb-[10px]'>
        <div className='w-[48px] h-[5px] bg-[#806056]' />
        <span className='text-base font-semibold text-[#806056]'>Phản hồi người dùng</span>
      </div>
      <span className='text-[18px] font-bold text-[#3A4C61] leading-[27px] uppercase mb-[45px]'>Những gì người khác nói về chúng tôi?</span>
      <div className='flex grid-cols-3 gap-10 py-[25px] rounded-xl '>
        {FeedBack.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((feed) => (
          <div
            className='max-w-[370px] p-[25px] flex flex-col items-center rounded-xl shadow-md bg-[#fff] '
            key={feed.id}
          >
            <img className='absolute w-[58px] h-[58px] self-end mt-[75px] ' src='./feedback-image.png' alt='feedback-image'></img>
            <span className='text-[13px] font-normal leading-[19.5px] text-[#6F737E]'>{feed.content}</span>
            <div className='mt-[20px] flex self-start'>
              <img src={feed.avatar} alt='avatar' className='w-[70px] h-[70px] rounded-full' />
              <div className='ml-[16.5px]'>
                <span className='text-[14px] font-medium leading-[21px] text-center text-[#000] '>{feed.name}</span>
                <div className='flex mt-[10px]'>
                  {Array.from({ length: feed.rating }, (_, index) => (
                    <img className='mr-[10px]' src='./star.svg' alt='star' key={index} style={{ fill: '#FFD700' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-[40px]'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentIndex === index ? 'bg-[#000]' : 'bg-[#ccc]'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Section6;
