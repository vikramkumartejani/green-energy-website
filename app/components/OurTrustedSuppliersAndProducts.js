import React from "react";
import LogosSlider from "./LogosSlider";

const OurTrustedSuppliersAndProducts = () => {
  const images = [
    "/assets/tsp-img-1.jpg",
    "/assets/tsp-img-2.jpg",
    "/assets/tsp-img-3.jpg",
    "/assets/tsp-img-4.jpg",
    "/assets/tsp-img-5.jpg",
    "/assets/tsp-img-6.jpg",
    "/assets/tsp-img-7.jpg",
    "/assets/tsp-img-8.jpg",
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[#05495ACC] z-10"></div>
      <div
        className="bg-cover bg-center absolute inset-0"
        style={{
          backgroundImage: `url("/assets/trusted-suppliers-and-products.jpg")`,
        }}
      ></div>

      <div className="flex flex-col items-center gap-[20px] py-[50px] relative text-white z-[20]">
        <h2 className="font-[600] text-[23px] text-center sm:text-[34px] uppercase px-[25px] max-w-[738.73px]">
          OUR TRUSTED SUPPLIERS AND PRODUCTS
        </h2>
        <p className="mt-1 text-[13px] sm:text-[22px] leading-[22px] sm:leading-[27px] text-center font-normal font-inter lg:px-[110px] md:px-[50px] px-[25px]">
          {" "}
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
        <div className="md:my-[77px] my-[50px] w-full">
          <LogosSlider />
        </div>
        <div className="flex lg:flex-row flex-col items-center md:justify-between justify-center max-w-[1235px] mb-[40px] lg:gap-0 gap-[40px]">
          <div className="relative">
            <div className="grid grid-cols-2 grid-rows-2 xl:gap-[30px] sm:gap-[20px] gap-[15px] justify-around">
              {/* Top Left Image */}
              <div className="relative sm:w-[210px] w-[140px] sm:h-[210px] h-[140px] mt-auto">
                <img
                  src="/assets/tsp-img-1.jpg"
                  alt="Reception"
                  className="w-full h-full object-cover sm:rounded-[40px] rounded-[20px]"
                />
              </div>

              {/* Top Right Image */}
              <div className="relative sm:w-[150px] w-[100px] sm:h-[150px] h-[100px] mt-auto">
                <img
                  src="/assets/tsp-img-2.jpg"
                  alt="Construction 1"
                  className="w-full h-full object-cover sm:rounded-[40px] rounded-[20px]"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="relative sm:w-[210px] w-[140px] sm:h-[210px] h-[140px]">
                <img
                  src="/assets/tsp-img-3.jpg"
                  alt="Office"
                  className="w-full h-full object-cover sm:rounded-[40px] rounded-[20px]"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="relative sm:w-[150px] w-[100px] sm:h-[150px] h-[100px]">
                <img
                  src="/assets/tsp-img-4.jpg"
                  alt="Construction 2"
                  className="w-full h-full object-cover sm:rounded-[40px] rounded-[20px]"
                />
              </div>
            </div>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/assets/icons/tsp-icon.svg"
                alt="Logo"
                className="sm:w-[90px] w-[70px] sm:h-[90px] h-[70px] p-[15px] bg-white rounded-full shadow-lg"
              />
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 grid-rows-2 xl:gap-[30px] sm:gap-[20px] gap-[15px] justify-around">
              {/* Top Left Image */}
              <div className="relative sm:w-[150px] w-[100px] sm:h-[150px] h-[100px] mt-auto ms-auto">
                <img
                  src="/assets/tsp-img-5.jpg"
                  alt="Reception"
                  className="w-full h-full object-cover sm:rounded-[40px] rounded-[20px]"
                />
              </div>

              {/* Top Right Image */}
              <div className="relative sm:w-[210px] w-[140px] sm:h-[210px] h-[140px] mt-auto">
                <img
                  src="/assets/tsp-img-6.jpg"
                  alt="Construction 1"
                  className="w-full h-full object-cover sm:rounded-[40px] rounded-[20px]"
                />
              </div>

              {/* Bottom Left Image */}
              <div className="relative sm:w-[150px] w-[100px] sm:h-[150px] h-[100px] ms-auto">
                <img
                  src="/assets/tsp-img-7.jpg"
                  alt="Office"
                  className="w-full h-full object-cover sm:rounded-[40px] rounded-[20px]"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="relative sm:w-[210px] w-[140px] sm:h-[210px] h-[140px]">
                <img
                  src="/assets/tsp-img-8.jpg"
                  alt="Construction 2"
                  className="w-full h-full object-cover sm:rounded-[40px] rounded-[20px]"
                />
              </div>
            </div>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/assets/icons/tsp-icon.svg"
                alt="Logo"
                className="sm:w-[90px] w-[70px] sm:h-[90px] h-[70px] p-[15px] bg-white rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTrustedSuppliersAndProducts;
