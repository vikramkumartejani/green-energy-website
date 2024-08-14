"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
    });
  }, []);
  return (
    <div className='w-full relative'>
      <div className='w-full py-10 lg:py-24 px-5 md:px-10 2xl:px-24 relative'>
        <div className='absolute inset-0 z-10' style={{ backgroundImage: "url('/assets/footer-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.5' }}></div>
        <div className='absolute inset-0 bg-[#051E42]'></div>

        {/* Footer Content */}
        <div className='relative z-20 text-white w-full max-w-[1250px] mx-auto' data-aos="fade-up" >
          <div className='pb-10 border-b border-[#F4F9F04F] mb-10'>
            <Image src='/assets/Logo.svg' alt='Logo' width={229} height={126} />
          </div>
          <div className='flex items-start flex-col lg:flex-row justify-between w-full gap-14 lg:gap-7'>
            <div>
              <p className='text-[12px] sm:text-[14px] leading-[22.5px] font-normal lg:max-w-[365px]'>Our dedicated team is ready to provide  personalized assistance and expert  advice. Contact us today to start the  conversation and discover how we can  help you achieve your goals efficiently  and effectively.</p>
              {/* Social Link */}
              <div className='mt-8 flex items-center gap-1.5'>
                <Link href='/'><Image src='/assets/icons/facebook.svg' alt='facebook' width={35} height={35} /></Link>
                <Link href='/'><Image src='/assets/icons/instagram.svg' alt='instagram' width={35} height={35} /></Link>
                <Link href='/'><Image src='/assets/icons/linkedin.svg' alt='linkedin' width={35} height={35} /></Link>
                <Link href='/'><Image src='/assets/icons/youtube.svg' alt='youtube' width={35} height={35} /></Link>
              </div>
              {/* Contact */}
              <div className='mt-8 flex items-start flex-col gap-2.5'>
                <div className='flex items-center gap-2.5'>
                  <Image src='/assets/icons/loca-icon.svg' alt='Location' width={12} height={20} />
                  <h2 className='text-[12px] sm:text-[14px] leading-[22.5px] font-normal'>Alyarmouk- Tabarjal st.  3953 -13243  Riyadh - KSA</h2>
                </div>
                <div className='flex items-center gap-2.5'>
                  <Image src='/assets/icons/phone.svg' alt='Phone' width={16} height={20} />
                  <h2 className='text-[12px] sm:text-[14px] leading-[22.5px] font-normal'> +3sadssafasf</h2>
                </div>
                <div className='flex items-center gap-2.5'>
                  <Image src='/assets/icons/msg.svg' alt='email' width={20} height={20} />
                  <a href='mailto:info@g-energyco.com' className='text-white hover:underline text-[12px] sm:text-[14px] leading-[22.5px] font-normal'>
                    info@g-energyco.com
                  </a>
                </div>
              </div>
            </div>

            <div className='flex items-start justify-between gap-7 w-full lg:w-1/4'>
              {/* Quick Links */}
              <div className=' text-nowrap'>
                <h3 className='mb-5 sm:mb-[24px] text-[14px] sm:text-[16px] leading-[26.84px] font-semibold underline underline-offset-4'>Quick Links</h3>
                <ul className='flex flex-col gap-5'>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>About Us</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Services</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Our Missions</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>News & Articles</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Our Projects</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Contact US</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className=' text-nowrap'>
                <h3 className='mb-5 sm:mb-[24px] text-[14px] sm:text-[16px] leading-[26.84px] font-semibold underline underline-offset-4'>Services</h3>
                <ul className='flex flex-col gap-5'>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Recycling</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Ecosystem</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Best Organic</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Biology System</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Private Policy</Link></li>
                  <li><Link href='/' className='text-[12px] sm:text-[14px] font-normal leading-[22.5px]'>Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

            {/* Get intresting news */}
            <div>
              <h3 className='mb-5 sm:mb-[30px] text-[14px] sm:text-[16px] leading-[26.84px] font-semibold underline underline-offset-4'>Get Intresting News</h3>
              <p className='text-[12px] sm:text-[14px] leading-[22.5px] font-normal'>Duis aute irure dolor in repre henderit in voluptat</p>
              <input type='email' placeholder='Email' required className='mt-5 mb-2.5 rounded-[999px] px-5 w-full max-w-[383px] h-[46px] text-black outline-none text-[14px] font-normal font-inter' />
              <button className='bg-[#0C4B3E] w-[140px] h-[40px] rounded-lg text-[14px] leading-[22.5px] font-medium font-inter'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className='w-full bg-[#0C4B3E] px-3 py-5 sm:py-7' data-aos="fade-up">
        <h3 className='text-white text-[14px] font-normal font-inter leading-[22.5px] text-center'  >
          Copyright © 2024 . All rights reserved.
        </h3>
      </div>
    </div>
  );
}

export default Footer;
