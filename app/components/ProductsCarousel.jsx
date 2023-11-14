import React, { useState } from 'react';
import Card from './Card';
import ProductData from '../content';

const ProductsPerPage = 4;

const ProductCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = ProductData.length;
  const totalPages = Math.ceil(totalProducts / ProductsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div style={{ position: 'relative' }}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <div key={index} style={{ display: index + 1 === currentPage ? 'block' : 'none' }}>
          <div className='flex flex-row gap-[27px]'>
            {ProductData.slice(index * ProductsPerPage, (index + 1) * ProductsPerPage).map((card) => (
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
      ))}
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 0 }}>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          &lt; {/* Left arrow */}
        </button>
      </div>
      <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 0 }}>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          &gt; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
