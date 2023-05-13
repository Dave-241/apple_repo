import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../public/thumb_mob_slider1.png";
import img2 from "../../public/thumb_mob_slider2.png";
import img3 from "../../public/thumb_mob_slider3.png";
import img4 from "../../public/thumb_mob_slider4.png";
import img5 from "../../public/thumb_mob_slider5.png";
import img6 from "../../public/thumb_mob_slider6.png";
import img7 from "../../public/thumb_mob_slider7.png";
import img8 from "../../public/thumb_mob_slider8.png";
import img9 from "../../public/thumb_mob_slider9.png";
import img10 from "../../public/thumb_mob_slider10.png";
import general from "../../public/general.png";

const Slider = () => {
  const [normal, setnormal] = useState("-401");
  const next = () => {
    switch (normal) {
      case "9":
        setnormal("-73");
        break;
      case "-73":
        setnormal("-155");
        break;
      case "-155":
        setnormal("-237");
        break;
      case "-237":
        setnormal("-319");
        break;
      case "-319":
        setnormal("-401");
        break;
      case "-401":
        setnormal("-483");
        break;
      case "-483":
        setnormal("-565");
        break;
      case "-565":
        setnormal("-647");
        break;

      case "-647":
        setnormal("-729");
        break;
      //   case "-729":
      //     setnormal("9");
      //     break;

      default:
        break;
    }
  };

  const prev = () => {
    switch (normal) {
      //   case "9":
      //     setnormal("-729");
      //     break;
      case "-729":
        setnormal("-647");
        break;
      case "-647":
        setnormal("-565");
        break;
      case "-565":
        setnormal("-483");
        break;
      case "-483":
        setnormal("-401");
        break;

      case "-401":
        setnormal("-319");
        break;
      case "-319":
        setnormal("-237");
        break;
      case "-237":
        setnormal("-155");
        break;
      case "-155":
        setnormal("-73");
        break;

      case "-73":
        setnormal("9");
        break;

      default:
        break;
    }
  };

  const ctn_slide = (e: any) => {
    switch (e) {
      case 1:
        setnormal("9");
        break;
      case 2:
        setnormal("-73");
        break;
      case 3:
        setnormal("-155");
        break;
      case 4:
        setnormal("-237");
        break;
      case 5:
        setnormal("-319");
        break;
      case 6:
        setnormal("-401");
        break;
      case 7:
        setnormal("-483");
        break;
      case 8:
        setnormal("-565");
        break;
      case 9:
        setnormal("-647");
        break;
      case 10:
        setnormal("-729");
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="all_wrap ">
        <div className="prev cursor flex items-center" onClick={prev}>
          <i className="bi bi-chevron-left font-[bolder] hidden sm:block text-[30px]"></i>
        </div>
        <div className="next cursor flex items-center" onClick={next}>
          <i className="bi bi-chevron-right font-[bolder] hidden sm:block text-[30px]"></i>
        </div>
        <div className="wrap" style={{ transform: `translateX(${normal}vw)` }}>
          <div className="col-main ">
            <div className="slider-container relative slide-1">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Sci - Fi
                  </span>{" "}
                  . The truth will surface.
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">Action . </span>
                  Meeting that special someone can be a real adventure
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img1}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main ">
            <div className="slider-container relative slide-2">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Music
                  </span>{" "}
                  . Ed Sheeran performs his new album live from london.
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">Mystery</span> .
                  Protect what you love
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img2}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main ">
            <div className="slider-container relative slide-3">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Mystery .
                  </span>{" "}
                  Protect what you love
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">Comedy . </span>
                  Kindness makes a comebadk
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img3}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main ">
            <div className="slider-container relative slide-4">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Action .
                  </span>{" "}
                  Meeting that special someone can be a real adventure
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">Comdey . </span>
                  Breakdown. Breakthrough
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img4}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main ">
            <div className="slider-container relative slide-5">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Comedy .
                  </span>{" "}
                  Kindness makes a Comeback{" "}
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">Comedy . </span>{" "}
                  Your life potential is one card away.
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img5}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main ">
            <div className="slider-container relative slide-6">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Comedy .
                  </span>{" "}
                  Breakthrough . Breakdown .{" "}
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">Drama . </span>
                  Control is an illusion
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img6}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main ">
            <div className="slider-container relative slide-7">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Comedy .
                  </span>{" "}
                  Your lifes potential is one card away.{" "}
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">Sci - Fi . </span> .
                  The truth will surface.{" "}
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img7}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main">
            <div className="slider-container relative slide-8">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Drama .
                  </span>{" "}
                  From the executive Produceer of Gossip Girl and The O.C.
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">Music . </span> Ed
                  Sheeran performs his new album live from london.
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img8}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main">
            <div className="slider-container relative slide-9">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Sports .
                  </span>{" "}
                  Live MLB games every friday.
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px] ">
                    Documentary .{" "}
                  </span>{" "}
                  . From Emmy and Oscar Winner Davis Guggenheim
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img9}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />
              </div>
            </div>
          </div>
          <div className="col-main">
            <div className="slider-container relative slide-10">
              <div className="flex border w-[auto] gap-[20px] h-[100%] items-end px-[40px] pb-[40px]  sm:flex-col sm:justify-end sm:items-center sm:px-[20px] ">
                <p className="px-[20px] py-[20px]  text-black border_radius cursor hover:bg-gray-200 sm:py-[15px] sm:px-[25px]">
                  Stream now{" "}
                  <span>
                    <i className="bi bi-play bg-black text-white border_radius p-[4px] text-[10px]"></i>
                  </span>
                </p>

                <p className="text-white font-[400] sm:hidden ">
                  <span className="font-[700] text-[30px] text-center">
                    Drama .
                  </span>{" "}
                  Control is an illusion{" "}
                </p>

                <p className="text-white font-[400] sm:block hidden text-center ">
                  <span className="font-[700] text-[30px ] ">Drama . </span> .
                  From the executive Producers of Gossips Girl and The O.C.
                </p>
              </div>
              <div className="flex  w-[100%] px-[100px] absolute top-[10px]  h-[auto] justify-center gap-[20px] flex-col items-center ">
                <Image
                  src={general}
                  className="hidden sm:block"
                  alt="this is a thumb"
                />
                <Image
                  src={img10}
                  className="hidden sm:block mob_img_slider"
                  alt="slider images"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[auto] flex justify-center">
        <div className="w-[50%] h-[auto] gap-[10px] flex justify-center items-center py-[20px]">
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(1);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(2);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(3);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(4);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(5);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(6);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(7);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(8);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(9);
            }}
          ></div>
          <div
            className="ctn_slide hover:bg-[darkgrey] cursor "
            onClick={() => {
              ctn_slide(10);
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
