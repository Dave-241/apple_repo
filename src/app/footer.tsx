"use client";

import React, { useEffect, useState } from "react";

const Footer = () => {
  const [secondContent, setsecondContent] = useState([]);

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

  useEffect(() => {
    setsecondContent(content2);
  }, [content2]);
  return (
    <>
      <section className="footer w-[100%] bg-[#F5F5F7] flex justify-center">
        <div className="w-[100%] px-[250px] sm:px-[15px]">
          {/*  */}
          {/* this is the main wrap for the second wrap   */}
          {/* for desktop . this would be hidden on mobile screens */}
          <div className="flex justify-start gap-[20px] w-[100%] py-[20px] sm:hidden">
            {content2.map((e: any, index: any) => {
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
