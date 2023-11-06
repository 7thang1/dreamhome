import React, { useState } from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled, {css} from 'styled-components';
import ProductData from '../content';
import Card from '../components/Card';

const PaginationButton = styled.button`
  background-color: #f6f8fa;
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
  ${(props) =>
    props.fade &&
    css`
      opacity: 0.5;
    `}`;
function Section3() {
    
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = ProductData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProducts = ProductData.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <section>
    <div className='max-w-[1280px] inline-flex flex-col justify-center items-start gap-[30px] mt-[60px] mb-[60px]'>
      <span className='text-[20px] text-[#000] font-semibold leading-[30px]'>Bất động sản dành cho bạn</span>
      <div className='max-w-[1280px] grid grid-cols-4 justify-center gap-x-[27px] gap-y-[50px] '>
        {currentProducts.map((card) => (
        <Card
        key={card.id}
        image={card.image}
        name={card.name}
        location={card.location}
        price={card.price}
        superficiality={card.superficiality}
        bedroom={card.bedroom}
        bathroom={card.bathroom}
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
      {pageNumbers.map(number => (
        <PaginationButton 
        key={number}
        onClick={() => setCurrentPage(number)}
        active={currentPage === number}
        fade={totalPages === 1 && number !== 1}>
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
   </section>  )
}

export default Section3