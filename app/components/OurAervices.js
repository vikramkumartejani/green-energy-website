'use client'
import Image from 'next/image';
import React, { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const services = [
  {
    title: 'MEP Service',
    description: 'Including large-scale residential, commercial, and industrial sectors. We provide comprehensive MEP design and build services to our clients, utilizing cutting-edge and energy-efficient products. Our goal is to deliver state-of-the-art installations that streamline construction timelines and costs. This approach ensures a cost-effective and easily maintainable end product for our clients.',
    imageSrc: '/assets/mep-service.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
  {
    title: 'HVAC',
    description: 'As a specialized company in KSA, GREEN ENERGY offers comprehensive HVAC (Heating, Ventilation & Air Conditioning) systems, including automated control systems, to effectively regulate the indoor climate of your facility. With extensive experience in HVAC solutions, we provide tailored environmental solutions to meet your specific needs.',
    imageSrc: '/assets/hvac.svg',
    imageAlt: 'mep-service',
    buttonText: 'Read More',
  },
];

const OurAervices = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleButtonClick = (index) => {
    setCurrentStartIndex(index * itemsPerPage);
  };

  const currentPage = currentStartIndex / itemsPerPage;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
    });
  }, []);

  return (
    <div className='my-10 px-5 md:px-7 py-10 relative' id="ouraervices"   data-aos="fade-left">
      <div className='absolute right-0 top-0 h-full bg-[#F4F9F0]'  style={{ width: '80%' }}></div>
      <div className='relative flex items-center justify-center flex-col gap-1'>
        <div className='flex items-center justify-center gap-3'>
          <Image src='/assets/icons/key.svg' alt='key' width={25} height={25} />
          <h3 className='text-[#294145] text-base font-semibold'>Our Aervices</h3>
        </div>
        <h3 className='text-[#103B38] text-[22px] sm:text-[28px] font-semibold text-center capitalize'>We&apos;re on a mission to protect our beloved</h3>
        <h3 className='text-[#6EA343] text-[22px] sm:text-[28px] font-semibold text-center mb-2'>Environment!</h3>
        <p className='text-[#666666] text-[12px] sm:text-[18px] sm:leading-[27px] text-center font-normal font-inter w-full max-w-[1033px] mx-auto'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div className='relative'>
        <div className='mt-5 w-full max-w-[1180px] mx-auto flex flex-col gap-6'>
          {services.slice(currentStartIndex, currentStartIndex + itemsPerPage).map((service, index) => (
            <div key={index} className='flex items-center justify-between mdl:flex-row flex-col gap-5 bg-white rounded-[20px] px-6 py-3'  data-aos="fade-up">
              <div className='md:p-5 flex items-center gap-5 md:flex-row flex-col lg:gap-10'>
                <Image src={service.imageSrc} alt={service.imageAlt} width={320} height={246} />
                <div>
                  <h3 className='text-[#044E29] text-[20px] lg:text-[20px] leading-[36px] font-semibold mb-2.5'>
                    {service.title}
                  </h3>
                  <p className='md:max-w-[539px] text-[#666666] text-[13px] lg:text-[18px] leading-[20px] lg:leading-[22.5px] font-normal'>
                    {service.description}
                  </p>
                </div>
              </div>
              <button className='bg-[#0C4B3E] rounded-md w-[125px] h-[40px] text-[14px] leading-[22.5px] font-medium text-white'>
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>
        <div className='mt-10 w-full flex items-center justify-center gap-2'>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`rounded-full w-[18px] h-[18px] ${index === currentPage ? 'bg-[#0C4B3E]' : 'bg-[#2E8A2666]'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurAervices