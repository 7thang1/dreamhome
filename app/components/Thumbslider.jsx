import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Avatar } from "@material-tailwind/react";
import Link from 'next/link';
const VerticalThumbnailSlider = ({images}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // const handleShowCarousel = () => {
  //   setShowCarousel(true);
  // };

  // const handleCloseCarousel = () => {
  //   setShowCarousel(false);
  // };
 
  return (
    <div className="flex mb-[30px] max-w-[995px] max-h-[561px]">
      <div className="flex flex-col gap-[27px] relative">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={`w-[180px] h-[120px] cursor-pointer ${
              index === selectedImageIndex ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image} alt={`Product ${index + 1}`} className="w-[180px] h-[120px]" />
          </div>
        ))}
        {images.length > 4 && (
          <div
            className="flex items-center justify-center w-[180px] h-[120px] opacity-70 absolute bottom-0  bg-gray-800 text-white p-2 cursor-pointer"
            // onClick={handleShowCarousel}
          >
            +{images.length - 4}
          </div>
        )}
      </div>
      <div className="relative w-fit h-fit ml-[25px]">
        <img src={images[selectedImageIndex]} alt={`Product ${selectedImageIndex + 1}`} className="w-[790px] h-[498px] rounded-lg " />
        <div className="z-10 w-[30px] h-[30px] absolute top-1/2 left-[30px] transform -translate-y-1/2  rounded-full">
  <button
    onClick={handlePrevClick}
    className="bg-white  text-black  rounded-full w-[30px] h-[30px] flex justify-center items-center border-solid border-[1px] border-black"
  >
    <IoIosArrowBack className='w-[20px] h-[20px]' />
  </button>
</div>

<div className="z-10 w-[30px] h-[30px] absolute top-1/2 right-[20px] transform -translate-y-1/2  rounded-full">
  <button
    onClick={handleNextClick}
    className="bg-white text-black  rounded-full w-[30px] h-[30px] flex justify-center items-center border-solid border-[1px] border-black"
  >
    <IoIosArrowForward className='w-[20px] h-[20px]' />
  </button>
</div>
      </div>
      {/* {showCarousel && ( */}
        {/* <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          Add your carousel component here
          <div className="text-white">
            <p>Carousel</p>
            <button onClick={handleCloseCarousel}>Close</button>
          </div>
        </div> */}
      {/* )} */}
  
    </div>
  );
};

export default VerticalThumbnailSlider;
