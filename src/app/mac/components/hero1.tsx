import React from "react";

const Hero_1 = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-black h-[400px] flex-col gap-[50px] px-[20%] sm:px-[0.5%] ">
        <p className="text-center text-white text-[48px] sm:text-[35px] font-[700]">
          Introducing the new MackBook Pro and Mac mini.
        </p>

        <p className="px-[20px] py-[15px] bg-[#e9e8e8] hover:bg-white cursor rounded-[30px] text-[17px]">
          Watch the announcement{" "}
          <i className="bi bi-play rounded-[100%] p-[4px] bg-black text-white text-[12px]"></i>
        </p>
      </div>
    </>
  );
};

export default Hero_1;
