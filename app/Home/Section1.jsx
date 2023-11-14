import React from 'react'

function Section1() {
  return (
    <section className='hero'>
      <div className='max-w[1280px] w-auto h-[391px]  '>
      <div className='max-w-[1280px] w-auto h-[282px] rounded-[30px] bg-gradient-to-r from-[#a88b7e] via-[#d3ae8e] to-[#aeab82]  justify-between flex shrink-0  '>
        <div className='text-white py-[35px] px-[50px] space-y-3 '>
      <h3 className='text-base font-bold '> Chào mừng đến với  Dream Home</h3>
        <h1 className='text-3xl font-bold break-words whitespace-normal uppercase leading-[45px]  '> Khám phá không gian <br/> sống lý tưởng </h1>
        <p className='text-sm font-normal leading-[21px] w-[515px] '> Lorem facilisis convallis quam sit varius. Enim nibh odio phasellus sem at sed <br/> id ut arcu. In turpis tortor diam mauris mauris magna adipiscing eu. </p>
        </div>
      <img className='w-[684px] h-[391px] self-center mr-[15px] mt-[20px] shrink-0' src='/house-banner.png' alt='house'></img>
      </div>
      </div>
    </section>
  )
}

export default Section1