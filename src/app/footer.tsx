"use client";

import React, { useEffect, useState } from "react";

const Footer = () => {
  const [secondContent, setsecondContent] = useState([]);
  const [display1, setdisplay1] = useState([]);
  const [display2, setdisplay2] = useState([]);
  const [display3, setdisplay3] = useState([]);
  const [display4, setdisplay4] = useState([]);
  const [display5, setdisplay5] = useState([]);
  const [display6, setdisplay6] = useState([]);
  const [display7, setdisplay7] = useState([]);
  const [display8, setdisplay8] = useState([]);
  const [display9, setdisplay9] = useState([]);
  const [display10, setdisplay10] = useState([]);
  const [display11, setdisplay11] = useState([]);
  const [firstContent, setfirstContent] = useState([]);

  const content2: any = [
    [
      {
        header: "shop and learn",
        body: [
          "store",
          "mac",
          "iPad",
          "watch",
          "Airpods",
          "TV & Home",
          "AirTag",
          "Accessories",
          "Gift Cards",
        ],
      },
      {
        header: "Apple Wallet",
        body: ["wallet", "apple card", "apple pay", "apple cash"],
      },
    ],
    [
      {
        header: "Account",
        body: ["manage your apple ID", "apple store account", "iCloud.com"],
      },
      {
        header: "Entertainment",
        body: [
          "apple one",
          "apple TV+",
          "apple music",
          "apple arcrade",
          "apple fitness+",
          "apple news+",
          "apple podcasts",
          "apple books",
          "apple store",
        ],
      },
    ],
    [
      {
        header: "apple store",
        body: [
          "find a store",
          "genius bar",
          "today at apple",
          "apple camp",
          "apple store app ",
          "certified refurbished",
          "apple trade in ",
          "financing",
          "carrier Deals at apple",
          "order status",
          "shopping",
        ],
      },
    ],
    [
      {
        header: "for business",
        body: ["apple and business", "shop for business"],
      },
      {
        header: "for education",
        body: ["apple and education", "shop for k-12"],
      },
      {
        header: "for healthcare",
        body: [
          "apple and healthcare",
          "health on apple watch ",
          "health records on iphone",
        ],
      },
      {
        header: "for government",
        body: ["shop for government", "shop for veterans and military"],
      },
    ],
    [
      {
        header: "apple values",
        body: [
          "accessiblility ",
          "education",
          "environment",
          "inclusion and diversity",
          "privacy",
          "racial equty and justice",
          "supplier responsibility",
        ],
      },
      {
        header: "about apple ",
        body: [
          "newsroom",
          "apple leadership",
          "carrier opportunities",
          "investors",
          "ethics & complicance",
          "events",
          "contact apple",
        ],
      },
    ],
  ];

  const section1: any = [
    "store",
    "mac",
    "iPad",
    "watch",
    "Airpods",
    "TV & Home",
    "AirTag",
    "Accessories",
    "Gift Cards",
  ];
  const section2: any = ["wallet", "apple card", "apple pay", "apple cash"];
  const section3: any = [
    "manage your apple ID",
    "apple store account",
    "iCloud.com",
  ];
  const section4: any = [
    "apple one",
    "apple TV+",
    "apple music",
    "apple arcrade",
    "apple fitness+",
    "apple news+",
    "apple podcasts",
    "apple books",
    "apple store",
  ];
  const section5: any = [
    "find a store",
    "genius bar",
    "today at apple",
    "apple camp",
    "apple store app ",
    "certified refurbished",
    "apple trade in ",
    "financing",
    "carrier Deals at apple",
    "order status",
    "shopping",
  ];
  const section6: any = ["apple and business", "shop for business"];
  const section7: any = ["apple and education", "shop for k-12"];
  const section8: any = [
    "apple and healthcare",
    "health on apple watch ",
    "health records on iphone",
  ];
  const section9: any = [
    "shop for government",
    "shop for veterans and military",
  ];
  const section10: any = [
    "accessiblility ",
    "education",
    "environment",
    "inclusion and diversity",
    "privacy",
    "racial equty and justice",
    "supplier responsibility",
  ];
  const section11: any = [
    "newsroom",
    "apple leadership",
    "carrier opportunities",
    "investors",
    "ethics & complicance",
    "events",
    "contact apple",
  ];

  const showOPpt1 = () => {
    // display1 == "flex" ? setdisplay1("none") : setdisplay1("flex");
    if (display1.length >= 1) {
      setdisplay1([]);
    } else if (display1.length == 0) {
      setdisplay1(section1);
    }
  };
  const showOPpt2 = () => {
    if (display2.length >= 1) {
      setdisplay2([]);
    } else if (display2.length == 0) {
      setdisplay2(section2);
    }
  };
  const showOPpt3 = () => {
    if (display3.length >= 1) {
      setdisplay3([]);
    } else if (display3.length == 0) {
      setdisplay3(section3);
    }
  };
  const showOPpt4 = () => {
    if (display4.length >= 1) {
      setdisplay4([]);
    } else if (display4.length == 0) {
      setdisplay4(section4);
    }
  };
  const showOPpt5 = () => {
    if (display5.length >= 1) {
      setdisplay5([]);
    } else if (display5.length == 0) {
      setdisplay5(section5);
    }
  };
  const showOPpt6 = () => {
    if (display6.length >= 1) {
      setdisplay6([]);
    } else if (display6.length == 0) {
      setdisplay6(section6);
    }
  };
  const showOPpt7 = () => {
    if (display7.length >= 1) {
      setdisplay7([]);
    } else if (display7.length == 0) {
      setdisplay7(section7);
    }
  };
  const showOPpt8 = () => {
    if (display8.length >= 1) {
      setdisplay8([]);
    } else if (display8.length == 0) {
      setdisplay8(section8);
    }
  };
  const showOPpt9 = () => {
    if (display9.length >= 1) {
      setdisplay9([]);
    } else if (display9.length == 0) {
      setdisplay9(section9);
    }
  };
  const showOPpt10 = () => {
    if (display10.length >= 1) {
      setdisplay10([]);
    } else if (display10.length == 0) {
      setdisplay10(section10);
    }
  };
  const showOPpt11 = () => {
    if (display11.length >= 1) {
      setdisplay11([]);
    } else if (display11.length == 0) {
      setdisplay11(section11);
    }
  };

  useEffect(() => {
    setsecondContent(content2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section className=" w-[100%] bg-[#F5F5F7] flex justify-center">
        <div className="w-[100%] px-[250px] sm:px-[15px]">
          {/* this is for the mobile designs */}
          <div className="hidden sm:flex w-[100%] h-[auto] flex-col capitalize text-[12px] py-[10px] text-[#484848]">
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt1}
                style={{ transition: "2s ease" }}
              >
                <p>shop and learn</p>{" "}
                <p className="text-[25px]">{!display1.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display1.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt2}
                style={{ transition: "2s ease" }}
              >
                <p>Apple Wallet</p>{" "}
                <p className="text-[25px]">{!display2.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display2.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt3}
                style={{ transition: "2s ease" }}
              >
                <p>Account</p>{" "}
                <p className="text-[25px]">{!display3.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display3.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt4}
                style={{ transition: "2s ease" }}
              >
                <p>Entertainment</p>{" "}
                <p className="text-[25px]">{!display4.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display4.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt5}
                style={{ transition: "2s ease" }}
              >
                <p>Apple Store</p>{" "}
                <p className="text-[25px]">{!display5.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display5.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt6}
                style={{ transition: "2s ease" }}
              >
                <p>For Business</p>{" "}
                <p className="text-[25px]">{!display6.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display6.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt7}
                style={{ transition: "2s ease" }}
              >
                <p>For Education</p>{" "}
                <p className="text-[25px]">{!display7.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display7.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt8}
                style={{ transition: "2s ease" }}
              >
                <p>For Healthcare</p>{" "}
                <p className="text-[25px]">{!display8.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display8.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt9}
                style={{ transition: "2s ease" }}
              >
                <p>For Government </p>
                <p className="text-[25px]">{!display9.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display9.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt10}
                style={{ transition: "2s ease" }}
              >
                <p>Apple Values </p>
                <p className="text-[25px]">{!display10.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display10.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="w-[100%] border-b-2 border-[#878787] py-[0px]  flex   flex-col">
              <div
                className="w-[100%]  flex justify-between items-center"
                onClick={showOPpt11}
                style={{ transition: "2s ease" }}
              >
                <p>About Apple </p>
                <p className="text-[25px]">{!display11.length ? "+" : "-"}</p>
              </div>
              <div className="">
                {display11.map((e, index) => {
                  return (
                    <p
                      key={index}
                      style={{ transition: "2s ease" }}
                      className="text-[#878787]"
                    >
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          {/*  */}
          {/* this is the main wrap for the second wrap   */}
          {/* for desktop . this would be hidden on mobile screens */}
          <div className="flex justify-start gap-[20px] w-[100%] py-[20px] sm:hidden">
            {secondContent.map((e: any, index: any) => {
              return (
                <div
                  key={index}
                  className=" w-[20%] h-[auto] flex flex-col gap-[20px]"
                >
                  {e.map((i: any, b: any) => {
                    return (
                      <div
                        key={b}
                        className=" w-[100%] h-[auto] flex flex-col gap-[5px]"
                      >
                        <p className="capitalize text-[#646464] text-[13px] font-[600]">
                          {i.header}
                        </p>
                        {i.body.map((p: any, c: any) => {
                          return (
                            <p
                              key={c}
                              className="text-[#878787] text-[10px] capitalize hover:underline hover:underline-offset-4 cursor"
                            >
                              {p}
                            </p>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* the copyright footer that would display on both mobile and desktop screens */}
          <div className="w-[100%] h-[auto] border-b-2 border-b-gray-400 py-[8px]">
            <p className="text-[13px] text-[#878787]">
              More ways to shop:{" "}
              <span className="text-[blue] underline underline-offset-2">
                Find an Apple Store
              </span>{" "}
              or{" "}
              <span className="text-[blue]   underline underline-offset-2">
                other retailer
              </span>{" "}
              need you. Or call 1-800-MY-APPLE.
            </p>
          </div>

          <div className="w-[100%] h-[auto] flex justify-between text-[13px] py-[10px] capitalize text-[#878787] sm:flex-col">
            <div className="">
              <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap sm:text-[10px] sm:py-[10px]  items-center   gap-[8px]  cursor">
              <p className="hover:underline hover:underline-offset-4 ">
                privacy policy
              </p>
              <p className="hover:underline hover:underline-offset-4 ">|</p>
              <p className="hover:underline hover:underline-offset-4 ">
                terms of use
              </p>
              <p className="hover:underline hover:underline-offset-4 ">|</p>
              <p className="hover:underline hover:underline-offset-4 ">
                sales and refunds
              </p>
              <p className="hover:underline hover:underline-offset-4 ">|</p>
              <p className="hover:underline hover:underline-offset-4 ">legal</p>
              <p className="hover:underline hover:underline-offset-4 ">|</p>
              <p className="hover:underline hover:underline-offset-4 ">
                sitemap
              </p>
            </div>
            <div className="">
              <p>united states</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
