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
  const [translate, settranslate] = useState("26");
  const [sign, setsign] = useState("+");
  const [left, setleft] = useState("none");
  const [right, setright] = useState("flex");

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
      case "26":
        settranslate("6");
        break;
      case "6":
        setsign("-");
        settranslate("15");
        break;

      default:
        break;
    }
  };
  const moveleft = () => {
    switch (translate) {
      case "15":
        setsign("+");
        settranslate("6");
        break;
      case "6":
        setsign("+");
        settranslate("26");
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
    translate == "15" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "26" ? setleft("none") : setleft("flex");
  };

  useEffect(() => {
    translate == "15" ? setright("none") : setright("flex");
    // translate < 20 ? settranslate(20) : null;

    translate == "26" ? setleft("none") : setleft("flex");
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

                <h3>{e.text}</h3>
              </div>
            );
          })}
        </div>
        <div
          className="store_hero1_wrap "
          style={{ translate: `calc(${sign}${translate}vw) 0px` }}
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

                <h3>{e.text}</h3>
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
