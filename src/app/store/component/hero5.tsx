import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "/store/store_hero2_1.png";
import img2 from "../../../../public/store/store_hero2_2.png";
import img3 from "../../../../public/store/store_hero2_3.png";
import img4 from "../../../../public/store/store_hero2_4.png";
import img5 from "../../../../public/store/store_hero2_5.png";
import img6 from "../../../../public/store/store_hero2_6.png";
import img7 from "../../../../public/store/store_hero2_7.png";
import img8 from "../../../../public/store/store_hero2_8.png";
import img9 from "../../../../public/store/store_hero2_9.png";
// import img10 from "../../../../public/store/store_hero1_10.png";

const Hero_5 = () => {
  const [MainWrap, setMainWrap] = useState([]);
  const [translate, settranslate] = useState("14");
  const [prefix, setprefix] = useState("vw");
  const [sign, setsign] = useState("+");
  const [left, setleft] = useState("none");
  const [right, setright] = useState("none");

  const wrap1: any = [
    {
      img: "APPLE TV+",
      background: "/store/store_hero4_1.png",
      text: "Get 3 months of Apple TV+ free when you buy an Apple device.",
      color: "white",
    },
    {
      img: "APPLE MUSIC",
      background: "/store/store_hero4_2.png",
      text: "Rihanna's iconic hits now in Spatal Audio.^",
      color: "white",
    },

    {
      img: "",
      background: "/store/store_hero4_3.png",
      text: "Six Apple services. One easy subscription.",
      color: "black",
    },
    {
      img: "",
      background: "/store/store_hero4_4.png",
      text: "We got you covered.",
      color: "black",
      sub: "AppleCare+ now comes with unlimited repairs for accidental damage protection.",
    },
    {
      img: "",
      background: "/store/store_hero4_5.png",
      text: "Discover all the way to use Apple Pay.",
      color: "black",
    },
    {
      img: "HOME",
      background: "/store/store_hero4_6.png",
      text: "See how one app can control an entire home.",
      color: "black",
    },
  ];

  const moveright = () => {
    switch (translate) {
      case "14":
        setprefix("px");
        settranslate("0");
        break;
      case "0":
        setsign("-");
        settranslate("420");
        break;
      case "420":
        settranslate("850");
        break;
      case "850":
        settranslate("1270");
        break;
      //   case "1330":
      //     settranslate("1810");
      //     break;
      //   case "1810":
      //     settranslate("2290");
      //     break;
      // case "2290":
      //   settranslate("2770");
      //   break;
      // case "2770":
      //   settranslate("3250");
      //   break;

      default:
        break;
    }
  };
  const moveleft = () => {
    switch (translate) {
      // case "3250":
      //   settranslate("2770");
      //   break;
      // case "2770":
      //   settranslate("2290");
      //   break;
      //   case "2290":
      //     settranslate("1810");
      //     break;
      //   case "1810":
      //     settranslate("1330");
      //     break;
      case "1270":
        settranslate("850");
        break;
      case "850":
        settranslate("420");
        break;
      case "420":
        setsign("+");
        settranslate("0");
        break;
      case "0":
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
    translate == "1270" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  };

  useEffect(() => {
    translate == "1270" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  }, [translate]);

  useEffect(() => {
    setMainWrap(wrap1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-full py-[20px] sm:py-[10px] flex justify-center  bg-[#F3F5F7] text-[30px] sm:text-[25px] font-[700] pt-[80px] ">
        <p className="text-[gray] sm:w-[90%]  w-[70%]">
          <span className="text-black">The Apple experience.</span> Do even more
          with Apple products and services.
        </p>
      </div>
      {/*  */}
      {/* excerpt heading for the second hero section */}
      {/*  */}
      <div
        className="store_hero2_all_wrap "
        onMouseMove={showctn}
        onMouseLeave={hidectn}
      >
        <div className="mob_store_hero2_wrap ">
          {MainWrap.map((e: any, index: any) => {
            return (
              <div
                className="store_hero2_main_col "
                key={index}
                style={{
                  backgroundImage: `url(${e.background})`,
                  color: e.color,
                }}
              >
                <div className="store_hero2_img px-[20px] py-[20px] flex flex-col gap-[10px]">
                  <p className="uppercase text-[15px] font-[700]">{e.img}</p>
                  <h1 className="capitalize text-[25px] font-[700]">
                    {e.text}
                  </h1>
                  <h3 className="text-[15px]">{e.sub}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* this is for the desktop version  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        <div
          className="store_hero2_wrap  "
          style={{
            translate: `calc(${sign}${translate}${prefix}) 0px`,
          }}
        >
          {MainWrap.map((e: any, index: any) => {
            return (
              <div
                className="store_hero2_main_col"
                style={{
                  backgroundImage: `url(${e.background})`,
                  color: e.color,
                }}
                key={index}
              >
                <div className="store_hero2_img px-[20px] py-[20px] flex flex-col gap-[10px]">
                  <p className="uppercase font-[700] text-[12px]     ">
                    {e.img}
                  </p>
                  <h1 className="capitalize text-[25px] font-[700]">
                    {e.text}
                  </h1>
                  <h3 className="text-[20px]">{e.sub}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="store_hero2_left_wrap" style={{ display: left }}>
          <div className="store_hero2_left" onClick={moveleft}>
            <i className=" bi bi-chevron-left"></i>
          </div>
        </div>
        <div className="store_hero2_right_wrap " style={{ display: right }}>
          <div className="store_hero2_right" onClick={moveright}>
            <i className=" bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_5;
