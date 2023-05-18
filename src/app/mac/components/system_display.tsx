import React, { useState } from "react";
import Desktop from "./destop";
import Laptop from "./laptop";

const System_display = () => {
  const [desktop, setdesktop] = useState(false);
  const [laptop, setlaptop] = useState(true);

  const showlaptop = () => {
    setdesktop(false);
    setlaptop(true);
  };
  const showdesktop = () => {
    setdesktop(true);
    setlaptop(false);
  };

  return (
    <>
      <h1 className="text-center pt-[80px] sm:hidden  font-[700] text-[40px] bg-[#F5F5F7]">
        Which Mac is right for you?
      </h1>
      <h1 className="text-center hidden font-[700] sm:block sm:pt-[50px] sm:text-[32px] bg-[#F5F5F7]">
        Which Mac is <br /> right for you?
      </h1>

      {/* now the main differentiation */}
      {/*  */}
      <div className="w-full flex justify-center py-[30px] bg-[#F5F5F7]">
        <div className="flex gap-[50px] w-auto h-auto border-b-[2px] ">
          <p
            className="pb-[12px] text-[17px] cursor hover:text-black text-gray-600"
            style={{ borderBottom: laptop ? "1px solid black" : "" }}
            onClick={showlaptop}
          >
            Laptop
          </p>
          <p
            className="pb-[12px] text-[17px] cursor hover:text-black text-gray-600"
            style={{ borderBottom: desktop ? "1px solid black" : "" }}
            onClick={showdesktop}
          >
            Desktop
          </p>
        </div>
      </div>

      {/* check if destop or laptop */}
      {desktop ? <Desktop /> : null}
      {laptop ? <Laptop /> : null}

      <div className="w-full sm:w-[100%] sm:px-[5%] sm:justify-between py-[60px] bg-[#F5F5F7] flex justify-center items-center gap-[60px] sm:gap-0 ">
        <p className="text-[25px] sm:text-[17px] text-blue-700 hover:underline hover:underline-offset-4 cursor">
          Compare all Mac models <i className="bi bi-chevron-right"></i>
        </p>
        <p className="text-[25px] sm:text-[17px] text-blue-700 hover:underline hover:underline-offset-4 cursor">
          Shop Mac <i className="bi bi-chevron-right"></i>
        </p>
      </div>
    </>
  );
};

export default System_display;
