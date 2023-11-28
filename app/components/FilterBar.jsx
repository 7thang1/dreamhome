import React, { useState } from 'react'

function FilterBar() {
    const [locationFilter, setLocationFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [superficialityFilter, setSuperficialityFilter] = useState('');  
  return (
    <div className='flex flex-row mt-5 py-6 px-[30px]  justify-center gap-[30px] items-end border-[1px] border-solid rounded-2xl mb-10 '>
    <div className='w-[310px] h-[50px] rounded-lg bg-[#F8F8F8] flex items-center p-[13px] '>
        <img src='/search.png' alt='search' className='fill-[#6F737E] w-[25px] h-[25px] '></img>
        <input
        type='text'
        placeholder='Gõ từ khóa tìm kiếm nhà đất bán'
        className='bg-transparent ml-[23px] text-sm font-normal text-black w-[215px] focus:outline-none'
        >
        </input>
    </div>
    <div className='flex flex-row gap-[30px] justify-center items-center h-11 w-auto'>
    <div className='last:b  order-r-0 flex-col flex h-[44px] w-auto '>
    <label className='font-semibold text-[12px] '>Vị trí</label>
    <select className='bg-[#fff] w-auto h-[21px] text-[14px] font-normal text-[#7d7d7d] mt-[5px] appearance-none ' value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
    <option value="">Nơi bạn muốn sống</option>
      <option value="location1">Location 1</option>
      <option value="location2">Location 2</option>
      <option value="location3">Location 3</option>
    </select>
  </div>
  <div className='w-[1px] h-[45px] bg-[#553C3433]'></div>
  <div className='last:border-r-0 flex-col flex h-[44px] w-auto  '>
    <label className='font-semibold text-[12px] '>Mức giá</label>
    <select className='bg-[#fff] w-auto h-[21px] text-[14px] font-normal  text-[#7d7d7d] mt-[5px]   ' value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
    <option value="">Chọn mức giá</option>
      <option value="location1">Option 1</option>
      <option value="location2">Option 2</option>
      <option value="location3">Option 3</option>
    </select>
  </div>
  <div className='w-[1px] h-[45px] bg-[#553C3433]'></div>

  <div className='last:border-r-0 flex-col flex h-[44px] w-auto  '>
    <label className='font-semibold text-[12px] '>Diện tích</label>
    <select className='bg-[#fff] w-auto h-[21px] text-[14px] font-normal  text-[#7d7d7d] mt-[5px]  ' value={superficialityFilter} onChange={(e) => setSuperficialityFilter(e.target.value)}>
    <option value="">Chọn diện tích</option>
      <option value="location1">Option 1</option>
      <option value="location2">Option 2</option>
      <option value="location3">Option 3</option>
    </select>
  </div>
  <div className='w-[1px] h-[45px] bg-[#553C3433]'></div>
  <div className='flex flex-row items-center gap-[10px]'>
    <img src='/filter.svg' alt='filter' width={16} height={16}></img>
    <p className='text-[#000] text-sm font-medium'>Lọc thêm</p>
  </div>
  <button className='flex p-[15px] justify-center items-center rounded-full bg-[#F6F8FA]'>
    <img src='/reset.svg' alt='reset' ></img>
  </button>
  <button className='w-auto h-[41px] py-[10px] px-[15px] flex items-center  rounded-lg bg-[#9FAA85]  text-[#fff] text-sm font-medium   '>
      Tìm kiếm 
  </button>
    </div>
</div>
    )
}

export default FilterBar