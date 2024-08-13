import Image from 'next/image'
import React from 'react'

const OurAervices = () => {
  return (
    <div className='my-10 w-full px-3 md:px-7'>
      <div className='flex items-center justify-center flex-col gap-1'>
        <div className='flex items-center justify-center gap-3'>
          <Image src='/assets/icons/key.svg' alt='key' width={25} height={25} />
          <h3 className='text-[#294145] text-base font-semibold'>Our Aervices</h3>
        </div>
        <h3 className='text-[#103B38] text-[25px] sm:text-[34px] font-semibold text-center capitalize'>We&apos;re on a mission to protect our beloved</h3>
        <h3 className='text-[#6EA343] text-[25px] sm:text-[34px] font-semibold text-center mb-2'>Environment!</h3>
        <p className='text-[#666666] text-[15px] sm:text-[22px] leading-[22px] sm:leading-[27px] text-center font-normal font-inter w-full max-w-[1033px] mx-auto'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      {/* <div className='mt-5 w-full max-w-[1246px] mx-auto flex items-start flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <div className='p-5 flex items-center gap-10'>
            <Image src='/assets/mep-service.svg' alt='mep-service' width={370} height={246} />
            <div>
              <h3 className='text-[#044E29] text-[24px] leading-[36px] font-semibold mb-2.5'>MEP Service</h3>
              <p className='max-w-[539px] text-[#666666] text-[22px] leading-[22.5px] font-normal'>including large-scale residential,  commercial, and industrial sectors.  We provide comprehensive MEP  design and build services to our  clients, utilizing cutting-edge and  energy-efficient products. Our goal  is to deliver state-of-the-art  installations that streamline  construction timelines and costs.  This approach ensures a cost effective and easily maintainable  end product for our clients.</p>
            </div>
          </div>
          <button className='bg-[#0C4B3E] rounded-md w-[132px] h-[47px] text-[15px] leading-[22.5px] font-medium text-white '>Read More</button>
        </div>
        <div className='flex items-center justify-between'>
          <div className='p-5 flex items-center gap-10'>
            <Image src='/assets/mep-service.svg' alt='mep-service' width={370} height={246} />
            <div>
              <h3 className='text-[#044E29] text-[24px] leading-[36px] font-semibold mb-2.5'>HVAC</h3>
              <p className='max-w-[539px] text-[#666666] text-[22px] leading-[22.5px] font-normal'>As a specialized company in KSA,  GREEN ENERGY offers  comprehensive HVAC (Heating,  Ventilation & Air Conditioning)  systems, including automated  control systems, to effectively  regulate the indoor climate of your  facility. With extensive experience  in HVAC solutions, we provide  tailored environmental solutions to  meet your specific needs. Given the  regions high temperatures,</p>
            </div>
          </div>
          <button className='bg-[#0C4B3E] rounded-md w-[132px] h-[47px] text-[15px] leading-[22.5px] font-medium text-white '>Read More</button>
        </div>
      </div> */}
    </div>
  )
}

export default OurAervices