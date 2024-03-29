"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Hero_3_section from "./hero_";
import Header from "./header";
import Footer from "./footer";
import Slider from "./slider";

export default function Home() {
  const [content, setcontent] = useState([]);

  const contentInfo: any = [
    "1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.",

    "To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS. Update to the latest version by going to Settings > General > Software Update. Tap Download and Install.",

    "Available for qualifying applicants in the United States.",

    "Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.",

    "Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.",

    "A subscription is required for Apple TV+.",

    "Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.",
  ];

  useEffect(() => {
    setcontent(contentInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header navbg="black" navtext="lightgray" opacity={1} />
      <Hero_3_section />
      <Slider />
      <section className="footer w-[100%] bg-[#F5F5F7] flex justify-center">
        <div className="w-[100%] px-[250px] sm:px-[15px]">
          <ul className="text-[#878787] text-[12px] border-b-gray-400 border-b-2 flex flex-col gap-[10px] py-[20px]">
            {content.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
