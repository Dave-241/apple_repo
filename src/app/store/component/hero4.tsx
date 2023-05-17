import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "../../../../public/store/store_hero3_1.png";
import img2 from "../../../../public/store/store_hero3_2.png";
import img3 from "../../../../public/store/store_hero3_3.png";
import img4 from "../../../../public/store/store_hero3_4.png";

// import img10 from "../../../../public/store/store_hero1_10.png";

const Hero_4 = () => {
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
        settranslate("180");
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
      case "180":
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
    translate == "180" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  };

  useEffect(() => {
    translate == "180 " ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "14" ? setleft("none") : setleft("flex");
  }, [translate]);

  return (
    <>
      <div className="w-full py-[20px] sm:py-[10px] flex justify-center  bg-[#F3F5F7] text-[30px] sm:text-[25px] font-[700] pt-[80px] ">
        <p className="text-[gray] sm:w-[90%] sm:pt-[50px]  w-[70%]">
          <span className="text-black">The Apple Store difference. </span>Even
          more reasons to shop with us.{" "}
        </p>
      </div>
      {/*  */}
      {/* excerpt heading for the second hero section */}
      {/*  */}
      <div
        className="store_hero4_all_wrap "
        onMouseMove={showctn}
        onMouseLeave={hidectn}
      >
        <div className="mob_store_hero3_wrap ">
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-truck icons box1"></i>
              <h1 className="">
                Enjoy <span className="box1">two-hour delivery</span> from an
                Apple Store, <span className="box1">free delivery</span>, or{" "}
                <span className="box1">easy pickup.</span>
              </h1>
            </div>
          </div>
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-device-ssd-fill icons box2"></i>
              <h1 className="">
                <span className="box2">Trade in your current device. </span>
                Get credit toward a new one.{" "}
              </h1>
            </div>
          </div>
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-card-heading icons box1"></i>
              <h1 className="">
                {" "}
                Pay in full or
                <span className="box1"> pay over time. </span>
                Your choice.
              </h1>
            </div>
          </div>
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-cart-fill icons box3"></i>
              <h1 className="">
                {" "}
                Get a<span className="box3"> personalized shopping </span>
                experience in the
                <span className="box3"> Apple Store app.</span>
              </h1>
            </div>
          </div>
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-emoji-smile icons box3"></i>
              <h1 className="">
                {" "}
                Make them yours.
                <span className="box3">
                  {" "}
                  Engrave a mix of emoji, names and numbers for free.{" "}
                </span>
              </h1>
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
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-truck icons box1"></i>
              <h1 className="">
                Enjoy <span className="box1">two-hour delivery</span> from an
                Apple Store, <span className="box1">free delivery</span>, or{" "}
                <span className="box1">easy pickup.</span>
              </h1>
            </div>
          </div>
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-device-ssd-fill icons box2"></i>
              <h1 className="">
                <span className="box2">Trade in your current device. </span>
                Get credit toward a new one.{" "}
              </h1>
            </div>
          </div>
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-card-heading icons box1"></i>
              <h1 className="">
                {" "}
                Pay in full or
                <span className="box1"> pay over time. </span>
                Your choice.
              </h1>
            </div>
          </div>
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-cart-fill icons box3"></i>
              <h1 className="">
                {" "}
                Get a<span className="box3"> personalized shopping </span>
                experience in the
                <span className="box3"> Apple Store app.</span>
              </h1>
            </div>
          </div>
          <div className="store_hero4_main_col">
            <div className="store_hero4 ">
              <i className="bi bi-emoji-smile icons box3"></i>
              <h1 className="">
                {" "}
                Make them yours.
                <span className="box3">
                  {" "}
                  Engrave a mix of emoji, names and numbers for free.{" "}
                </span>
              </h1>
            </div>
          </div>
          {/*  */}
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

export default Hero_4;
