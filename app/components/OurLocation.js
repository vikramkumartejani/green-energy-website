"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurLocation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
    });
  }, []);
  return (
    <div
      className="w-full max-w-[1920px] mx-auto px-5 md:px-10 pt-14"
      id="location"
    >
      <div
        className="flex items-center justify-center flex-col gap-2"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/assets/icons/location-icon.svg"
            alt="location-icon"
            width={25}
            height={25}
          />
          <h3 className="text-[#294145] text-base font-semibold">
            OUR LOCATION
          </h3>
        </div>
        <h3 className="text-[#103B38] text-[22px] sm:text-[28px] lg:leading-[55px] font-semibold font-archivo text-center">
          OUR COMPANY WORK AREAS
        </h3>
        <p className="text-[#4B4B4B] text-[14px] sm:text-[20px] sm:leading-[27px] text-center font-normal font-inter w-full max-w-[1018px] mx-auto">
          Our company strategically operates in Canada, Egypt, and Saudi Arabia,
          specializing in LPG, SNG, and MEP systems. Providing comprehensive
          services from system design and installation to maintenance and
          distribution.
        </p>
      </div>

      {/* Map */}
      <div className="relative mt-8 w-full max-w-[1770px] mx-auto h-[500px] md:h-[600px] lg:h-[700px] xl:h-[883px]">
        {/* Background Image */}
        <Image
          src="/assets/location-image.svg"
          alt="Location"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] min-h-[400px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[883px]"
          data-aos="fade-up"
        />

        {/* Overlay Content */}
        <div className="relative z-10 h-full w-full">
          {/* Canada Location */}
          <div
            className="absolute top-[40%] md:top-[47%] left-[5%] md:left-[3%] text-white"
            data-aos="zoom-in"
          >
            <div className="bg-[#0B4456] px-2 md:px-4 rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px] text-center flex flex-col items-center justify-center">
              <h3 className="text-[12px] md:text-[15px] font-semibold">Canada</h3>
              <p className="text-[7px] md:text-[9px] font-normal mt-2">
                ROVAD ENERGY (Rovad Surplus & supply) 424-5th Avenue NE, Calgary,
                Alberta, Canada T2E0L1
              </p>
            </div>
          </div>

          {/* Egypt Location */}
          <div
            className="absolute top-[55%] md:top-[65%] left-[35%] md:left-[42%] text-white"
            data-aos="zoom-in"
          >
            <div className="bg-[#0B4456] px-2 md:px-4 rounded-full w-[120px] h-[120px] md:w-[170px] md:h-[170px] text-center flex flex-col items-center justify-center">
              <h3 className="text-[12px] md:text-[15px] font-semibold">Egypt</h3>
              <p className="text-[7px] md:text-[9px] font-normal mt-2">
                THE BOULEVARD FOR REAL ESTATE CO. Gadalla - st 4450/15 - Nasr city
                Cairo - Egypt
              </p>
            </div>
          </div>

          {/* KSA Location */}
          <div
            className="absolute top-[50%] md:top-[60%] left-[50%] md:left-[59%] text-white"
            data-aos="zoom-in"
          >
            <div className="bg-[#0B4456] px-2 md:px-4 rounded-full w-[120px] h-[120px] md:w-[170px] md:h-[170px] text-center flex flex-col items-center justify-center">
              <h3 className="text-[12px] md:text-[15px] font-semibold">Ksa</h3>
              <p className="text-[7px] md:text-[9px] font-normal mt-1">
                GREEN ENERGY ENGINEERING & CONTRACTING Alyarmouk- Tabarjal st. -
                3953 -13243 Riyadh - KSA
              </p>
            </div>
          </div>
        </div>
      </div>



      <div
        className="my-5 bg-[#396D76] w-full max-w-[1770px] mx-auto text-center px-4 sm:px-8 py-5 rounded-3xl text-white"
        data-aos="fade-up"
      >
        <h3 className="text-[15px] sm:text-[20px] leading-[30px] font-semibold mb-2.5">
          OUR CLIENTS;
        </h3>
        <p className="text-[12px] sm:text-[18px] sm:leading-[27px] font-normal lowercase">
          CANADIAN NATURAL RESOURCES (CNR) PRIMROSE WOLF CREEK HEAVY OIL
          PROJECTS SUNCOR HEAVY OIL SANDS PROJECT OSUM HEAVY OIL PROJECTS
          STRATHCONA MONTNEY AND COLD LAKE THERMAL PROJECTS ARTIS EXPLORATION
          DUVERNAY PROJECT HALO MONTNEY, DUVERNAY; TAMARACK VALLEY - CLEARWATER
          HEAVY OIL, BONTERRA CARDIUM AND MONTNEY TOUCHSTONE TRINIDAD PROJECT
          PAREX COLOMBIA TERRAPIN GEOTHERMICS DEEP EARTH ENERGY GEOTHERMAL
          SASKATCHEWAN RECON-AFRICA NAMIBIA 3 NEW WELLS.
        </p>
      </div>
    </div>
  );
};

export default OurLocation;
