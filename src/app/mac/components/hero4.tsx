import Image from "next/image";
import React from "react";
import img from "../../../../public/mac/mac_hero5_mob.jpg";
import hero8 from "../../../../public/mac/mac_hero8.jpg";

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
        {/* third section */}
        <div className="w-full sm:gap-[20px]  h-[700px] hero5_bg justify-between flex sm:flex-col sm:h-auto">
          <div className="w-[49%] sm:w-[100%] border relative bg-[#f2f2f2] sm:h-[500px] ">
            <div className="absolute bottom-0 left-0 hero6_1 w-full h-[40%]  sm:h-[180px]"></div>
            <div className="  sm:w-full pt-[20px] text-center sm:h-auto sm:pt-[20px] justify-center flex-col flex items-center text-[#1d1d1f] gap-[10px] sm:pl-0  w-full ">
              <p className="text-[24px] font-[700] ">Accessories</p>
              <h1 className="text-[48px] sm:text-[32px] sm:w-[100%] z-[20] font-[700] w-[80%] ">
                Explore Mac accessories.
              </h1>
              {/* <p className="text-center text-[17px] z-[20] sm:w-[100%] w-[80%]">
                And pay for your new Mac over 12 months, interest-free when you
                choose to check out with Apple Card Monthly Installments.*
              </p> */}
              <p className="px-[20px] py-[10px] bg-blue-600 text-white rounded-[20px] cursor hover:bg-blue-900">
                Shop
              </p>
              {/* <p className="text-blue-500 hover:underline cursor sm:w-[100%] text-[17px] z-[20] ">
                Learn more <i className="bi bi-chevron-right"></i>
              </p> */}
            </div>
          </div>

          {/*  */}
          {/*  */}
          <div className="w-[49%] sm:w-[100%] border relative bg-[#f2f2f2] sm:h-[500px]">
            <div className="absolute bottom-0 left-0 hero6_2 w-full sm:h-[180px] h-[40%]"></div>
            <div className=" w-[fit-content] sm:w-full pt-[20px] text-center sm:h-auto sm:pt-[20px] justify-center flex-col flex items-center text-[#1d1d1f] gap-[10px] sm:pl-0  ">
              <p className="text-[24px] font-[700] ">Apple Trade In</p>
              <h1 className="text-[48px] sm:text-[32px] sm:w-[100%] z-[20] font-[700] w-[80%] ">
                Get credit toward a new Mac.
              </h1>
              <p className="text-center text-[20px] z-[20] sm:text-[16px] sm:w-[100%] w-[80%]">
                And pay for your new Mac over 12 months, interest-free when you
                choose to check out with Apple Card Monthly Installments.*
              </p>

              <p className="text-blue-500 hover:underline cursor sm:w-[100%] text-[17px] z-[20] ">
                Find your trade‑in value<i className="bi bi-chevron-right"></i>
              </p>
            </div>
          </div>
        </div>

        {/* fourth section  */}
        <div className="w-full  h-auto justify-between flex items-center sm:flex-col sm:gap-[50px]">
          <div className=" w-[30%] flex flex-col items-center justify-center sm:w-[90%] gap-[5px]">
            <i className="bi bi-box text-[50px] text-gray-500"></i>
            <h1 className="text-[21px] font-[700]">Fast delivery or pickup</h1>
            <h1 className="text-[21px] text-center">
              Enjoy two-hour delivery from an Apple Store, free delivery, or
              easy pickup.
            </h1>
            <p className="text-[21px] hover:underline cursor text-blue-600">
              Learn more <i className="bi bi-chevron-right"></i>
            </p>
          </div>
          <div className=" w-[30%] flex flex-col items-center justify-center sm:w-[90%] gap-[5px]">
            <i className="bi bi-currency-dollar text-[50px] text-gray-500"></i>
            <h1 className="text-[21px] font-[700]">Pay monthly at 0% APR</h1>
            <h1 className="text-[21px] text-center">
              You can pay over time when you choose to check out with Apple Card
              Monthly Installments.*
            </h1>
            <p className="text-[21px] hover:underline cursor text-blue-600">
              Learn more <i className="bi bi-chevron-right"></i>
            </p>
          </div>
          <div className=" w-[30%] flex flex-col items-center justify-center sm:w-[90%] gap-[5px]">
            <i className="bi bi-chat text-[50px] text-gray-500"></i>
            <h1 className="text-[21px] font-[700]">Get help buying</h1>
            <h1 className="text-[21px] text-center">
              Have a question? Call a Specialist or chat online. Call
              1‑800-MY‑APPLE.
            </h1>
            <p className="text-[21px] hover:underline cursor text-blue-600">
              Contact us <i className="bi bi-chevron-right"></i>
            </p>
          </div>
        </div>

        <h1 className="text-[64px] font-[700] text-center py-[75px] sm:text-[32px]">
          What makes a Mac a Mac?
        </h1>

        {/* sixth section */}
        <div className="w-full sm:gap-[20px]  h-[700px] hero5_bg justify-between flex sm:flex-col sm:h-auto">
          <div className="w-[49%] sm:w-[100%] border relative bg-[#fafafa] sm:h-[500px] ">
            <div className="absolute bottom-0 left-0 hero7_1 w-full h-[80%]  sm:h-[400px]"></div>
            <div className="  sm:w-full pt-[70px] text-center sm:h-auto sm:pt-[20px] justify-center flex-col flex items-center text-[#1d1d1f] gap-[10px] sm:pl-0  w-full ">
              <h1 className="text-[48px] sm:text-[32px] sm:w-[100%] z-[20] font-[700] w-[80%] ">
                Mac does <span className="bg-[#00ff00]"> that. </span>
              </h1>
              <p className="text-center text-[17px] z-[20] sm:w-[100%] w-[80%]">
                Discover what Mac can do for you.
              </p>
              {/* <p className="px-[20px] py-[10px] bg-blue-600 text-white rounded-[20px] cursor hover:bg-blue-900">
                Shop
              </p> */}
              <p className="text-blue-500 hover:underline cursor sm:w-[100%] text-[17px] z-[20] ">
                Learn more <i className="bi bi-chevron-right"></i>
              </p>
            </div>
          </div>

          {/*  */}
          {/*  */}
          <div className="w-[49%] sm:w-[100%] border relative bg-[#fafafa] sm:h-[500px]">
            <div className="absolute bottom-0 left-0 hero7_2 w-full sm:h-[200px] h-[50%]"></div>
            <div className=" w-[fit-content] sm:w-full pt-[70px] text-center sm:h-auto sm:pt-[20px] justify-center flex-col flex items-center text-[#1d1d1f] gap-[10px] sm:pl-0  ">
              <p className="text-[24px] font-[700] ">Continuity</p>
              <h1 className="text-[48px] sm:text-[32px] sm:w-[100%] z-[20] font-[700] w-[80%] ">
                All your devices. One seamless experience.
              </h1>
              {/* <p className="text-center text-[20px] z-[20] sm:text-[16px] sm:w-[100%] w-[80%]">
                And pay for your new Mac over 12 months, interest-free when you
                choose to check out with Apple Card Monthly Installments.*
              </p> */}

              <p className="text-blue-500 hover:underline cursor sm:w-[100%] text-[17px] z-[20] ">
                Learn more<i className="bi bi-chevron-right"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full   h-[600px] hero5_bg sm:h-[500px] bg-[#fafafa] relative">
          <Image
            src={hero8}
            alt="tis"
            className="hidden sm:block absolute bottom-0 w-[1000px] h-auto right-[0px] z-[2]"
          />
          <Image
            src={hero8}
            alt="tis"
            className="block sm:hidden absolute bottom-0 w-[70%] h-auto right-[-120px] z-[2]"
          />
          <div className=" w-[fit-content] sm:w-full text-center h-full sm:h-auto sm:pt-[40px] justify-center flex-col flex pl-[80px] text-[#1d1d1f] gap-[10px] sm:pl-0 ">
            <h3 className="text-[24px] z-[20] sm:text-[17px] sm:w-[100%]  font-[700] w-[60%]">
              macOS Ventura
            </h3>
            <h1 className="text-[48px] sm:text-[32px] sm:w-[100%] z-[20] font-[700] w-[60%]">
              Works smarter. Plays harder. Goes further.
            </h1>
            {/* <p className="text-center text-[17px] w-[60%] z-[20] sm:w-[100%]">
              And pay for your new Mac over 12 months, interest-free when you
              choose to check out with Apple Card Monthly Installments.*
            </p> */}
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
