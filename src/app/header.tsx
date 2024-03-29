"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = (props: any) => {
  const { navbg, navtext, opacity } = props;
  const [subheader, setSubheader] = useState([]);
  const [subNavHeight, setSubNavHeight] = useState("0");
  const [header, setheader] = useState([]);
  const [secondheight, setsecondheight] = useState("0");
  const [mobileDisplay, setmobileDisplay] = useState("0");
  const [mobilearray, setmobilearray] = useState([]);
  const [closeMenu, setcloseMenu] = useState("none");
  const [bgcolor, setbgcolor] = useState(navbg);

  // shop header

  const storeInfo: any = [
    {
      header: "shop",
      body: [
        "shop the latest",
        "mac",
        "ipad",
        "iphone",
        "apple watch",
        "accessoried",
      ],
      ah: "28px",
      excerpt: [],
    },
    {
      header: "quick links",
      body: ["find a store", "order status", "financing", "apple trade in"],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "Shop special stores",
      body: [
        "certified refurbisheed",
        "education",
        "business",
        "verterans and millitary",
        "government",
      ],
      ah: "13px",
      excerpt: [],
    },
  ];

  const macInfo: any = [
    {
      header: "Explore mac",
      body: [
        "Explore all mac",
        "mackbook air",
        "mackbook pro",
        "iMac",
        "mac mini",
        "mac studio",
        "mac pro",
        "displays",
      ],
      ah: "28px",
      excerpt: ["compare mac", "mac does that"],
    },
    {
      header: "shop mac",
      body: ["shop mac", "mac accessories", "financing", "apple trade in"],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "more from mac",
      body: [
        "mac support",
        "macOS venture",
        "continuity",
        "icloud",
        "mac for business",
        "education",
      ],
      ah: "13px",
      excerpt: [],
    },
  ];

  const ipadInfo: any = [
    {
      header: "Explore iPad",
      body: [
        "Explore all iPad",
        "iPad pro",
        "iPad air",
        "iPad",
        "iPad mini",
        "apple pencil",
        "keyboards",
      ],
      ah: "28px",
      excerpt: ["compare iPad", "why iPad"],
    },
    {
      header: "shop iPad",
      body: ["shop iPad", "iPad accessories", "financing", "apple trade in"],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "more from iPad",
      body: ["iPad support", "iPadOS 16", "iCloud", "education"],
      ah: "13px",
      excerpt: [],
    },
  ];
  const iphoneInfo: any = [
    {
      header: "Explore iPhone",
      body: [
        "Explore all iPhone",
        "iPhone 14 pro",
        "iPhone 14 ",
        "iPhone 13",
        "iPhone 12",
        "iPhone SE",
      ],
      ah: "28px",
      excerpt: ["compare iPhone", "switch to iphone"],
    },
    {
      header: "shop iPhone",
      body: [
        "shop iPhone",
        "iphone accessories",
        "apple trade in",
        "carrier deals at apple",
        "financing",
      ],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "more from iPhone",
      body: [
        "iPhone support",
        "iOS 16",
        "iPhone privacy",
        "iCloud",
        "wallet, pay, card",
        "siri",
      ],
      ah: "13px",
      excerpt: [],
    },
  ];

  const watchInfo: any = [
    {
      header: "Explore watch",
      body: [
        "Explore all apple watch",
        "apple watch ultra",
        "apple watch series 8",
        "apple watch sE",
        "apple watch nike",
        "apple watch hermes",
      ],
      ah: "28px",
      excerpt: ["compare watch", "why apple watch"],
    },
    {
      header: "shop watch",
      body: [
        "shop apple watch",
        "iphone watch studio",
        "apple watch bands",
        "apple watch accessories",
        "apple trade in",
        "financing",
      ],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "more from watch",
      body: ["apple watch support", "watchiOS 9", "apple fitness+"],
      ah: "13px",
      excerpt: [],
    },
  ];

  const airpodsInfo: any = [
    {
      header: "Explore airPods",
      body: [
        "Explore all AirPods",
        "airPods 2nd generation",
        " airPods 3rd generation",
        "airPods pro 2nd generation",
        "airPods max",
      ],
      ah: "28px",
      excerpt: ["compare airPods"],
    },
    {
      header: "shop airPods",
      body: ["shop airPods", "airPods accessories"],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "more from airPods",
      body: ["airPods support", "apple music"],
      ah: "13px",
      excerpt: [],
    },
  ];

  const tvInfo: any = [
    {
      header: "Explore TV & home",
      body: ["Explore TV & home", "apple TV 4K", " homePod", "homePod min"],
      ah: "28px",
      excerpt: [],
    },
    {
      header: "shop TV & home",
      body: [
        "shop apple TV 4K",
        "shop homePod",
        "shop homePod mini",
        "shop siri remote",
        "TV & home accessories",
      ],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "more from TV & home",
      body: [
        "apple TV support",
        "homepod support",
        "apple TV app",
        "apple TV+",
        "home app",
        "siri",
        "airplay",
      ],
      ah: "13px",
      excerpt: [],
    },
  ];

  const entertainmentInfo: any = [
    {
      header: "Explore entertainment",
      body: [
        "Explore entertainment",
        "apple one",
        " apple TV+",
        "apple music",
        "apple arcade",
        "apple fitness",
        "apple news+",
        "apple podcasts",
        "apple books",
        "app store",
      ],
      ah: "28px",
      excerpt: [],
    },
    {
      header: "shop TV & home",
      body: ["apple music support", "apple TV+ support "],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "",
      body: [],
      ah: "13px",
      excerpt: [],
    },
  ];
  const accessoriesInfo: any = [
    {
      header: "Shop accessories",
      body: [
        "shop all accessories",
        "mac",
        " ipad",
        "iphone",
        "apple watch",
        "airpods",
        "TV & home",
      ],
      ah: "28px",
      excerpt: [],
    },
    {
      header: "explore accessories",
      body: ["made by apple", "beats by Dr. dre ", "airTag"],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "",
      body: [],
      ah: "13px",
      excerpt: [],
    },
  ];

  const supportInfo: any = [
    {
      header: "explore support",
      body: ["iphone", "mac", " ipad", "watch", "airPods", "music", "TV"],
      ah: "28px",
      excerpt: ["explore support"],
    },
    {
      header: "get help",
      body: ["community", "check coverage ", "repair", "contact us"],
      ah: "13px",
      excerpt: [],
    },
    {
      header: "helpful topics",
      body: [
        "get appleCare+",
        "apple ID & password",
        "billing & subscriptions",
        "find my ",
        "accessiblility",
      ],
      ah: "13px",
      excerpt: [],
    },
  ];

  const reset = () => {
    setbgcolor(navbg);
    // 000000b0
    setheader([]);
    setSubheader([]);
    setsecondheight("0");
    setSubNavHeight("0");
  };

  const defaultSetting = () => {
    setbgcolor(navbg);
    setsecondheight("calc(25vh - 35px)");
    setSubNavHeight("75vh");
  };

  const store = () => {
    setSubheader(storeInfo);
  };

  const mac = () => {
    setSubheader(macInfo);
  };

  const ipad = () => {
    setSubheader(ipadInfo);
  };
  const iphone = () => {
    setSubheader(iphoneInfo);
  };
  const watch = () => {
    setSubheader(watchInfo);
  };
  const airpods = () => {
    setSubheader(airpodsInfo);
  };
  const tv = () => {
    setSubheader(tvInfo);
  };
  const entertainment = () => {
    setSubheader(entertainmentInfo);
  };
  const accessories = () => {
    setSubheader(accessoriesInfo);
  };
  const support = () => {
    setSubheader(supportInfo);
  };

  // mobile menu array
  const mobileMenu: any = [
    { link: "store", text: "store" },
    { link: "mac", text: "mac" },
    { link: "store", text: "iPad" },
    { link: "mac", text: "iPhone" },
    { link: "store", text: "watch" },
    { link: "mac", text: "airpods" },
    { link: "store", text: "tv" },
    { link: "mac", text: "entertainment" },
    { link: "store", text: "accessories" },
    { link: "mac", text: "support" },
  ];

  const show_mob_nav = () => {
    setcloseMenu("flex");
    setmobilearray(mobileMenu);
    setmobileDisplay("100vh");
  };

  const hide_mob_nav = () => {
    setcloseMenu("none");
    setmobilearray([]);
    setmobileDisplay("0");
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-[100%] h-[50px] destop_nav z-[200]">
        <div
          style={{ backgroundColor: bgcolor }}
          className="  w-[100%] h-[auto] flex items-center backdrop-blur flex-col z-50"
          onMouseLeave={reset}
        >
          {/* this is the main navigation */}
          <div
            className="nav_all_wrap w-[70%]  h-[35px] flex justify-between text-[11px] items-center  font-[400]"
            style={{ color: navtext }}
          >
            <Link href="/" style={{ color: navtext }}>
              <i
                className="bi bi-apple nav_items text-[20px]"
                onMouseMove={reset}
              ></i>
            </Link>
            <Link
              style={{ color: navtext }}
              href="/store"
              className="nav_items"
              onMouseMove={() => {
                store();
                defaultSetting();
              }}
            >
              Store
            </Link>
            <Link
              href="/mac"
              className="nav_items"
              onMouseMove={() => {
                mac();
                defaultSetting();
              }}
            >
              Mac
            </Link>
            <Link href="/store">
              <p
                className="nav_items"
                onMouseMove={() => {
                  ipad();
                  defaultSetting();
                }}
              >
                Ipad
              </p>
            </Link>
            <Link href="/mac">
              <p
                className="nav_items"
                onMouseMove={() => {
                  iphone();
                  defaultSetting();
                }}
              >
                Iphone
              </p>
            </Link>
            <Link href="/store">
              <p
                className="nav_items"
                onMouseMove={() => {
                  watch();
                  defaultSetting();
                }}
              >
                Watch
              </p>
            </Link>
            <Link href="/mac">
              <p
                className="nav_items"
                onMouseMove={() => {
                  airpods();
                  defaultSetting();
                }}
              >
                Airpods
              </p>
            </Link>
            <Link href="/store">
              <p
                className="nav_items"
                onMouseMove={() => {
                  tv();
                  defaultSetting();
                }}
              >
                Tv & Home
              </p>
            </Link>
            <Link href="/mac">
              <p
                className="nav_items"
                onMouseMove={() => {
                  entertainment();
                  defaultSetting();
                }}
              >
                Entertainment
              </p>
            </Link>
            <Link href="/store">
              <p
                className="nav_items"
                onMouseMove={() => {
                  accessories();
                  defaultSetting();
                }}
              >
                Accessories
              </p>
            </Link>
            <Link href="/mac">
              <p
                className="nav_items"
                onMouseMove={() => {
                  support();
                  defaultSetting();
                }}
              >
                Support
              </p>
            </Link>
            <i onMouseMove={reset} className=" bi bi-search nav_items"></i>
            <i onMouseMove={reset} className=" bi bi-bag nav_items"></i>
          </div>

          {/* this is the dropdown navigation wrap */}
          <div
            className=" w-[70%]  flex gap-[100px] subNav "
            style={{ transition: "  1s  ease ", height: subNavHeight }}
          >
            {subheader.map((e: any, index) => {
              var size = e.ah;
              return (
                <div
                  key={index}
                  className=" flex flex-col justify-start gap-[3px] min-w-[100px] h-[auto] capitalize py-[25px]"
                >
                  <p
                    className="text-[12px]  text-[darkgrey]"
                    style={{ transition: "  1.5s  ease " }}
                  >
                    {e.header}
                  </p>
                  {e.body.map((i: any) => {
                    return (
                      <p
                        key={index}
                        className="cursor  hover:text-gray-900 font-[700] "
                        style={{
                          fontSize: size,
                          transition: "  1.5s  ease ",
                          color: navtext,
                          opacity: opacity,
                        }}
                      >
                        {i}
                      </p>
                    );
                  })}

                  {e.excerpt.map((i: any) => {
                    return (
                      <p
                        key={index}
                        style={{
                          transition: "  1.5s  ease ",
                          color: navtext,
                          opacity: opacity,
                        }}
                        className="  text-[12px] "
                      >
                        {i}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="nav_outside_wrap   w-[100%] h-[30vh]  backdrop-blur top-0 left-0"
          style={{ height: secondheight, transition: "1s ease" }}
        ></div>
      </nav>

      {/* mobile navigations */}
      <nav
        className="fixed top-0 left-0 mob_nav w-[100%] h-[40px]  flex justify-center backdrop-blur z-[200] hidden sm:flex"
        style={{ backgroundColor: navbg }}
      >
        <div
          className=" w-[90%] flex justify-between items-center  h-[100%] text-[20px]"
          style={{ color: navtext }}
        >
          <Link href="/" style={{ color: navtext }}>
            {" "}
            <i className="bi bi-apple mob_nav_items "></i>{" "}
          </Link>
          <div className="flex justify-between w-[35%] h-[100%] items-center">
            <i className=" bi bi-search mob_nav_items"></i>
            <i className=" bi bi-bag mob_nav_items"></i>
            <i
              className=" bi bi-filter-right  mob_nav_items"
              onClick={show_mob_nav}
            ></i>
          </div>
        </div>
      </nav>

      {/* first menu options for the mobile version */}
      <div
        style={{ height: mobileDisplay, backgroundColor: navbg }}
        className=" transist overflow-hidden fixed top-0 left-0  w-[100%] h-[100%] px-[10px] flex-col z-[300] "
      >
        <div
          className=" text-[30px] justify-end h-[30px] flex w-[100%]"
          style={{ display: closeMenu, color: navtext }}
        >
          {" "}
          <button className="w-[fit-content] " onClick={hide_mob_nav}>
            <i className=" bi bi-x mob_nav_items"></i>
          </button>
        </div>

        <div className=" flex flex-col h-[auto] gap-[5px] px-[40px]">
          {mobilearray.map((e: any, index: any) => {
            return (
              <Link
                href={e.link}
                key={index}
                style={{ color: navtext, textDecoration: "none" }}
                className=" text-[30px] hover:text-white capitalize"
              >
                {e.text}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
