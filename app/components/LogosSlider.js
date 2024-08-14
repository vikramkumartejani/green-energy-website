import React from "react";
import Marquee from "react-fast-marquee";

const LogosSlider = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee
        speed={100}
        pauseOnHover={true}
        gradient={false} // Disable gradient for a cleaner look
        direction="left"
        className="flex items-center"
      >
        <div className="flex items-center justify-center bg-[#F4F6F5] lg:w-[300px] sm:w-[220px] w-[180px] lg:h-[70.39px] sm:h-[50px] h-[45px] rounded-[20px] md:mx-[25px] mx-[10px]">
          <img
            src="/assets/icons/g10.svg"
            alt="logo"
            className="lg:w-auto sm:w-[110px] w-[90px] lg:h-auto h-[30px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center bg-[#F4F6F5] lg:w-[300px] sm:w-[220px] w-[180px] lg:h-[70.39px] sm:h-[50px] h-[45px] rounded-[20px] md:mx-[25px] mx-[10px]">
          <img
            src="/assets/icons/opw.svg"
            alt="logo"
            className="lg:w-auto sm:w-[110px] w-[90px] lg:h-auto h-[30px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center bg-[#F4F6F5] lg:w-[300px] sm:w-[220px] w-[180px] lg:h-[70.39px] sm:h-[50px] h-[45px] rounded-[20px] md:mx-[25px] mx-[10px]">
          <img
            src="/assets/icons/wika.svg"
            alt="logo"
            className="lg:w-auto sm:w-[110px] w-[90px] lg:h-auto h-[30px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center bg-[#F4F6F5] lg:w-[300px] sm:w-[220px] w-[180px] lg:h-[70.39px] sm:h-[50px] h-[45px] rounded-[20px] md:mx-[25px] mx-[10px]">
          <img
            src="/assets/icons/viking-pump.svg"
            alt="logo"
            className="lg:w-auto sm:w-[110px] w-[90px] lg:h-auto h-[30px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center bg-[#F4F6F5] lg:w-[300px] sm:w-[220px] w-[180px] lg:h-[70.39px] sm:h-[50px] h-[45px] rounded-[20px] md:mx-[25px] mx-[10px]">
          <img
            src="/assets/icons/g10.svg"
            alt="logo"
            className="lg:w-auto sm:w-[110px] w-[90px] lg:h-auto h-[30px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center bg-[#F4F6F5] lg:w-[300px] sm:w-[220px] w-[180px] lg:h-[70.39px] sm:h-[50px] h-[45px] rounded-[20px] md:mx-[25px] mx-[10px]">
          <img
            src="/assets/icons/opw.svg"
            alt="logo"
            className="lg:w-auto sm:w-[110px] w-[90px] lg:h-auto h-[30px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center bg-[#F4F6F5] lg:w-[300px] sm:w-[220px] w-[180px] lg:h-[70.39px] sm:h-[50px] h-[45px] rounded-[20px] md:mx-[25px] mx-[10px]">
          <img
            src="/assets/icons/wika.svg"
            alt="logo"
            className="lg:w-auto sm:w-[110px] w-[90px] lg:h-auto h-[30px] object-contain"
          />
        </div>
        <div className="flex items-center justify-center bg-[#F4F6F5] lg:w-[300px] sm:w-[220px] w-[180px] lg:h-[70.39px] sm:h-[50px] h-[45px] rounded-[20px] md:mx-[25px] mx-[10px]">
          <img
            src="/assets/icons/viking-pump.svg"
            alt="logo"
            className="lg:w-auto sm:w-[110px] w-[90px] lg:h-auto h-[30px] object-contain"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default LogosSlider;
