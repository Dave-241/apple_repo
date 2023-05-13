import React from "react";
import Header from "../header";

const Awesome = () => {
  return (
    <>
      <Header navbg="#F5F5F7" navtext="black" opacity="0.5" />
      {/* little except text */}
      <div className="w-[100%] h-[auto] py-[12px] bg-white text-center  flex justify-center items-center mt-[40px] excerpt text-[15px]">
        <p className="sm:hidden capitalize text-center">
          Davis Isibor. note: only the main navigations are functioning and
          linked. the dropdown menu isnt linked to any page here. this is an
          apple clone with limited number of pages
          <span className="text-[blue] hover:underline hover:underline-offset-4 cursor">
            {" "}
            Apple Clone (designed by Davis)
            <i className=" bi bi-chevron-right"></i>{" "}
          </span>
        </p>

        <p className="sm:block hidden capitalize text-center">
          apple clone. note : only the main navigation links do function. links
          embeded in pages do not function and is not linked to any page here
          <span className="text-[blue] hover:underline hover:underline-offset-4 cursor">
            {" "}
            Apple Clone (designed by Davis)
            <i className=" bi bi-chevron-right"></i>{" "}
          </span>
        </p>
      </div>
    </>
  );
};

export default Awesome;
