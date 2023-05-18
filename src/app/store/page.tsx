"use client";

import React, { useEffect, useState } from "react";
import Header from "../header";
import Hero from "./component/hero";
import Hero_1 from "./component/hero1";
import Hero_2 from "./component/hero2";
import Hero_3 from "./component/hero3";
import Hero_4 from "./component/hero4";
import Hero_5 from "./component/hero5";
import Hero_6 from "./component/hero6";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header navbg="#F3F5F7" navtext="black" opacity="0.5" />
      <div
        className="store_excerpt w-[100%] h-[auto] text-center    mt-[40px]  text-[15px] first-letter "
        style={{ padding: display }}
      >
        <p className="sm:hidden capitalize text-center w-[70%]">
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
      <Hero />
      <Hero_1 />
      <Hero_2 />
      <Hero_3 />
      <Hero_4 />
      <Hero_5 />
      <Hero_6 />
    </>
  );
};

export default Awesome;
