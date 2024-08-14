import React from 'react'

const Hero = () => {
  return (
    <div className='w-full max-w-[1920px] px-5 md:px-10 mx-auto py-14'>
      <div
        className='rounded-[40px] relative overflow-hidden py-20 md:pt-[180px] md:pb-[119px] px-5'
        style={{
          backgroundImage: "url('/assets/hero-bg-image.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='absolute inset-0 bg-[#00000080] '></div>

        {/* Content */}
        <div className='relative z-10 flex items-center flex-col justify-center h-full'  data-aos="fade-up">
          <h1 className='text-white text-[23px] sm:text-[40px] lg:text-[50px] lg:leading-[80px] font-bold font-rajdhani text-center max-w-[900px] mx-auto'>If You Don&apos;t Appreciate Your Customers, Someone Else Will</h1>
          <p className='text-[12px] sm:text-[18px] leading-[20px] sm:leading-[30px] font-normal text-center max-w-[1000px] mx-auto text-white mt-5'>Welcome to GREEN ENERGY Engineering &  contracting, where innovation meets  excellence. Delivering unparalleled solutions  tailored to meet your needs. Discover the  difference with our commitment to quality,  creativity, and customer satisfaction.</p>
          <div className='mt-10 mb-10 sm:mb-20 flex items-center gap-4 sm:gap-7'> 
            <button className='bg-[#2E8A26] w-[150px] sm:w-[224px] h-[40px] sm:h-[74px] rounded-[5px] text-white text-[15px] sm:text-[22px] leading-[30px] font-semibold uppercase font-rajdhani'>Get started</button>
            <button className='border border-[#FFFFFF] w-[150px] sm:w-[224px] h-[40px] sm:h-[74px] rounded-[5px] text-white uppercase font-rajdhani font-semibold text-[15px] sm:text-[22px] leading-[30px]'>read More </button>
          </div>
          <div className='max-w-[791px] w-full mx-auto px-3 flex items-start justify-between gap-2 sm:gap-5 text-white' data-aos="fade-up">
            <div className='flex items-center flex-col' >
              <h2 className='text-[18px] sm:text-[50px] sm:leading-[81px] font-semibold'>50+</h2>
              <h3 className='text-[10px] sm:text-[24px] sm:leading-[27px] font-normal'>Clients</h3>
            </div>
            <div className='flex items-center flex-col'>
              <h2 className='text-[18px] sm:text-[50px] sm:leading-[81px] font-semibold'>15+</h2>
              <h3 className='text-[10px] sm:text-[24px] sm:leading-[27px] font-normal'>Years of Experience</h3>
            </div>
            <div className='flex items-center flex-col'>
              <h2 className='text-[18px] sm:text-[50px] sm:leading-[81px] font-semibold'>3</h2>
              <h3 className='text-[10px] sm:text-[24px] sm:leading-[27px] font-normal'>Worldwide Locations</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
