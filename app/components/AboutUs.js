import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-full'>
      <div className='px-5 md:px-7 bg-[#F4F9F0] w-full py-16'>
        <div className='max-w-[1440px] mx-auto w-full flex items-center xl:flex-row flex-col justify-between gap-5'>
          <div className='xl:w-1/2'>
            <Image src='/assets/founder-and-ceo.svg' alt='founder-and-ceo' width={554} height={554} className='rounded-[20px]' />
          </div>
          <div className=''>
            <p className='text-[#103B38] text-[14px] md:text-[22px] leading-[22px] md:leading-[35px] font-normal xl:max-w-[683px]'>Our leadership in contracting,  engineering, and energy is integral to a  global framework aimed at advancing  society through modern technological  advancements. At Green Energy,  we have strategically aligned the  foundational elements of this  framework to effectively meet the  diverse needs of our customers  across all sectors.  Our meticulous attention  to detail ensures ongoing  development and progress,  underpinned by a commitment to  global methodologies that align with  our overarching vision and goals. </p>
            <h2 className='mt-4 text-[#103B38] text-[20px] md:text-[25px] leading-[42px] font-semibold'>Eng. Adnan Ajaj</h2>
            <h3 className='text-[#2E8A26] text-[15px] sm:text-[15px] leading-[42px] font-normal'>Founder & CEO</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs