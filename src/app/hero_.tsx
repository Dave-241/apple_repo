import Reacta from "react";
import Image from "next/image";
import hero1 from "../../public/hero_one.png";
import hero1_mob from "../../public/mob_hero_one.jpg";
import hero2 from "../../public/hero_two.png";
import hero3 from "../../public/hero_three.png";

const Hero_3_section = () => {
  return (
    <>
      {/* little except text */}
      <div className="w-[100%] h-[auto] py-[10px] bg-white text-center  flex justify-center items-center mt-[40px] excerpt text-[15px]">
        <p className="">
          Get $200 - $630 in credit toward iPhone 14 or iPhone 14 Pro when you
          trade in iPhone 11 or higher.1{" "}
          <span className="text-[blue] hover:underline hover:underline-offset-4 cursor">
            {" "}
            Shop iPhone
            <i className=" bi bi-chevron-right"></i>{" "}
          </span>
        </p>
      </div>

      {/* first hero section */}
      <div className=" general_hero hero_1 mb-[10px] h-[580px]  w-[100%] bg-black flex flex-col justify-between items-center overflow-clip cursor">
        <div className="  w-[100%]  h-[auto] flex justify-center items-center flex-col gap-[10px] py-[40px] text-[#f3f3f6] ">
          <h1 className="text-[55px] font-[700] sm:text-[32px]">
            iPhone 14 Pro
          </h1>
          <h3 className="text-[30px] sm:text-[19px]">Pro. Beyond.</h3>
          <div className=" text-[blue] flex gap-[30px] text-[20px] sm:text-[19px]">
            <p className="cursor hover:underline hover:underline-offset-4 ">
              Learn more <i className=" bi bi-chevron-right"></i>
            </p>
            <p className="cursor hover:underline hover:underline-offset-4">
              Buy <i className=" bi bi-chevron-right"></i>
            </p>
          </div>
        </div>

        <Image src={hero1} alt="first hero image" className="hero1_img" />

        <Image
          src={hero1_mob}
          alt="first mobile hero image"
          className="mob_hero1_img"
        />
      </div>
      <div className=" general_hero hero_2 relative mb-[10px] h-[580px]  w-[100%] bg-white "></div>
      <div className=" general_hero hero_3 relative mb-[10px] h-[580px]  w-[100%]  bg-black"></div>
    </>
  );
};

export default Hero_3_section;
