import React, { useState, useRef } from 'react';
import Card from './ProductCard';
import ProductData from '../content';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';



const ProductCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className=''>
      <p className='text-[#000] text-xl font-semibold mb-[30px] '>Bất động sản dành cho bạn</p>
      <div className='relative w-auto h-auto'>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}

      >
        {ProductData.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              image={product.image}
              name={product.name}
              location={product.location}
              price={product.price}
              superficiality={product.superficiality}
              bedroom={product.bedroom}
              bathroom={product.bathroom}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-10 w-[30px] h-[30px] absolute top-1/2 left-0 transform -translate-y-1/2  rounded-full">
  <button
    onClick={() => swiperRef.current.slidePrev()}
    className="bg-black  text-white  rounded-full w-[30px] h-[30px] flex justify-center items-center"
  >
    <IoIosArrowBack className='w-[20px] h-[20px]' />
  </button>
</div>

<div className="z-10 w-[30px] h-[30px] absolute top-1/2 right-0 transform -translate-y-1/2  rounded-full">
  <button
    onClick={() => swiperRef.current.slideNext()}
    className="bg-black text-white  rounded-full w-[30px] h-[30px] flex justify-center items-center"
  >
    <IoIosArrowForward className='w-[20px] h-[20px]' />
  </button>
</div>
        </div>
    </div>
  );
};

export default ProductCarousel;
