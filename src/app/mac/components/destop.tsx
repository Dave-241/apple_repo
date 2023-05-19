import React, { useEffect, useState } from "react";
import img1 from "../../../../public/mac/mac_des_1.png";
import img2 from "../../../../public/mac/mac_des_2.png";
import img3 from "../../../../public/mac/mac_des_3.png";
import img4 from "../../../../public/mac/mac_des_4.png";
import keyboardimg1 from "../../../../public/mac/mac_keyboard_1.png";
import keyboardimg2 from "../../../../public/mac/mac_keyboard_2.png";
import intel from "../../../../public/mac/mac_intel.png";
import mem_sqare from "../../../../public/mac/mac_mem_square.png";

import chipimg1 from "../../../../public/mac/mac_chip1.png";
import chipimg2 from "../../../../public/mac/mac_chip2.png";
import memoryimg from "../../../../public/mac/mac_memory.png";
import batteryimg from "../../../../public/mac/mac_battery.png";
import cameraimg from "../../../../public/mac/mac_camera.png";
import speakerimg from "../../../../public/mac/mac_speaker.png";
import touchidimg1 from "../../../../public/mac/mac_touchid.png";
import touchidimg2 from "../../../../public/mac/mac_touchid2.png";
import Image from "next/image";

const Desktop = () => {
  const [myitems, setmyitems] = useState([]);

  const items: any = [
    {
      first: [
        {
          img: img1,
          colors: [
            "black",
            "pink",
            "lightblue",
            "lightgray",
            "darkblue",
            "purple",
          ],
          heading: "iMac ",
          subheading: "",
          from: "From $1299",
          buy: "Buy",
          learnMore: "learn more",
        },
      ],

      third: [
        {
          chip: [chipimg1],
          chipText: "Apple M1 chip",
        },
      ],
      fourth: [
        {
          subcore: " ",
          core1: "8-core",
          core1Text: "CPU",
        },
      ],
      fifth: [
        {
          subcore: "Up to ",
          core2: "8-core",
          core2Text: "GPU",
        },
      ],

      sixth: [
        {
          memoryimg: [memoryimg],
          memoryTxt: "Up to 16GB unified memory",
          memorysec: "For increased performance and power efficiency",
        },
      ],

      seventh: [
        {
          storage: "2TB",
          storageTxt: "Maximum configurable storagemac",
        },
      ],

      eight: [
        {
          batteryimg: [],
          batteryTxt: "Retina display7",
          retina: "4.5k",
          sub: "218 ppi",
        },
      ],
      ninth: [
        {
          cameraimg: [cameraimg],
          cameratxt: "1080p FaceTime HD camera",
          camerasec:
            "With the image signal processor of M1 for drastically improved performance",
        },
      ],
      tenth: [
        {
          speakerimg: [keyboardimg1],
          speakertxt1:
            "Configurable with Magic Keyboard with Touch ID and Numeric Keypad",
          speakertxt2: "Stereo speakers",
        },
      ],
    },
    {
      first: [
        {
          img: img2,
          colors: ["lightgrey"],
          heading: "Mac mini",
          subheading: "",
          from: "From $599",
          buy: "Buy",
          learnMore: "learn more",
        },
      ],

      third: [
        {
          chip: [chipimg1, chipimg2],
          chipText: "Apple M2 or Apple M2 Pro chip",
        },
      ],
      fourth: [
        {
          subcore: "Up to ",
          core1: "12-core",
          core1Text: "CPU",
        },
      ],
      fifth: [
        {
          subcore: "Up to ",
          core2: "19-core",
          core2Text: "GPU",
        },
      ],

      sixth: [
        {
          memoryimg: [memoryimg],
          memoryTxt: "Up to 32GB unified memory",
          memorysec: "For increased performance and power efficiency",
        },
      ],

      seventh: [
        {
          storage: "8TB",
          storageTxt: "Maximum configurable storagemac",
        },
      ],

      eight: [
        {
          batteryimg: [],
          batteryTxt: "----",
        },
      ],
      ninth: [
        {
          cameraimg: [],
          cameratxt: "----",
        },
      ],
      tenth: [
        {
          speakerimg: [],
          speakertxt1: "----",
          //   speakertxt2: "Stereo speakers with Spatial Audio",
        },
      ],
    },
    {
      first: [
        {
          img: img3,
          colors: ["lightgray"],
          heading: "Mac Studio ",
          subheading: "",
          from: "From $1199",
          buy: "Buy",
          learnMore: "learn more",
        },
      ],

      third: [
        {
          chip: [chipimg1, chipimg2],
          chipText: "Apple M1 Max or Apple M1 Ultra chip",
        },
      ],
      fourth: [
        {
          subcore: "Up to",
          core1: "20-core",
          core1Text: "CPU",
        },
      ],
      fifth: [
        {
          subcore: "Up to",
          core2: "64-core",
          core2Text: "GPU",
        },
      ],

      sixth: [
        {
          memoryimg: [memoryimg],
          memoryTxt: "Up to 128GB unified memory",
          memorysec: "For increased performance and power efficiency",
        },
      ],

      seventh: [
        {
          storage: "8TB",
          storageTxt: "Maximum configurable storage",
        },
      ],

      eight: [
        {
          batteryimg: [],
          batteryTxt: "----",
        },
      ],
      ninth: [
        {
          cameraimg: [],
          cameratxt: "----",
        },
      ],
      tenth: [
        {
          speakerimg: [],
          speakertxt1: "----",
        },
      ],
    },
    {
      first: [
        {
          img: img4,

          colors: ["lightgray"],
          heading: "Mac Pro",
          subheading: "",
          from: "From $5999",
          buy: "Buy",
          learnMore: "learn more",
        },
      ],

      third: [
        {
          chip: [intel],
          chipText: "Intel Xeon W processor",
        },
      ],
      fourth: [
        {
          subcore: "Up to",
          core1: "28-core",
          core1Text: "CPU",
        },
      ],
      fifth: [
        {
          subcore: "Up to",
          core2: "AMD",
          core2Text: "Radeon Pro W6800X Duo GPU",
        },
      ],

      sixth: [
        {
          memoryimg: [mem_sqare],
          memoryTxt: "Up to 1.5TB memory",
        },
      ],

      seventh: [
        {
          storage: "8TB",
          storageTxt: "Maximum configurable storagemac",
        },
      ],

      eight: [
        {
          batteryimg: [],
          batteryTxt: "----",
        },
      ],
      ninth: [
        {
          cameraimg: [],
          cameratxt: "----",
        },
      ],
      tenth: [
        {
          speakerimg: [keyboardimg2],
          speakertxt1: "Magic Keyboard with Numeric Keypad",
        },
      ],
    },
  ];

  useEffect(() => {
    setmyitems(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="w-full justify-center flex h-auto bg-[#F5F5F7]">
        <div className="flex flex-wrap sm:gap-[0] sm:justify-around w-[80%] gap-[20px] justify-center">
          {myitems.map((e: any, index: any) => {
            return (
              <div
                className=" w-[250px] sm:w-[47%]  border-b-2 pb-[20px] sm:pb-[22px] border-gray-300 flex flex-col gap-[20px] sm:gap-[0px] items-center flex-wrap "
                key={index}
              >
                {e.first.map((i: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[500px]  w-full flex-col flex justify-center gap-[10px] border-b-2 pb-[30px] border-gray-300 items-center  sm:pt-[20px]"
                    >
                      <Image
                        src={i.img}
                        alt="this "
                        className="w-[200px]  sm:w-[300px]"
                      />
                      {/* these are for the colors of the laptops */}

                      <div className="flex w-full pt-[20px]  justify-center gap-[10px] items-center">
                        {i.colors.map((c: any, index: any) => {
                          return (
                            <div
                              key={index}
                              className="rounded-[100%] w-[15px] h-[15px] "
                              style={{ backgroundColor: c }}
                            ></div>
                          );
                        })}
                      </div>
                      {/* <p className="text-[darkorange] text[17px] capitalize font-[700]">
                        {i.new}
                      </p> */}
                      {/* this is for the name of the laptop */}
                      <h1 className="pt-[20px] text-[21px] font-[700] sm:text-[17px] text-center">
                        {i.heading}
                      </h1>
                      <h3>{i.subheading}</h3>

                      <h3 className="pt-[20px]">{i.from}</h3>

                      <p className="cursor px-[20px] py-[6px] bg-blue-600 text-white rounded-[20px] hover:bg-blue-800">
                        {i.buy}
                      </p>

                      <p className="pt-[10px] hover:underline text-blue-600">
                        {i.learnMore} <i className="bi bi-chevron-right"></i>
                      </p>
                    </div>
                  );
                })}

                {/* first part has finished */}

                {e.third.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <div className=" justify-center flex  ">
                        {s.chip.map((a: any, index: any) => {
                          return (
                            <Image
                              src={a}
                              alt="this"
                              className="w-[50px]"
                              key={index}
                            />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] text-center ">{s.chipText}</h3>{" "}
                    </div>
                  );
                })}

                {/* third has finished */}
                {e.fourth.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <h3 className="text-[14px] ">{s.subcore} </h3>
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.core1}
                      </h3>
                      <h3 className="text-[14px] ">{s.core1Text} </h3>{" "}
                    </div>
                  );
                })}

                {/* fourth has finished */}
                {e.fifth.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <h3 className="text-[14px] ">{s.subcore} </h3>
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.core2}
                      </h3>
                      <h3 className="text-[14px] ">{s.core2Text} </h3>{" "}
                    </div>
                  );
                })}

                {/* fifth set is ending */}

                {e.sixth.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <div className=" justify-center flex  ">
                        {s.memoryimg.map((a: any, index: any) => {
                          return (
                            <Image
                              src={a}
                              alt="this"
                              className="w-[50px]"
                              key={index}
                            />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] text-center ">
                        {s.memoryTxt}
                      </h3>{" "}
                      <h3 className="text-[14px] text-center text-gray-400">
                        {s.memorysec}
                      </h3>{" "}
                    </div>
                  );
                })}

                {/* sixth has finished */}
                {e.seventh.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.storage}
                      </h3>
                      <h3 className="text-[14px] text-center">
                        {s.storageTxt}
                        <sup> 2</sup>
                      </h3>{" "}
                    </div>
                  );
                })}

                {/* seventh has finished */}
                {e.eight.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <div className=" justify-center flex  ">
                        {s.batteryimg.map((a: any, index: any) => {
                          return (
                            <Image
                              src={a}
                              alt="this"
                              className="w-[50px]"
                              key={index}
                            />
                          );
                        })}
                      </div>
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.retina}
                      </h3>
                      <h3 className="text-[14px] text-center ">
                        {s.batteryTxt}
                      </h3>{" "}
                      <h3 className="text-[14px] text-center text-gray-400">
                        {s.sub}
                      </h3>
                    </div>
                  );
                })}

                {/* eight has ended */}
                {e.ninth.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <div className=" justify-center flex  ">
                        {s.cameraimg.map((a: any, index: any) => {
                          return (
                            <Image
                              src={a}
                              alt="this"
                              className="w-[50px]"
                              key={index}
                            />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] text-center ">
                        {s.cameratxt}
                      </h3>{" "}
                    </div>
                  );
                })}

                {/* ninth has ended */}
                {e.tenth.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <div className=" justify-center flex  ">
                        {s.speakerimg.map((a: any, index: any) => {
                          return (
                            <Image
                              src={a}
                              alt="this"
                              className="w-[50px]"
                              key={index}
                            />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] text-center ">
                        {s.speakertxt1}
                      </h3>{" "}
                      <h3 className="text-[14px] text-center ">
                        {s.speakertxt2}
                      </h3>{" "}
                    </div>
                  );
                })}

                {/* tenth has ended */}
                {/* {e.eleven.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.weight}
                      </h3>
                      <h3 className="text-[14px] ">{s.weighttxt} </h3>{" "}
                    </div>
                  );
                })} */}

                {/* 11th one has ended */}
                {/* {e.twelve.map((s: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className=" h-[120px] justify-center flex flex-col gap-[3px] items-center"
                    >
                      <div className=" justify-center flex  ">
                        {s.touchidimg.map((a: any, index: any) => {
                          return (
                            <Image
                              src={a}
                              alt="this"
                              className="w-[50px]"
                              key={index}
                            />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] text-center ">
                        {s.touchidtxt}
                      </h3>{" "}
                    </div>
                  );
                })} */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Desktop;
