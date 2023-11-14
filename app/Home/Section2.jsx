import React, { useState } from 'react'

function Section2() {
    const [locationFilter, setLocationFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [superficialityFilter, setSuperficialityFilter] = useState('');  
  return (
    <section>
    <div className=' max-w-[238px] flex items-center justify-between shrink-0 rounded-tl-2xl rounded-tr-2xl border-solid border-[0.5px] w-[238px] h-[47px] border-opacity-20 bg-white  py-[13px] px-[25px] gap-[30px] shadow-opacity-10 mt-[-69px]'>
<button className='text-[14px] font-medium leading-[21px] text-[#806056] hover:border-b-2 hover:border-b-[#806056] '>Bán</button>
<button className='text-[14px] font-medium leading-[21px] text-[#806056] hover:border-b-2 hover:border-b-[#806056] '>Thuê</button>
<button className='text-[14px] font-medium leading-[21px] text-[#806056] hover:border-b-2 hover:border-b-[#806056] '>Dự án</button>
    </div>
    <div className=' max-w-[859px] flex items-center w-[859px] h-[94px] border-[0.5px] border-solid shadow-md rounded-tl-none rounded-2xl gap-[20px] py-[15px] px-[25px] '>
      <div className='last:border-r-0 flex-col flex h-[64px] w-[205px] space-y-[7px]'>
        <label className='font-semibold text-[15px] leading-[22.5px]'>Vị trí</label>
        <select className='bg-[#f0f0f0] w-[205px] h-[34px] text-[14px] font-normal leading-[21px] text-[#7d7d7d] appearance-none px-[10px] py-[7px]' value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
        <option value="">Nơi bạn muốn sống</option>
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
        </select>
      </div>
      <div className='w-[1px] h-[65px] bg-black'></div>
      <div className='last:border-r-0 flex-col flex h-[64px] w-[205px] space-y-[7px] '>
        <label className='font-semibold text-[15px] leading-[22.5px]'>Mức giá</label>
        <select className='bg-[#f0f0f0] w-[205px] h-[34px] text-[14px] font-normal leading-[21px] text-[#7d7d7d]   px-[10px] py-[7px]' value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
        <option value="">Chọn mức giá</option>
          <option value="location1">Option 1</option>
          <option value="location2">Option 2</option>
          <option value="location3">Option 3</option>
        </select>
      </div>
      <div className='w-[1px] h-[65px] bg-black'></div>

      <div className='last:border-r-0 flex-col flex h-[64px] w-[205px] space-y-[7px] '>
        <label className='font-semibold text-[15px] leading-[22.5px]'>Diện tích</label>
        <select className='bg-[#f0f0f0] w-[205px] h-[34px] text-[14px] font-normal leading-[21px] text-[#7d7d7d]   px-[10px] py-[7px]' value={superficialityFilter} onChange={(e) => setSuperficialityFilter(e.target.value)}>
        <option value="">Chọn diện tích</option>
          <option value="location1">Option 1</option>
          <option value="location2">Option 2</option>
          <option value="location3">Option 3</option>
        </select>
      </div>
      <button className='bg-[#806056] w-[50px] h-[50px] p-[12px] rounded-[8px] ml-[28px]'>
        <img src='/search.svg' alt='search' className='w-[25px] h-[25px] hover:scale-110 ease-in-out duration-500'></img>
      </button>
    </div>
  </section>
  )
}

export default Section2