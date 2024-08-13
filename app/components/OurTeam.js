import Image from 'next/image'
import React from 'react'


const teamMembers = [
  {
    name: 'Engineer Fawaz',
    role: 'Engineering and business consultant',
    imageSrc: '/assets/team-one.svg',
  },
  {
    name: 'Mr. Davor Domic',
    role: 'Partner / Oil & Gas Manager',
    imageSrc: '/assets/team-one.svg',
  },
  {
    name: 'Eng. Mahmoud Alsaied Ahmad',
    role: 'Operation Manager',
    imageSrc: '/assets/team-one.svg',
  },
  {
    name: 'Mr. Bassam Joupran',
    role: 'Financial consultant',
    imageSrc: '/assets/team-one.svg',
  },
];
const OurTeam = () => {
  return (
    <div className='w-full py-24'>
      <div
        className='relative pb-16 px-3 md:px-7'
        style={{
          backgroundImage: "url('/assets/our-team-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className='absolute inset-0 bg-white opacity-90'></div>

        <div className='relative z-10 flex lg:items-start items-center lg:flex-row flex-col justify-between gap-5 w-full max-w-[1600px] mx-auto'>
          <div className='flex items-start flex-col'>
            <div className='flex items-center justify-center gap-3 text-black'>
              <Image src='/assets/icons/key.svg' alt='key' width={25} height={25} />
              <h3 className='text-[#294145] text-base font-semibold'>OUR TEAM</h3>
            </div>
            <h3 className='text-[#294145] text-[30px] sm:text-[48px] leading-[40px] sm:leading-[51px] font-semibold mt-4 '>Meet Our Creative <span className='text-[#2E8A26]'>Team</span></h3>
            <p className='text-[#666666] text-[18px] sm:text-[24px] leading-[25px] sm:leading-[33px] font-normal lg:max-w-[770px] mt-4'>A team is a group of individuals who come together to achieve a common goal or purpose. Each member contributes their unique skills, perspectives, and experiences, which complement one another to foster collaboration and innovation. Effective teams operate with a sense of shared responsibility, clear communication, and mutual support, enabling them to tackle complex tasks more efficiently and creatively than individuals working alone. The dynamics within a team, including trust, respect, and a positive culture, play a crucial role in its overall success. Teams can exist in various contexts, such as in the workplace, sports, academic projects, and community initiatives, each tailored to the specific objectives they aim to achieve.</p>
            <button className='bg-[#0C4B3E] rounded-[5px] w-[240px] h-[60px] sm:h-[74px] text-white text-[22px] leading-[30px] font-semibold font-rajdhani mt-5 sm:mt-10'>View More</button>
          </div>

          {/* Our Team Members */}
          <div className='grid xs:grid-cols-2 grid-cols-1'>
            {teamMembers.map((member, index) => (
              <div className='flex items-start gap-8 xs:ml-7' key={index}>
                <div className='flex flex-col items-center w-full'>
                  <Image src={member.imageSrc} alt='Team' width={217} height={285} />
                  <div className='bg-[#F4F9F0] rounded-md border border-[#2E8A26] w-full xs:max-w-[221px] text-center py-3 px-3'>
                    <h1 className='text-[#294145] text-[16px] leading-[18px] mb-2.5 font-semibold px-2 2xl:px-6'>
                      {member.name}
                    </h1>
                    <h3 className='text-[#294145] text-[13px] leading-[14px] tracking-[-0.01em] font-semibold uppercase'>
                      {member.role}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
