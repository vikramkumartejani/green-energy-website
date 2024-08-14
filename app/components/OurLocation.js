import Image from 'next/image'
import React from 'react'

const OurLocation = () => {
  return (
    <div className='w-full max-w-[1920px] mx-auto px-5 md:px-10 pt-14' id="location"  data-aos="fade-up">
      <div className='flex items-center justify-center flex-col gap-2' >
        <div className='flex items-center justify-center gap-3'>
          <Image src='/assets/icons/location-icon.svg' alt='location-icon' width={25} height={25} />
          <h3 className='text-[#294145] text-base font-semibold'>OUR LOCATION</h3>
        </div>
        <h3 className='text-[#103B38]  text-[22px] sm:text-[28px] lg:leading-[55px] font-semibold font-archivo text-center'>OUR COMPANY WORK   AREAS</h3>
        <p className='text-[#4B4B4B] text-[14px] sm:text-[20px] sm:leading-[27px] text-center font-normal font-inter w-full max-w-[1018px] mx-auto'>Our company strategically operates in Canada, Egypt, and Saudi Arabia, specializing  in LPG, SNG, and MEP systems. Providing comprehensive services from system  design and installation to maintenance and distribution.</p>
      </div>

      <div className='mt-8 w-full max-w-[1770px] mx-auto'>
        <Image src='/assets/location-image.svg' alt='Location' width={1770} height={883}  />
      </div>

      <div className='my-5 bg-[#396D76] w-full max-w-[1770px] mx-auto text-center px-4 sm:px-8 py-5 rounded-3xl text-white'>
        <h3 className='text-[15px] sm:text-[20px] leading-[30px] font-semibold mb-2.5'>OUR CLIENTS;</h3>
        <p className='text-[12px] sm:text-[18px] sm:leading-[27px] font-normal lowercase'>CANADIAN NATURAL RESOURCES  (CNR) PRIMROSE  WOLF CREEK HEAVY OIL PROJECTS  SUNCOR HEAVY OIL SANDS PROJECT  OSUM HEAVY OIL PROJECTS  STRATHCONA MONTNEY AND COLD  LAKE THERMAL PROJECTS  ARTIS EXPLORATION DUVERNAY  PROJECT  HALO MONTNEY, DUVERNAY;  TAMARACK VALLEY - CLEARWATER  HEAVY OIL, BONTERRA CARDIUM  AND MONTNEY  TOUCHSTONE TRINIDAD PROJECT  PAREX COLOMBIA  TERRAPIN GEOTHERMICS  DEEP EARTH ENERGY GEOTHERMAL  SASKATCHEWAN  RECON-AFRICA NAMIBIA 3 NEW  WELLS.</p>
      </div>
    </div>
  )
}

export default OurLocation