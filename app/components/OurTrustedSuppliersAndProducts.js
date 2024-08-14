import React from "react";
import LogosSlider from "./LogosSlider";
import Image from "next/image";

const OurTrustedSuppliersAndProducts = () => {

  return (
    <section className="relative"  data-aos="fade-up">
      <div className="absolute inset-0 bg-[#05495ACC] z-10"></div>
      <div
        className="bg-cover bg-center absolute inset-0"
        style={{
          backgroundImage: `url("/assets/trusted-suppliers-and-products.jpg")`,
        }}
      ></div>

      <div className="flex flex-col items-center gap-[20px] py-[50px] relative text-white z-[20] ">
        <h2 className="text-[23px] text-center sm:text-[27px] uppercase px-[25px] font-semibold font-archivo" >OUR TRUSTED SUPPLIERS AND PRODUCTS</h2>
        <p className="mt-1 text-[12px] sm:text-[18px] lg:leading-[22px] text-center font-normal lg:px-[110px] px-5 sm:px-10" >
          We pride ourselves on partnering with trusted suppliers who uphold the
          highest standards of quality and reliability. Our suppliers are
          carefully selected based on their track record of delivering superior
          products and services that align with our commitment to excellence. By
          collaborating with these reputable partners, we ensure that our
          projects benefit from top-notch materials, innovative solutions, and
          dependable support. This strategic alliance enables us to consistently
          meet the diverse needs of our clients while maintaining the highest
          levels of satisfaction and performance in every aspect of our
          operations.
        </p>

        {/* Slider */}
        <div className="md:my-[77px] my-[50px] w-full">
          <LogosSlider />
        </div>
         <div className="max-w-[1000px] mx-auto w-full flex items-center justify-between lg:flex-row flex-col gap-10 lg:gap-5 px-5 sm:px-10">
          <Image src='/assets/1.svg' alt="img" width={400} height={546} className="w-full lg:w-[400px]"   />
          <Image src='/assets/2.svg' alt="img" width={400} height={546} className="w-full lg:w-[400px]"/>
         </div>
      </div>
    </section>
  );
};

export default OurTrustedSuppliersAndProducts;
