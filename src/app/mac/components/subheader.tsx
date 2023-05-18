"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/store/store_hero1_1.png";
import img2 from "../../../../public/store/store_hero1_2.png";
import img3 from "../../../../public/store/store_hero1_3.png";
import img4 from "../../../../public/store/store_hero1_4.png";
import img5 from "../../../../public/store/store_hero1_5.png";
import img6 from "../../../../public/store/store_hero1_6.png";
import img7 from "../../../../public/store/store_hero1_7.png";
import img8 from "../../../../public/store/store_hero1_8.png";
import img9 from "../../../../public/store/store_hero1_9.png";
import img10 from "../../../../public/store/store_hero1_10.png";

const Subheader = () => {
  const [MainWrap, setMainWrap] = useState([]);

  const wrap1: any = [
    { img: img1, text: "iphone" },
    { img: img2, text: "ipad", more: "NEW" },
    { img: img3, text: "apple watch" },
    { img: img4, text: "airpods", more: "NEW" },
    { img: img5, text: "airtags" },
    { img: img6, text: "apple TV 4k" },
    { img: img10, text: "mac" },
    { img: img7, text: "homePod" },
    { img: img8, text: "Accessories" },
    { img: img9, text: "apple gift card" },
  ];

  useEffect(() => {
    setMainWrap(wrap1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="store_hero1_all_wrap hidden sm:block mt-[60px]">
        <div className="mob_store_hero1_wrap ">
          {MainWrap.map((e: any, index: any) => {
            return (
              <div className="store_hero1_main_col " key={index}>
                <div className="store_hero1_img">
                  <Image
                    src={e.img}
                    alt={e.img}
                    className="w-[100%] h-[100%] "
                  />
                </div>

                <p className="text-[12px]">{e.text}</p>
                <p className="text-[darkorange] text-[12px]">{e.more}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Subheader;
