"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/mac/mac_subheader_1.svg";
import img2 from "../../../../public/mac/mac_subheader_2.svg";
import img3 from "../../../../public/mac/mac_subheader_3.svg";
import img4 from "../../../../public/mac/mac_subheader_4.svg";
import img5 from "../../../../public/mac/mac_subheader_5.svg";
import img6 from "../../../../public/mac/mac_subheader_6.svg";
import img7 from "../../../../public/mac/mac_subheader_8.svg";
import img8 from "../../../../public/mac/mac_subheader_9.svg";
import img9 from "../../../../public/mac/mac_subheader_11.svg";
import img11 from "../../../../public/mac/mac_subheader_10.svg";
import img10 from "../../../../public/mac/mac_subheader_7.svg";

const Subheader = () => {
  const [MainWrap, setMainWrap] = useState([]);

  const wrap1: any = [
    { img: img1, text: "MackBook Air" },

    { img: img3, text: 'Mac 24"' },
    { img: img4, text: "Mac Mini", more: "NEW" },
    { img: img5, text: "Mac Studio" },
    { img: img6, text: "Mac Pro" },
    { img: img10, text: "Compare" },
    { img: img7, text: "Display" },
    { img: img2, text: "MackBook Pro", more: "NEW" },
    { img: img8, text: "Accessories" },
    { img: img11, text: "ventura" },
    { img: img9, text: "Shop Mac" },
  ];

  useEffect(() => {
    setMainWrap(wrap1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* for mobile screens */}
      <div className="mac_hero1_all_wrap hidden sm:block mt-[40px]">
        <div className="mob_mac_hero1_wrap ">
          {MainWrap.map((e: any, index: any) => {
            return (
              <div className="mac_hero1_main_col " key={index}>
                <div className="mac_hero1_img">
                  <Image
                    src={e.img}
                    alt={e.img}
                    className="w-[100%] h-[100%] "
                  />
                </div>

                <p className="text-[12px]">{e.text}</p>
                <p className="text-[darkorange] text-[10px]">{e.more}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* for desktop screens */}
      {/*  */}
      {/*  */}
      <div className="w-full flex justify-center items-center h-auto mt-[40px] sm:hidden py-[15px]">
        <div className="w-[80%] h-auto flex justify-between flex-wrap">
          {MainWrap.map((e: any, index: any) => {
            return (
              <div
                className=" flex flex-col items-center hover:text-blue-500 cursor"
                key={index}
              >
                <Image src={e.img} alt="images" />
                <p className="text-[12px]">{e.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Subheader;
