import React from "react";

const Hero4 = () => {
  return (
    <>
      <div className="w-full bg-white flex p-[30px] sm:p-[10px]">
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
        </div>
      </div>
    </>
  );
};

export default Hero4;
