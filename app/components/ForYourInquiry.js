import Image from 'next/image'
import React from 'react'

const ForYourInquiry = () => {
  return (
    <div className='bg-[#F4F9F0] w-full py-8 sm:py-10 px-3'>
      <div className='flex items-center justify-center flex-col'>
        <h2 className='text-center text-[#294145] text-[25px] sm:text-[34px] leading-[51px] font-black font-inter mb-5 sm:mb-10'>For Your Inquiry</h2>
        <button className='bg-[#0C4B3E] w-full max-w-[598px] mx-auto shadow-custom border border-[#CACACA] h-[50px] sm:h-[77px] rounded-xl text-white text-[18px] sm:text-[32px] leading-[37px] font-normal mb-5'>
          Contact Form
        </button>
        <button className='bg-[#24D366] w-full max-w-[598px] mx-auto shadow-custom border border-[#CACACA] h-[50px] sm:h-[77px] rounded-xl text-white text-[18px] sm:text-[32px] leading-[37px] font-normal flex items-center justify-center gap-3.5'>
          <Image src='/assets/icons/whatsapp.svg' alt='whatsapp' width={38} height={38} className='sm:w-[38px] sm:h-[38px] h-[25px] w-[25px]' />
          Chat on WhatsApp
        </button>
      </div>
    </div>
  )
}

export default ForYourInquiry