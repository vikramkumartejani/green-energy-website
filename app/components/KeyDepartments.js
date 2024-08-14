import Image from 'next/image';
import React from 'react';

const departments = [
  {
    id: 1,
    title: 'OPERATIONS',
    description: 'Responsible for overseeing day-to-day activities, ensuring smooth execution of projects and adherence to operational standards.',
    stat: '3',
    statDescription: 'Worldwide Locations',
    icon: '/assets/icons/operations.svg',
    image: null,
  },
  {
    id: 2,
    title: null,
    description: null,
    stat: null,
    statDescription: null,
    icon: null,
    image: '/assets/icons/box2.svg',
  },
  {
    id: 3,
    title: 'TECHNICAL',
    description: 'Provides expert technical support, design, and implementation of cutting-edge solutions tailored to meet our clients\' needs.',
    stat: '15+',
    statDescription: 'Years of Experience',
    icon: '/assets/icons/technical.svg',
    image: null,
  },
  {
    id: 4,
    title: null,
    description: null,
    stat: null,
    statDescription: null,
    icon: null,
    image: '/assets/icons/box4.svg',
  },
  {
    id: 5,
    title: 'SALES AND MARKETING',
    description: 'Focuses on market analysis, client engagement, and promotional strategies to drive business growth and expand our market reach.',
    stat: '50+',
    statDescription: 'Clients',
    icon: '/assets/icons/sales-and-marketing.svg',
    image: null,
  },
  {
    id: 6,
    title: null,
    description: null,
    stat: null,
    statDescription: null,
    icon: null,
    image: '/assets/icons/box6.svg',
  },
];

const KeyDepartments = () => {
  return (
    <div className='bg-[#F4F9F0] w-full pt-16 pb-20 px-5'>
      <div className='max-w-[1920px] w-full mx-auto'>
        {/* Heading */}
        <div className='flex items-center justify-center flex-col gap-1' data-aos="fade-up">
          <div className='flex items-center justify-center gap-3'>
            <Image src='/assets/icons/key.svg' alt='key' width={25} height={25} />
            <h3 className='text-[#294145] text-base font-semibold'>KEY</h3>
          </div>
          <h3 className='text-[#103B38] text-[22px] sm:text-[28px] lg:leading-[55px] font-semibold font-archivo text-center'>KEY DEPARTMENTS</h3>
          <p className='text-[#666666] text-[16px] sm:text-[20px] leading-[27px] text-center font-normal font-inter w-full max-w-[700px] mx-auto'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        {/* Boxes */}
        <div className='mt-16 md:mt-28 grid sm:grid-cols-1 mdl:grid-cols-2 xlg:grid-cols-3 justify-items-center gap-7 max-w-[1280px] w-full h-full mx-auto'>
          {departments.map((department) => (
            <div key={department.id} className='sm:w-[406px] w-full' >
              {department.image ? (
                <div className='w-full h-full'>
                <Image src={department.image} alt='box' width={50} height={400} className='w-full mdl:w-[380px]' />
                </div>
              ) : (
                <div className='border border-[#12223B30] w-full rounded-[40px] px-5 py-7 sm:p-7' data-aos="fade-up">
                  <div className='flex flex-col gap-4 sm:gap-6 border-b border-[#C3C3C3] pb-6 '>
                    <Image src={department.icon} alt={department.title.toLowerCase()} width={70} height={70} />
                    <h3 className='text-[#12223B] text-[20px] sm:text-[20px] leading-[31px] font-bold'>{department.title}</h3>
                    <p className='text-[#667282] text-[16px] sm:text-[18px] sm:leading-[26px] font-normal'>{department.description}</p>
                  </div>
                  <div className='mt-7'>
                    <h3 className='text-[#2B8174] text-[35px] sm:text-[40px] leading-[61px] font-extrabold tracking-[-1.68px]'>{department.stat}</h3>
                    <p className='text-[#667282] text-[15px] sm:text-[18px] font-normal leading-[28.8px] tracking-[-0.54px]'>{department.statDescription}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyDepartments;
