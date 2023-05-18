import React from "react";

const Hero_2 = () => {
  return (
    <>
      <div className="w-full h-[700px] sm:h-[470px] bg-black mac_hero2_bg mt-[15px] flex justify-center pt-[40px] ">
        <div className="flex-col flex gap-[8px] items-center text-white">
          <p className="text-[darkorange] text-[14px] font-[700]">NEW</p>
          <h1 className="text-[48px] font-[700] sm:text-[40px]">MacBook Pro</h1>
          <h3 className="text-[24px] sm:text-[21px]">
            Mover.Maker.Boundary breaker.
          </h3>
          <p className="text-[17px] pt-[20px] sm:pt-0">From $1999</p>

          <div className="flex gap-[20px] items-center">
            <p className="cursor bg-blue-600 py-[10px] px-[20px] rounded-[30px] hover:bg-[blue]">
              Buy
            </p>
            <p className="hover:underline hover:underline-offset-4 cursor text-[blue]">
              learn more <i className="bi bi-chevron-right  "></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_2;
