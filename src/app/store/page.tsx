"use client";

import React, { useEffect, useState } from "react";
import Header from "../header";

const Awesome = () => {
  const [desktop_ex, setdesktop_ex] = useState("");
  const [display, setdisplay] = useState("0");
  const [mob_ex, setmob_ex] = useState("");
  const [mob_ctn, setmob_ctn] = useState("");

  const change = () => {
    setdisplay("12px 0");
    setdesktop_ex(
      " Davis Isibor. note: only the main navigations are functioning andlinked. the dropdown menu isnt linked to any page here. this is anapple clone with limited number of pages",
    );

    setmob_ex(
      " apple clone. note : only the main navigation links do function. linksembeded in pages do not function and is not linked to any page here",
    );

    setmob_ctn(" Apple Clone (designed by Davis)");
  };

  useEffect(() => {
    setTimeout(change, 2000);
  }, []);
  return (
    <>
      <Header navbg="#F5F5F7" navtext="black" opacity="0.5" />
      {/* little except text */}
      <div
        className="store_excerpt w-[100%] h-[auto] text-center    mt-[40px]  text-[15px] first-letter "
        style={{ padding: display }}
      >
        <p className="sm:hidden capitalize text-center w-[80%]">
          {desktop_ex}
          <span className="text-[blue] hover:underline hover:underline-offset-4 cursor">
            {" "}
            {mob_ctn}
            <i
              className=" bi bi-chevron-right"
              style={{ display: mob_ctn.length > 1 ? "inline-block" : "none" }}
            ></i>{" "}
          </span>
        </p>

        <p className="sm:block hidden capitalize text-center sm:w-[90%]">
          {mob_ex}
          <span className="text-[blue] hover:underline hover:underline-offset-4 cursor">
            {" "}
            {mob_ctn}
            <i
              className=" bi bi-chevron-right"
              style={{ display: mob_ctn.length > 1 ? "inline-block" : "none" }}
            ></i>{" "}
          </span>
        </p>
      </div>
    </>
  );
};

export default Awesome;
