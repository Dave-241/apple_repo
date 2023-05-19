import React, { useState } from "react";
import Desktop from "./destop";
import Laptop from "./laptop";
import { FadeInTransition } from "react-transitions-library/dist/transitions";

const System_display = () => {
  const [desktop, setdesktop] = useState(false);
  const [laptop, setlaptop] = useState(false);

  const showlaptop = () => {
    setlaptop(true);
  };
  const showdesktop = () => {
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
      <div className="w-full flex flex-col justify-center items-center py-[30px] bg-[#F5F5F7] ">
        <div className="flex gap-[50px] w-[50%] justify-center h-auto border-b-[2px] ">
          <p
            className="pb-[12px] text-[17px] cursor hover:text-black text-gray-600"
            style={{
              borderBottom: laptop ? "1px solid black" : "",
              color: laptop ? "black" : "rgb(75 85 99)",
            }}
            onClick={showlaptop}
          >
            Laptop
          </p>
          <p
            className="pb-[12px] text-[17px] cursor hover:text-black text-gray-600"
            style={{
              borderBottom: !laptop ? "1px solid black" : "",
              color: !laptop ? "black" : "rgb(75 85 99)",
            }}
            onClick={showdesktop}
          >
            Desktop
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center bg-[#F5F5F7] min-h-[500px]">
        {laptop ? <Laptop /> : <Desktop />}
      </div>

      {/* check if destop or laptop */}

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
