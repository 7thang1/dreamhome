import React, { useState, useEffect } from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled, {css} from 'styled-components';
import ProductData from '../content';
import Card from '../components/ProductCard';
import { getListProperty } from '../components/API';
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
function Section3() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListProperty();
      const startIndex = (currentPage - 1) * 12;
  const endIndex = startIndex + 12;
  const slicedData = data.elements.slice(startIndex, endIndex);

  setProperties(slicedData);
  setTotalPages(Math.ceil(data.elements.length / 12));
    }
    fetchData();
  }, [currentPage]);

  return (
    <section>
    <div className=' inline-flex flex-col justify-center items-start gap-[30px] mt-[60px] mb-[60px]'>
      <span className='text-[20px] text-[#000] font-semibold leading-[30px]'>Bất động sản dành cho bạn</span>
      <div className=' grid grid-cols-4 justify-center gap-x-[27px] gap-y-[50px] '>
        {properties.map((property) => (
        <Card
        key={property.property_id}
        id={property.property_id}
        name={property.property_name}
        location={`${property.district_name}, ${property.province_name}`} 
        price={property.price}
        image={property.image_url}
        superficiality={property.area}
        bedroom={property.bedroom}
        bathroom={property.bathroom}
        />  
        ))}
      </div>
    </div>
    <div className='flex items-center justify-center gap-[10px]'>
    <PaginationButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          >
            {<GrFormPrevious className='w-[20px] h-[20px]' />}
        </PaginationButton>
        {[...Array(totalPages).keys()].map(page => (
          <PaginationButton
            key={page + 1}
            onClick={() => setCurrentPage(page + 1)}
            active={currentPage === page + 1}  
          >
            {page + 1}
          </PaginationButton>  
        ))}
       <PaginationButton
       
           onClick={() => setCurrentPage(currentPage + 1)}
           disabled={currentPage === totalPages}
          >
            {<GrFormNext className='w-[20px] h-[20px]' />}
        </PaginationButton>
    </div>
   </section>  )
}

export default Section3