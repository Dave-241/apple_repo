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

const Hero_1 = () => {
  const [MainWrap, setMainWrap] = useState([]);
  const [translate, settranslate] = useState("14");
  const [prefix, setprefix] = useState("vw");
  const [sign, setsign] = useState("+");
  const [left, setleft] = useState("none");
  const [right, setright] = useState("none");

  const wrap1: any = [
    { img: img1, text: "iphone" },
    { img: img2, text: "ipad" },
    { img: img3, text: "apple watch" },
    { img: img4, text: "airpods" },
    { img: img5, text: "airtags" },
    { img: img6, text: "apple TV 4k" },
    { img: img10, text: "mac" },
    { img: img7, text: "homePod" },
    { img: img8, text: "Accessories" },
    { img: img9, text: "apple gift card" },
  ];

  const moveright = () => {
    switch (translate) {
      case "14":
        setprefix("px");
        settranslate("0");
        break;
      case "0":
        setsign("-");
        setprefix("px");
        settranslate("150");
        break;
      // case "150":
      //   settranslate("320");
      //   break;

      default:
        break;
    }
  };
  const moveleft = () => {
    switch (translate) {
      // case "320":
      //   settranslate("150");
      //   break;
      case "150":
        setsign("+");
        setprefix("px");
        settranslate("0");
        break;
      case "0":
        setsign("+");
        setprefix("vw");
        settranslate("14");
        break;

      default:
        break;
    }
  };

  const hidectn = () => {
    setright("none");
    setleft("none");
  };

  const showctn = () => {
    translate == "150" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  };

  useEffect(() => {
    translate == "150" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  }, [translate]);

  useEffect(() => {
    setMainWrap(wrap1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="store_hero1_all_wrap "
        onMouseMove={showctn}
        onMouseLeave={hidectn}
      >
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
              </div>
            );
          })}
        </div>
        <div
          className="store_hero1_wrap "
          style={{ translate: `calc(${sign}${translate}${prefix}) 0px` }}
        >
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

                <p>{e.text}</p>
              </div>
            );
          })}
        </div>

        <div className="store_hero1_left_wrap" style={{ display: left }}>
          <div className="store_hero1_left" onClick={moveleft}>
            <i className=" bi bi-chevron-left"></i>
          </div>
        </div>
        <div className="store_hero1_right_wrap " style={{ display: right }}>
          <div className="store_hero1_right" onClick={moveright}>
            <i className=" bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_1;
