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

const Hero_2 = () => {
  const [MainWrap, setMainWrap] = useState([]);
  const [translate, settranslate] = useState("14");
  const [prefix, setprefix] = useState("vw");
  const [sign, setsign] = useState("+");
  const [left, setleft] = useState("none");
  const [right, setright] = useState("none");

  const wrap1: any = [
    // {
    //   img: "mothers'day",
    //   background: "/store/store_hero2_1.png",
    //   text: "giving is in full bloom.",
    //   sub: "Shop the gift guide",
    // },
    {
      img: "iphone 14 pro",
      background: "/store/store_hero2_1.png",
      text: "pro. beyound",
      color: "white",
      sub: "From $999 or $41.62/mo. for 24 mo. before trade-in*",
    },
    {
      img: "iphone 14",
      background: "/store/store_hero2_6.png",
      text: "wonderfull.",
      color: "black",
      sub: "From $799 or $33.29/mo. for 24 mo. before trade-in*",
    },

    {
      img: "ipad pro",
      background: "/store/store_hero2_2.png",
      text: "Supercharged by m2",
      color: "white",
      sub: "From $799 or $66.58/mo. for 12 mo.+",
    },
    {
      img: "ipad",
      background: "/store/store_hero2_7.png",
      text: "lovable. drawable. magical.",
      color: "black",
      sub: "from $449 or $37.41/mo. for 12 mo. +",
    },
    {
      img: "apple watch series 8",
      background: "/store/store_hero2_8.png",
      text: "A healthy leap ahead.",
      color: "white",
      sub: "From $399 or $16.62/mo. for 24 mo.+",
    },

    {
      img: "homepod",
      background: "/store/store_hero2_5.png",
      color: "white",
      text: "profound sound",
      sub: "$299",
    },
    {
      img: 'mackbook pro 14" and 16" ',
      background: "/store/store_hero2_4.png",
      color: "white",
      text: "mover. maker.   boundary",
      sub: "From $1999 or $166.58/mo. for 12 mo.+",
    },
    {
      img: "mac mini",
      background: "/store/store_hero2_9.png",
      color: "white",
      text: "More muscle. more hustle.",
      sub: "From $599 or $49.91/mo. for 12 mo.+",
    },

    {
      img: "apple watch ultra",
      background: "/store/store_hero2_3.png",
      color: "black",
      text: "adventure awaits.",
      sub: "From $799 or $33.29/mo. for 24 mo.+",
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
        settranslate("1330");
        break;
      case "1330":
        settranslate("1810");
        break;
      case "1810":
        settranslate("2290");
        break;
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
      case "2290":
        settranslate("1810");
        break;
      case "1810":
        settranslate("1330");
        break;
      case "1330":
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
    translate == "2290" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  };

  useEffect(() => {
    translate == "2290" ? setright("none") : setright("flex");
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
          <span className="text-black">The latest.</span> Take a look at whats
          new, right now.{" "}
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
                  <p className="uppercase font-[700]">{e.img}</p>
                  <h1 className="capitalize text-[30px] font-[700]">
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

export default Hero_2;
