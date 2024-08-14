import Image from 'next/image'
import React from 'react'
import LogosSlider from './LogosSlider'

const AboutUs = () => {
  return (
    <div className='w-full' id="aboutus">
       <div className="md:my-[77px] my-[50px] w-full">
          <LogosSlider />
        </div>
      <div data-aos="fade-up" className='bg-white w-full py-10 flex justify-between lg:flex-row flex-col-reverse items-center gap-5 max-w-[1300px] mx-auto px-5'>
        <div className='lg:max-w-[500px] w-full'  data-aos="fade-up">
          <Image src='/assets/about-us.svg' alt='about-us' width={500} height={400} className='w-full' />
        </div>
        <div className='flex items-start justify-center flex-col gap-2'>
          <div className='flex items-center justify-center gap-3'>
            <Image src='/assets/icons/key.svg' alt='location-icon' width={25} height={25} />
            <h3 className='text-[#294145] text-sm font-semibold'> About Us</h3>
          </div>
          <h3 className='text-[#1C1C1C] text-[22px] sm:text-[28px] font-semibold capitalize'>Join the race to make the world a</h3>
          <h3 className='text-[#2E8A26] text-[22px] sm:text-[28px] leading-[20px] font-semibold capitalize'>better place</h3>
          <p className='text-[#4B4B4B] text-[12px] sm:text-[16px] leading-[18px] font-normal font-inter w-full lg:max-w-[663px] mx-auto mt-3'>GREEN ENERGY was established in 2009 in Egypt under the name (The Boulevard for Real Estate Company).  Initially, the company specialized in the implementation of MEP (Mechanical, Electrical, and Plumbing)  contracting for infrastructure, residential, and commercial buildings, including malls and compounds. In line with  our management policy of expanding into surrounding markets, we launched a branch in the Kingdom of Saudi  Arabia in 2023. This branch focuses on MEP contracting, oil and gas industry, LPG and fuel transfer systems,  providing customized solutions through our strong network of world-class manufacturers</p>
          <p className='text-[#4B4B4B] text-[12px] sm:text-[16px] leading-[18px] font-normal font-inter w-full lg:max-w-[663px] mx-auto mt-1'>Our mission is to build and develop a high performing team that delivers successful  projects. We achieve this by cultivating  skilled professionals committed to  excellence. Upholding the highest  standards of professionalism, honesty, and  fairness in our relationships with customers,  employees, and vendors is integral to our  vision. We aim to provide quality  workmanship and customer service,  continually expanding into new markets  while delivering valuable products, services,  and solutions that meet evolving customer  needs and build on our core competencies.</p>
        </div>
      </div>

      {/* CEO & FOUNDER */}
      <div className='px-5 md:px-7 bg-[#F4F9F0] w-full py-16' data-aos="fade-up">
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