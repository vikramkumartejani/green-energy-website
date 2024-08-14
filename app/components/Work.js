"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const boxesData = [
  {
    title: 'MEP',
    description: 'Our capabilities in Mechanical, Electrical & Plumbing (MEP) are centered on delivering practical and economically sustainable designs. We are dedicated to developing and delivering solutions that align perfectly with our clients\' objectives and budgetary considerations',
    details: 'MEP services are vital in modern construction for several reasons: promoting energy efficiency and sustainability through advanced HVAC systems and renewable energy technologies, optimizing space utilization with',
    backgroundImage: '/assets/icons/mep.jpg',
  },
  {
    title: 'OIL & GAS',
    description: 'The first modern oil well was drilled in 1859  by Edwin Drake in Titusville, Pennsylvania.  This event marked the beginning of the  global petroleum industry, revolutionizing  energy production and paving the way for  significant industrial and economic  developments worldwide.',
    details: 'Design and build, Installation, T&C,  Operation, Maintenance, Filling  management and Spare Parts.',
    backgroundImage: '/assets/icons/oil-and-gas.jpg',
  },
  {
    title: 'LPG',
    description: 'Liquefied petroleum gas, also  referred to as liquid petroleum gas  (LPG or LP gas), is a fuel gas which  contains a flammable mixture of  hydrocarbon gases, specifically  propane, n-butane and isobutane. It  can sometimes contain some  propylene, butylene, and isobutene',
    backgroundImage: '/assets/icons/lpg.jpg',
  },
  {
    title: 'LNG',
    description: 'Liquefied natural gas (LNG) is  natural gas that has been cooled to  a liquid state, at about -260°  Fahrenheit, for shipping and  storage. The volume of natural gas in  its liquid state is about 600 times  smaller than its volume in its  gaseous state.',
    backgroundImage: '/assets/icons/lng.jpg',
  },
  {
    title: 'SNG',
    description: 'Fuel Transfer Systems are capable  of transferring fuel from multiple  fuel storage tanks. This allows  equipment operators to level the  fuel between tanks, as to not allow  one to become critically low.',
    backgroundImage: '/assets/icons/sng.jpg',
  },
  {
    title: 'FTS',
    description: 'Liquefied natural gas (LNG) is  natural gas that has been cooled to  a liquid state, at about -260°  Fahrenheit, for shipping and  storage. The volume of natural gas in  its liquid state is about 600 times  smaller than its volume in its  gaseous state.',
    backgroundImage: '/assets/icons/fts.jpg',
  }
];

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
    });
  }, []);
  return (
    <div className='py-10 w-full bg-[#F4F9F0] px-5 sm:px-7'>
      <div className='flex items-center justify-center flex-col gap-1'   data-aos="fade-up" >
        <div className='flex items-center justify-center gap-3'>
          <Image src='/assets/icons/key.svg' alt='key' width={25} height={25} />
          <h3 className='text-[#294145] text-base font-semibold'>WORK</h3>
        </div>
        <h3 className='text-[#103B38] text-[22px] sm:text-[28px] lg:leading-[55px] font-semibold font-archivo text-center'>SCOPE OF WORK</h3>
        <p className='text-[#666666] text-[14px] sm:text-[20px] sm:leading-[27px] text-center font-normal font-inter w-full max-w-[1116px] mx-auto'>Green Energy has made significant strides  in the Saudi market by assembling a team of  highly skilled specialists in their respective  fields, complemented by the expertise of our  international partners with extensive  experience in these domains.</p>
      </div>

      {/* Boxes */}
      <div className="mt-16 w-full max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9"    data-aos="fade-up" >
        {boxesData.map((box, index) => (
          <div key={index} className="relative rounded-[40px] overflow-hidden px-3 xl:px-5 py-6" >
            <div className="absolute inset-0 bg-[#05495ACC] z-10"></div>
            <div
              className="bg-cover bg-center absolute inset-0 rounded-[40px]"
              style={{ backgroundImage: `url(${box.backgroundImage})` }}  
            ></div>
            <div className="relative z-20 p-1 xl:p-4 text-white text-center">
              <h2 className="text-[25px] sm:text-[25px] leading-[24px] font-semibold mb-5">{box.title}</h2>
              <p className="text-[12px] xl:text-[16px] leading-[22.5px] font-normal mb-5">{box.description}</p>
              <p className="text-[12px] xl:text-[16px] leading-[22.5px] font-normal">{box.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work