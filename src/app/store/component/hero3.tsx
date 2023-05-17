import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/store/store_hero3_1.png";
import img2 from "../../../../public/store/store_hero3_2.png";
import img3 from "../../../../public/store/store_hero3_3.png";
import img4 from "../../../../public/store/store_hero3_4.png";

// import img10 from "../../../../public/store/store_hero1_10.png";

const Hero_ = () => {
  const [MainWrap, setMainWrap] = useState([]);
  const [translate, settranslate] = useState("14");
  const [prefix, setprefix] = useState("vw");
  const [sign, setsign] = useState("+");
  const [left, setleft] = useState("none");
  const [right, setright] = useState("none");

  const moveright = () => {
    switch (translate) {
      case "14":
        setprefix("px");
        settranslate("0");
        break;
      case "0":
        setsign("-");
        settranslate("150");
        break;
      // case "420":
      //   settranslate("850");
      //   break;
      // case "850":
      //   settranslate("1330");
      //   break;
      // case "1330":
      //   settranslate("1810");
      //   break;
      // case "1810":
      //   settranslate("2290");
      //   break;
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
      // case "2290":
      //   settranslate("1810");
      //   break;
      // case "1810":
      //   settranslate("1330");
      //   break;
      // case "1330":
      //   settranslate("850");
      //   break;
      // case "850":
      //   settranslate("420");
      //   break;
      case "150":
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
    translate == "150" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  };

  useEffect(() => {
    translate == "150 " ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  }, [translate]);

  return (
    <>
      <div className="w-full py-[20px] sm:py-[10px] flex justify-center  bg-[#F3F5F7] text-[30px] sm:text-[25px] font-[700] pt-[80px] ">
        <p className="text-[gray] sm:w-[90%]  w-[70%]">
          <span className="text-black">Help is here.</span>Whenever and however
          you need it.{" "}
        </p>
      </div>
      {/*  */}
      {/* excerpt heading for the second hero section */}
      {/*  */}
      <div
        className="store_hero3_all_wrap "
        onMouseMove={showctn}
        onMouseLeave={hidectn}
      >
        <div className="mob_store_hero3_wrap ">
          <div className="store_hero3_main_col store_hero3_img1 ">
            <div className="store_hero3 flex flex-col gap-[10px] p-[30px] font-[700]">
              <p className="text-[12px]">APPLE SPECIALIST</p>
              <h1 className="text-[25px]">
                Shop one on one with a <br /> Specialist. Online or in a store.
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="store_hero3_main_col store_hero3_img2">
            <div className="store_hero3 flex flex-col gap-[10px] p-[30px] font-[700]">
              <p className="text-[15px] text-[darkred]">NEW</p>
              <h1 className="text-[25px] text-white">
                Shop with a specialist <br /> over video.
              </h1>
              <p className="text-white">
                Choose your next iPhone <br /> in a guided, one-way <br /> video
                session
              </p>
            </div>
          </div>

          {/*  */}
          <div className=" store_hero3_parent_col">
            <div className="store_hero3_child_col store_hero3_img3  ">
              <p className="p-[20px] text-[20px] font-[700]">
                Get to know your new device <br /> with a free personal session
              </p>
            </div>
            <div className="store_hero3_child_col store_hero3_img4">
              <p className="p-[20px] text-[20px] font-[700]">
                Get expert service <br /> and support at the <br /> Genius Bar.
              </p>
            </div>
          </div>
        </div>

        {/* this is for the desktop version  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}

        <div
          className="store_hero3_wrap  "
          style={{
            translate: `calc(${sign}${translate}${prefix}) 0px`,
          }}
        >
          <div className="store_hero3_main_col store_hero3_img1 ">
            <div className="store_hero3 flex flex-col gap-[10px] p-[30px] font-[700]">
              <p className="text-[12px]">APPLE SPECIALIST</p>
              <h1 className="text-[25px]">
                Shop one on one with a <br /> Specialist. Online or in a store.
              </h1>
            </div>
          </div>
          {/*  */}
          <div className="store_hero3_main_col store_hero3_img2">
            <div className="store_hero3 flex flex-col gap-[10px] p-[30px] font-[700]">
              <p className="text-[15px] text-[darkred]">NEW</p>
              <h1 className="text-[25px] text-white">
                Shop with a specialist <br /> over video.
              </h1>
              <p className="text-white">
                Choose your next iPhone <br /> in a guided, one-way <br /> video
                session
              </p>
            </div>
          </div>

          {/*  */}
          <div className=" store_hero3_parent_col">
            <div className="store_hero3_child_col store_hero3_img3  ">
              <p className="p-[20px] text-[22px] font-[700]">
                Get to know your new device <br /> with a free personal session
              </p>
            </div>
            <div className="store_hero3_child_col store_hero3_img4">
              <p className="p-[20px] text-[22px] font-[700]">
                Get expert service <br /> and support at the <br /> Genius Bar.
              </p>
            </div>
          </div>
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

export default Hero_;
