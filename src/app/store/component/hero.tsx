import React from "react";
import Image from "next/image";
import img from "../../../../public/store/hero.jpg";
const Hero = () => {
  return (
    <>
      <div className="w[100] h-[auto] flex justify-center  bg-[#F5F5F7] py-[50px]">
        <div className="w-[70%] h-auto flex justify-between items-center sm:flex-col sm:w-[90%] sm:items-start sm:gap-[20px]">
          <h1 className="w-[70%] sm:text-[30px] sm:w-full text-[gray] text-[40px] font-[700]">
            <span className="text-black">Store.</span> The best way to boy the
            products you love.
          </h1>

          <div className="flex-col flex gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <div className="rounded-[100%] border w-[40px] h-[40px]">
                <Image src={img} alt="placeholder" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-[1px] text-[14px]">
                <p>Need shoping help?</p>
                <span className="hover:underline hover:underline-offset-4 text-[blue] cursor">
                  Ask a Specialist
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="rounded-[100%]  w-[40px] h-[40px] flex justify-center items-center">
                <i className="bi bi-apple text-[30px]"></i>
              </div>
              <div className="flex flex-col gap-[1px] text-[14px]">
                <p>Visit an Apple Store</p>
                <span className="hover:underline hover:underline-offset-4 text-[blue] cursor">
                  Find one near you <i className=" bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
