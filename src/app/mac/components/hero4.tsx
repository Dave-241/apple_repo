import Image from "next/image";
import React from "react";
import img from "../../../../public/mac/mac_hero5_mob.jpg";

const Hero4 = () => {
  return (
    <>
      <div className="w-full bg-white flex p-[30px] sm:p-[10px] flex-col gap-[30px] sm:gap[10px]">
        <div className="w-full  h-[600px] hero4_bg sm:h-[500px] ">
          <div className=" w-[fit-content] sm:w-full text-center h-full sm:h-auto sm:pt-[40px] justify-center flex-col flex pl-[80px] text-[#f5f5f7] gap-[10px] sm:pl-0 ">
            <h3 className="text-[24px]  sm:text-[21px] ">Behind the Mac</h3>
            <h1 className="text-[48px] sm:text-[32px]  font-[700]">
              Hear the Force
            </h1>
            <p className="text-center text-[17px]">
              Learn how the pros at Skywalker <br /> Sound push the limits of
              sonic storytelling.
            </p>
            <p className="text-blue-500 hover:underline cursor text-[17px]">
              Watch the film <i className="bi bi-play"></i>
            </p>
          </div>

          {/*  */}
          {/*  */}
        </div>
        <div className="w-full   h-[600px] hero5_bg sm:h-[500px] bg-[#f2f2f2] relative">
          <Image
            src={img}
            alt="tis"
            className="hidden sm:block absolute bottom-0 w-[700px] h-auto right-[-50px] z-[2]"
          />
          <Image
            src={img}
            alt="tis"
            className="block sm:hidden absolute bottom-0 w-[70%] h-auto right-[-200px] z-[2]"
          />
          <div className=" w-[fit-content] sm:w-full text-center h-full sm:h-auto sm:pt-[40px] justify-center flex-col flex pl-[80px] text-[#1d1d1f] gap-[10px] sm:pl-0 ">
            <h1 className="text-[48px] sm:text-[32px] sm:w-[100%] z-[20] font-[700] w-[60%]">
              Get 3% Daily Cash back with Apple Card.
            </h1>
            <p className="text-center text-[17px] w-[60%] z-[20] sm:w-[100%]">
              And pay for your new Mac over 12 months, interest-free when you
              choose to check out with Apple Card Monthly Installments.*
            </p>
            <p className="text-blue-500 hover:underline cursor sm:w-[100%] text-[17px] z-[20] w-[60%]">
              Learn more <i className="bi bi-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero4;
