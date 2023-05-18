import React, { useEffect, useState } from "react";
import img1 from "../../../../public/mac/mac_system1.png";
import img2 from "../../../../public/mac/mac_system2.png";
import chipimg1 from "../../../../public/mac/mac_chip1.png";
import chipimg2 from "../../../../public/mac/mac_chip2.png";
import memoryimg from "../../../../public/mac/mac_memory.png";
import batteryimg from "../../../../public/mac/mac_battery.png";
import cameraimg from "../../../../public/mac/mac_camera.png";
import speakerimg from "../../../../public/mac/mac_speaker.png";
import touchidimg1 from "../../../../public/mac/mac_touchid.png";
import touchidimg2 from "../../../../public/mac/mac_touchid2.png";
import Image from "next/image";
const Laptop = () => {
  const [myitems, setmyitems] = useState([]);

  const items: any = [
    {
      first: [
        {
          img: img1,
          colors: ["black", "pink", "lightblue"],
          heading: "MackBook Air ",
          subheading: "M1 chip",
          from: "From $999",
          buy: "Buy",
          learnMore: "learn more",
        },
      ],
      second: [
        {
          retinaDisplay: '13.3" ',
          retinaText: "Retina display",
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
          core1: "8-core",
          core1Text: "CPU",
        },
      ],
      fifth: [
        {
          subcore: "",
          core2: "7-core",
          core2Text: "GPU",
        },
      ],

      sixth: [
        {
          memoryimg: [memoryimg],
          memoryTxt: "Up to 16GB unified memory",
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
          batteryimg: [batteryimg],
          batteryTxt: "Up to 18 hours battery life",
        },
      ],
      ninth: [
        {
          cameraimg: [cameraimg],
          cameratxt: "720p FaceTime HD camera",
        },
      ],
      tenth: [
        {
          speakerimg: [speakerimg],
          speakertxt1: "Three-mic array",
          speakertxt2: "Stereo speakers",
        },
      ],
      eleven: [
        {
          weight: "2.8lb",
          weighttxt: "Weight",
        },
      ],
      twelve: [
        {
          touchidimg: [touchidimg1],
          touchidtxt: "Touch ID",
        },
      ],
    },
    {
      first: [
        {
          img: img1,
          colors: ["black", "lightgrey"],
          heading: 'MacBook Pro 13"',
          subheading: "M2 chip ",
          from: "From $1299",
          buy: "Buy",
          learnMore: "learn more",
        },
      ],
      second: [
        {
          retinaDisplay: '13.3" ',
          retinaText: "Retina display",
        },
      ],
      third: [
        {
          chip: [chipimg1],
          chipText: "Apple M2 chip",
        },
      ],
      fourth: [
        {
          core1: "8-core",
          core1Text: "CPU",
        },
      ],
      fifth: [
        {
          subcore: "",
          core2: "10-core",
          core2Text: "GPU",
        },
      ],

      sixth: [
        {
          memoryimg: [memoryimg],
          memoryTxt: "Up to 24GB unified memory",
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
          batteryimg: [batteryimg],
          batteryTxt: "Up to 20 hours battery life",
        },
      ],
      ninth: [
        {
          cameraimg: [cameraimg],
          cameratxt: "720p FaceTime HD camera",
        },
      ],
      tenth: [
        {
          speakerimg: [speakerimg],
          speakertxt1: "Studio-quality three-mic array",
          speakertxt2: "Stereo speakers with Spatial Audio",
        },
      ],
      eleven: [
        {
          weight: "3.0lb",
          weighttxt: "Weight",
        },
      ],
      twelve: [
        {
          touchidimg: [touchidimg2],
          touchidtxt: "Touch Bar and Touch ID",
        },
      ],
    },
    {
      first: [
        {
          img: img1,
          colors: ["black", "orange", "gray", "lightblue"],
          heading: "MackBook Air ",
          subheading: "M2 chip",
          from: "From $1199",
          buy: "Buy",
          learnMore: "learn more",
        },
      ],
      second: [
        {
          retinaDisplay: '13.3" ',
          retinaText: "Liquid Retina display",
        },
      ],
      third: [
        {
          chip: [chipimg1],
          chipText: "Apple M2 chip",
        },
      ],
      fourth: [
        {
          core1: "8-core",
          core1Text: "CPU",
        },
      ],
      fifth: [
        {
          subcore: "Up to",
          core2: "10-core",
          core2Text: "GPU",
        },
      ],

      sixth: [
        {
          memoryimg: [memoryimg],
          memoryTxt: "Up to 24GB unified memory",
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
          batteryimg: [batteryimg],
          batteryTxt: "Up to 18 hours battery life",
        },
      ],
      ninth: [
        {
          cameraimg: [cameraimg],
          cameratxt: "1080p FaceTime HD camera",
        },
      ],
      tenth: [
        {
          speakerimg: [speakerimg],
          speakertxt1: "Three-mic array",
          speakertxt2: "Four-speaker sound system with Spatial Audio",
        },
      ],
      eleven: [
        {
          weight: "2.7lb",
          weighttxt: "Weight",
        },
      ],
      twelve: [
        {
          touchidimg: [touchidimg1],
          touchidtxt: "Touch ID",
        },
      ],
    },
    {
      first: [
        {
          img: img2,
          new: "new",
          colors: ["black", "pink"],
          heading: 'MacBook Pro14" and 16"',
          subheading: "M2 Max chip",
          from: "From $999",
          buy: "Buy",
          learnMore: "learn more",
        },
      ],
      second: [
        {
          retinaDisplay: "14.2” or 16.2” ",
          retinaText: "Liquid Retina XDR display1",
        },
      ],
      third: [
        {
          chip: [chipimg1, chipimg1],
          chipText: "Apple M2 Pro or Apple M2 Max chip",
        },
      ],
      fourth: [
        {
          core1: "8-core",
          core1Text: "CPU",
        },
      ],
      fifth: [
        {
          subcore: "Up to",
          core2: "38-core",
          core2Text: "GPU",
        },
      ],

      sixth: [
        {
          memoryimg: [memoryimg],
          memoryTxt: "Up to 96GB unified memory",
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
          batteryimg: [batteryimg],
          batteryTxt: "Up to 22 hours battery life",
        },
      ],
      ninth: [
        {
          cameraimg: [cameraimg],
          cameratxt: "1080p FaceTime HD camera",
        },
      ],
      tenth: [
        {
          speakerimg: [speakerimg],
          speakertxt1: "Studio-quality three‑mic array",
          speakertxt2: "Six-speaker sound system with Spatial Audio",
        },
      ],
      eleven: [
        {
          weight: "3.5 lb. or 4.7 lb.",
          weighttxt: "Weight",
        },
      ],
      twelve: [
        {
          touchidimg: [touchidimg1],
          touchidtxt: "Touch ID",
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
        <div className="flex flex-wrap sm:gap-[6%] gap-[10px]">
          {myitems.map((e: any, index: any) => {
            return (
              <div
                className=" w-[250px] sm:w-[47%]  border-red-500 border-5 flex flex-col gap-[40px] items-center flex-wrap "
                key={index}
              >
                {e.first.map((i: any) => {
                  return (
                    <div className=" w-full flex-col flex justify-center gap-[10px] border-b-2 pb-[30px] border-gray-300 items-center  sm:pt-[20px]">
                      <Image
                        src={i.img}
                        alt="this "
                        className="w-[200px] sm:w-[300px]"
                      />
                      {/* these are for the colors of the laptops */}

                      <div className="flex w-full pt-[20px]  justify-center gap-[10px]">
                        {i.colors.map((c: any) => {
                          return (
                            <div
                              className="rounded-[100%] w-[15px] h-[15px] "
                              style={{ backgroundColor: c }}
                            ></div>
                          );
                        })}
                      </div>
                      <p className="text-[darkorange] text[17px] capitalize font-[700]">
                        {i.new}
                      </p>
                      {/* this is for the name of the laptop */}
                      <h1 className="pt-[20px] text-[21px] font-[700] sm:text-[17px]">
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
                {e.second.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.retinaDisplay}
                      </h3>
                      <h3 className="text-[14px] ">
                        {s.retinaText}
                        <sup>1</sup>
                      </h3>{" "}
                    </div>
                  );
                })}

                {/* second has finished */}

                {e.third.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <div className=" justify-center flex  ">
                        {s.chip.map((a: any) => {
                          return (
                            <Image src={a} alt="this" className="w-[50px]" />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] ">{s.chipText}</h3>{" "}
                    </div>
                  );
                })}

                {/* third has finished */}
                {e.fourth.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.core1}
                      </h3>
                      <h3 className="text-[14px] ">{s.core1Text} </h3>{" "}
                    </div>
                  );
                })}

                {/* fourth has finished */}
                {e.fifth.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <h3 className="text-[14px] ">{s.subcore} </h3>
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.core2}
                      </h3>
                      <h3 className="text-[14px] ">{s.core2Text} </h3>{" "}
                    </div>
                  );
                })}

                {/* fifth set is ending */}

                {e.sixth.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <div className=" justify-center flex  ">
                        {s.memoryimg.map((a: any) => {
                          return (
                            <Image src={a} alt="this" className="w-[50px]" />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] text-center ">
                        {s.memoryTxt}
                      </h3>{" "}
                    </div>
                  );
                })}

                {/* sixth has finished */}
                {e.seventh.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.storage}
                      </h3>
                      <h3 className="text-[14px] text-center">
                        {s.storageTxt}{" "}
                      </h3>{" "}
                    </div>
                  );
                })}

                {/* seventh has finished */}
                {e.eight.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <div className=" justify-center flex  ">
                        {s.batteryimg.map((a: any) => {
                          return (
                            <Image src={a} alt="this" className="w-[50px]" />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] text-center ">
                        {s.batteryTxt}
                      </h3>{" "}
                    </div>
                  );
                })}

                {/* eight has ended */}
                {e.ninth.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <div className=" justify-center flex  ">
                        {s.cameraimg.map((a: any) => {
                          return (
                            <Image src={a} alt="this" className="w-[50px]" />
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
                {e.tenth.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <div className=" justify-center flex  ">
                        {s.speakerimg.map((a: any) => {
                          return (
                            <Image src={a} alt="this" className="w-[50px]" />
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
                {e.eleven.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <h3 className="text-[21px] font-[700] sm:text-[17px]">
                        {s.weight}
                      </h3>
                      <h3 className="text-[14px] ">{s.weighttxt} </h3>{" "}
                    </div>
                  );
                })}

                {/* 11th one has ended */}
                {e.twelve.map((s: any) => {
                  return (
                    <div className="flex flex-col gap-[3px] items-center">
                      <div className=" justify-center flex  ">
                        {s.touchidimg.map((a: any) => {
                          return (
                            <Image src={a} alt="this" className="w-[50px]" />
                          );
                        })}
                      </div>
                      <h3 className="text-[14px] text-center ">
                        {s.touchidtxt}
                      </h3>{" "}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Laptop;
