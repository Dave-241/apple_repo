"use client";
import React, { useEffect, useState } from "react";
import { FadeInTransition } from "react-transitions-library";
import img1 from "../../../../public/mac/mac_app1.jpg";
import img2 from "../../../../public/mac/mac_app2.jpg";
import img3 from "../../../../public/mac/mac_app3.jpg";
import img4 from "../../../../public/mac/mac_app4.jpg";
import img5 from "../../../../public/mac/mac_app5.jpg";
import img6 from "../../../../public/mac/mac_app6.jpg";
import img7 from "../../../../public/mac/mac_app7.jpg";
import change1 from "../../../../public/mac/mac_change_1.jpg";
import change2 from "../../../../public/mac/mac_change_2.jpg";
import change3 from "../../../../public/mac/mac_change_3.jpg";
import change4 from "../../../../public/mac/mac_change_4.jpg";
import change5 from "../../../../public/mac/mac_change_5.jpg";
import change6 from "../../../../public/mac/mac_change_6.jpg";
import change7 from "../../../../public/mac/mac_change_7.jpg";
import Image from "next/image";

const Tv_1 = () => {
  const [content, setcontent] = useState([]);
  const [check, setcheck] = useState("Safari");
  const [des, setdes] = useState("");
  const [short, setshort] = useState("Safari");
  const [changeimg, setchangeimg] = useState(change1);

  const content2: any = [
    {
      main: [
        {
          img: img1,
          text: "Safari",
          t2: "Safari has innovative features that let you enjoy more of the web. In even more ways. Built-in privacy features help protect your information and keep your Mac secure.",
          change: change1,
        },
      ],
    },
    {
      main: [
        {
          img: img2,
          text: "Photos",
          t2: "Keep your growing library organized and accessible. Perfect your images ancreate beautiful gifts for sharing. And with iCloud Photos, you can store lifetimes worth of photos and videos in the cloud.",
          change: change2,
        },
      ],
    },
    {
      main: [
        {
          img: img3,
          text: "iMovie",
          t2: "Tell stories like never before. A simple design and intuitive editing features make it easy to create beautiful 4K movies and Hollywood-style trailers.",
          change: change3,
        },
      ],
    },
    {
      main: [
        {
          img: img4,
          text: "GarageBand",
          t2: "The easiest way to create great-sounding songs on your Mac. With an intuitive interface and access to a complete sound library, its never been easier to learn, play, record, and share music like a pro.",
          change: change4,
        },
      ],
    },
    {
      main: [
        {
          img: img5,
          text: "Pages",
          t2: "This powerful word processor gives you everything you need to create documents that look beautiful. And read beautifully. It lets you work seamlessly between Mac, iOS, and iPadOS devices. And work effortlessly with people who use Microsoft Word.",
          change: change5,
        },
      ],
    },
    {
      main: [
        {
          img: img6,
          text: "Numbers",
          t2: "Create sophisticated spreadsheets with dramatic interactive charts, tables, and images that paint a revealing picture of your data. Work seamlessly between Mac, iOS, and iPadOS devices. And work effortlessly with people ",
          change: change6,
        },
      ],
    },
    {
      main: [
        {
          img: img7,
          text: "Keynote",
          t2: "Bring your ideas to life with beautiful presentations. Employ powerful tools and dazzling effects that keep your audience engaged. Work seamlessly between Mac, iOS, and iPadOS devices. And work effortlessly with people who use Microsoft PowerPoint.",
          change: change7,
        },
      ],
    },
  ];

  const showborder = (s: any, i: any) => {
    setcheck(s);
    setchangeimg(i);
  };

  const showtext = (a: any) => {
    setdes(a);
  };

  const showshort = (a: any) => {
    setshort(a);
  };
  useEffect(() => {
    setcontent(content2);
    setdes(
      "Safari has innovative features that let you enjoy more of the web. In even more ways. Built-in privacy features help protect your information and keep your Mac secure.",
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {/* <FadeInTransition timeout={1000} from={0} to={1} in={true}>
        React Transitions Library
      </FadeInTransition> */}

      <div className="w-full  bg-white flex p-[30px] sm:p-[10px] flex-col gap-[30px] sm:gap[10px]">
        <div className="w-full  flex justify-center items-center bg-[#fbfbfd]  py-[30px] sm:pb-[40px] pb-[100px]">
          <div className="flex-col gap-[20px]  w-[70%] sm:w-[95%] flex items-center">
            <div className="flex flex-col items-center flex-wrap gap-[10px]">
              <h1 className="sm:text-[32px] text-[48px] text-center">
                Built-in Apps
              </h1>
              <p className="sm:text-[17px] text-[17px] text-center">
                Powerful creativity and productivity tools live inside every Mac
                — apps that help you explore, connect, and work more
                efficiently.
              </p>
            </div>

            <div className=" flex justify-between w-full border-b border-gray-200">
              {content.map((e: any, index: any) => {
                return (
                  <div className="  " key={index}>
                    {e.main.map((s: any, index: any) => {
                      return (
                        <div
                          className=" flex flex-col gap-[0px] items-center pb-[5px] cursor "
                          key={index}
                          style={{
                            borderBottom: s.text == check ? "1px solid" : "",
                          }}
                          onClick={() => {
                            showborder(s.text, s.change);
                            showtext(s.t2);
                            showshort(s.text);
                          }}
                        >
                          <div className="w-[40px] sm:w-[20px]  h-auto">
                            <Image
                              src={s.img}
                              alt="this"
                              className="w-full h-auto "
                            />
                          </div>
                          <p className="text-[15px] sm:text-[9px]">{s.text}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center flex-wrap gap-[10px] pb-[40px]">
              <p
                className="text-center text-[13px] tv1_txt"
                style={{ transition: "1s ease" }}
              >
                {des}
              </p>

              <p className="text-blue-700">
                Learn more about {short} <i className="bi bi-chevron-right"></i>
              </p>
            </div>

            <div className="w-[390px]  sm:w-[300px] h-[240px] z-[200] tv_1_change relative p-[20px] ">
              <Image src={changeimg} alt="this" className="w-full h-auto " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tv_1;
