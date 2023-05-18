import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer_exc = () => {
  const [content, setcontent] = useState([]);

  const contentInfo: any = [
    "* Pricing for iPhone 14 and iPhone 14 Plus includes a $30 connectivity discount that requires activation with AT&T, T-Mobile, or Verizon. Available to qualified customers and requires 24-month installment loan when you select Citizens One or Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple. iPhone activation required with AT&T, T-Mobile, or Verizon for purchases made with ACMI at an Apple Store. Subject to credit approval and credit limit. Taxes and shipping are not included in ACMI and are subject to your cards variable APR. Additional Apple Card Monthly Installments terms are in the Apple Card Customer Agreement. Additional iPhone Payments terms are in the iPhone Payments Terms and Conditions. ACMI is not available for purchases made online at special storefronts. The last months payment for each product will be the products purchase price, less all other payments at the monthly payment amount.",
    "◊ Apple Card Monthly Installments (ACMI) is a 0% APR payment option available only in the U.S. to select at checkout for certain Apple products purchased at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE, and is subject to credit approval and credit limit. See https://support.apple.com/kb/HT211204(Opens in a new window) for more information about eligible products. Variable APRs for Apple Card other than ACMI range from 15.74% to 26.74% based on creditworthiness. Rates as of April 1, 2023. If you choose the pay-in-full or one-time-payment option for an ACMI-eligible purchase instead of choosing ACMI as the payment option at checkout, that purchase will be subject to the variable APR assigned to your Apple Card. Taxes and shipping are not included in ACMI and are subject to your cards variable APR. See the Apple Card Customer Agreement(Opens in a new window) for more information. ACMI is not available for purchases made online at the following special stores: Apple Employee Purchase Plan; participating corporate Employee Purchase Programs; Apple at Work for small businesses; Government, and Veterans and Military Purchase Programs, or on refurbished devices. iPhone activation required on iPhone purchases made at an Apple Store with one of these national carriers: AT&T, Verizon, or T-Mobile.",
    "To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.",
    "If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.",
    "† Monthly pricing is available when you select Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple, and is subject to credit approval and credit limit. Financing terms vary by product. Taxes and shipping are not included in ACMI and are subject to your cards variable APR. See the Apple Card Customer Agreement for more information. ACMI is not available for purchases made online at special storefronts. The last months payment for each product will be the products purchase price, less all other payments at the monthly payment amount.",
    "° $6.99/month after free trial. Only one offer per Apple ID and only one offer per family if youre part of a Family Sharing group, regardless of the number of devices you or your family purchases. This offer is not available if you or your family have previously accepted an Apple TV+ one year free offer. Offer good for 3 months after eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.",
    "^ Compatible hardware and software required. Not all content available in Spatial Audio with Dolby Atmos.",
    "1. Special pricing available to qualified customers. To learn more about how to start qualifying toward special pricing, talk to an Apple Specialist in a store or give us a call at 1800MYAPPLE.",
    "2. $9 two-hour delivery on eligible Apple products in most metros. Offer is not available on customized Mac, engraved products, and for certain order types including orders paid for with financing or by bank transfer. Delivery times vary according to your selected delivery address, availability of your items, and the time of day you place your order. Find a store to view local store hours or see checkout for estimated delivery. A signature is required for delivery. Drivers may ask for verbal confirmation of receipt from a safe distance to satisfy the signature requirement. See https://www.apple.com/shop/shipping-pickup/ for more information.",
    "3. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apples trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.",
    "⁺ New subscribers only. $10.99/month after trial. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3 months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews until cancelled. Restrictions and other terms apply.",
    "We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple.",
  ];
  useEffect(() => {
    setcontent(contentInfo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="w-full flex justify-center py-[30px]">
        <div className="w-[70%] sm:w-[95%] ">
          <h1 className="text-[30px] font-[700] py-[10px]">Quick Links</h1>
          <div className="flex gap-[15px] sm:text-[12px] text-[15px] flex-wrap pb-[20px]">
            <p className="py-[5px] px-[11px] rounded-[18px] bg-gray-300 cursor ">
              Order Status
            </p>
            <p className="py-[5px] px-[11px] rounded-[18px] bg-gray-300 cursor ">
              Shopping Help
            </p>
            <p className="py-[5px] px-[11px] rounded-[18px] bg-gray-300 cursor ">
              Returns
            </p>
            <p className="py-[5px] px-[11px] rounded-[18px] bg-gray-300 cursor ">
              Your Saves
            </p>
          </div>
          <ul className="text-[#878787] text-[12px] border-b-gray-400 border-b-2 flex flex-col gap-[10px] py-[20px]">
            {content.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
          <div className="flex gap-[13px] pt-[15px]">
            <Link href="/">
              <i className="bi bi-apple "></i>{" "}
            </Link>
            <i className="bi bi-chevron-right"></i>
            <p> Apple Store Online</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer_exc;
