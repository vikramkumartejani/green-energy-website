'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsMobileMenuOpen(false);
    };

    const getLinkClass = (path) => {
        return activeLink === path ? 'text-xl font-bold' : 'text-xl font-normal';
    };

    return (
        <div className='bg-[#F9F9F9] w-full border-b-0.4 border-[#000000] h-[100px] flex items-center px-5 md:px-10'>
            <div className='max-w-[1920px] mx-auto w-full flex items-center justify-between'>
                <Image src='/assets/Logo.svg' alt='Logo' width={142} height={78} className='mt-[-8px]' />

                <ul className='lg:flex hidden items-center gap-7'>
                    <li>
                        <Link href='/' className={getLinkClass('/')} onClick={() => handleLinkClick('/')}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/about' className={getLinkClass('/about')} onClick={() => handleLinkClick('/about')}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href='/services' className={getLinkClass('/services')} onClick={() => handleLinkClick('/services')}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href='/team' className={getLinkClass('/team')} onClick={() => handleLinkClick('/team')}>
                            Our Team
                        </Link>
                    </li>
                    <li>
                        <Link href='/location' className={getLinkClass('/location')} onClick={() => handleLinkClick('/location')}>
                            Location
                        </Link>
                    </li>
                </ul>

                <button className='lg:block hidden bg-[#0C4B3E] w-[181px] h-[58px] rounded-md text-white text-xl font-rajdhani font-semibold'>
                    Contact us
                </button>

                <button className='lg:hidden block' onClick={toggleMobileMenu}>
                    <FiMenu size={35} />
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <button className='absolute top-4 right-4' onClick={toggleMobileMenu}>
                    <FiX size={28} />
                </button>
                <ul className='flex flex-col items-start p-5 gap-5 mt-[100px]'>
                    <li>
                        <Link href='/' className={getLinkClass('/')} onClick={() => handleLinkClick('/')}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href='/about' className={getLinkClass('/about')} onClick={() => handleLinkClick('/about')}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link href='/services' className={getLinkClass('/services')} onClick={() => handleLinkClick('/services')}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href='/team' className={getLinkClass('/team')} onClick={() => handleLinkClick('/team')}>
                            Our Team
                        </Link>
                    </li>
                    <li>
                        <Link href='/location' className={getLinkClass('/location')} onClick={() => handleLinkClick('/location')}>
                            Location
                        </Link>
                    </li>
                    <li>
                        <button className='bg-[#0C4B3E] w-[181px] h-[58px] rounded-md text-white text-xl font-rajdhani font-semibold'>
                            Contact us
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
