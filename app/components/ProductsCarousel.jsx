import React, { useState, useRef, useEffect } from 'react';
import Card from './ProductCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { getListProperty } from './API';



const ProductCarousel = () => {
  const swiperRef = useRef(null);
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
 
  const fetchData = async (page) => {
    try {
      const data = await getListProperty(page);
      if (data) {
        setProperties(data.elements);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
useEffect(() => {
    fetchData(currentPage);

  }, [currentPage]);
  return (
    <div className='mb-[30px]'>
      <p className='text-[#000] text-xl font-semibold mb-[30px] '>Bất động sản dành cho bạn</p>
      <div className='relative w-auto h-auto'>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}

      >
        {properties.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              image={product.image_url}
              name={product.name}
              location={product.district_name + ', ' + product.province_name}
              price={product.price}
              superficiality={product.area}
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
