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
        <p className="sm:hidden capitalize text-center">
          Davis Isibor. note: only the main navigations are functioning and
          linked. the dropdown menu isnt linked to any page here. this is an
          apple clone with limited number of pages
          <span className="text-[blue] hover:underline hover:underline-offset-4 cursor">
            {" "}
            Apple Clone (designed by Davis)
            <i className=" bi bi-chevron-right"></i>{" "}
          </span>
        </p>

        <p className="sm:block hidden capitalize text-center">
          apple clone. note : only the main navigation links do function. links
          embeded in pages do not function and is not linked to any page here
          <span className="text-[blue] hover:underline hover:underline-offset-4 cursor">
            {" "}
            Apple Clone (designed by Davis)
            <i className=" bi bi-chevron-right"></i>{" "}
          </span>
        </p>
      </div>

      {/* first hero section */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
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
      <div className=" general_hero hero_2 mb-[10px] h-[580px]  w-[100%] bg-[#FBFBFD] flex flex-col justify-around items-center overflow-clip cursor">
        <div className="  w-[100%]  h-[auto] flex justify-center items-center flex-col gap-[10px] py-[40px] text-[black] ">
          <h1 className="text-[55px] font-[700] sm:text-[32px]">iPhone 14</h1>
          <h3 className="text-[30px] sm:text-[19px]">Wonderfull.</h3>
          <div className=" text-[blue] flex gap-[30px] text-[20px] sm:text-[19px]">
            <p className="cursor hover:underline hover:underline-offset-4 ">
              Learn more <i className=" bi bi-chevron-right"></i>
            </p>
            <p className="cursor hover:underline hover:underline-offset-4">
              Buy <i className=" bi bi-chevron-right"></i>
            </p>
          </div>
        </div>

        <Image
          src={hero2}
          alt="first hero image"
          className="w-[42%] sm:hidden"
        />

        <Image
          src={hero2}
          alt="first mobile hero image"
          className="w-[90%] mr-[20px] hidden sm:block"
        />
      </div>
      <div className=" general_hero hero_3 mb-[10px] h-[580px]  w-[100%] bg-black flex flex-col justify-between items-center overflow-clip cursor">
        <div className="  w-[100%]  h-[auto] flex justify-center items-center flex-col gap-[8px] py-[40px] text-[#f3f3f6] ">
          <h1 className="text-[55px] font-[700] sm:text-[32px]">
            {" "}
            <i className="bi bi-apple"></i>
            WATCH
          </h1>
          <p className="text-[darkred] tracking-[2px] font-[700] text-[20px]">
            SERIES 8
          </p>
          <h3 className="text-[30px] sm:text-[19px]">A healthy leap ahead.</h3>
          <div className=" text-[blue] flex gap-[30px] text-[20px] sm:text-[19px]">
            <p className="cursor hover:underline hover:underline-offset-4 ">
              Learn more <i className=" bi bi-chevron-right"></i>
            </p>
            <p className="cursor hover:underline hover:underline-offset-4">
              Buy <i className=" bi bi-chevron-right"></i>
            </p>
          </div>
        </div>

        <Image
          src={hero3}
          alt="first hero image"
          className="w-[35%] sm:hidden"
        />

        <Image
          src={hero3}
          alt="first mobile hero image"
          className="w-[100%] h-[auto]"
        />
      </div>

      {/* second hero section */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="bg-white  w-[100%] h-[2000px] sm:h-[3300px] flex flex-wrap justify-around ">
        <div className=" w-[49%] h-[33%] cursor sm:w-[100%] sm:h-[16.3%] col_1">
          <div className="w-[100%] h-[auto] flex justify-center flex-col items-center gap-[5px] pt-[50px] flex-wrap ">
            <h1 className="text-[40px] font-[700] sm:text-[30px] ">
              {" "}
              <i className="bi bi-apple"></i>
              Trade In
            </h1>
            <p className="text-[25px] sm:text-[15px]">
              upgrade and save. its that easy
            </p>
            <p className="hover:underline hover:underline-offset-4 text-[blue] cursor text-[20px] sm:text-[19px]">
              See what your device is worth{" "}
              <i className=" bi bi-chevron-right"></i>
            </p>
          </div>
        </div>
        {/*  */}

        <div className=" w-[49%] h-[33%] cursor sm:w-[100%] sm:h-[16.3%] col_2">
          <div className="w-[100%] h-[100%] py-[50px] flex justify-end   flex-col items-center gap-[5px]  text-[#e3e3e7] flex-wrap">
            <h1 className="text-[40px] font-[700] sm:text-[30px] ">
              {" "}
              <i className="bi bi-apple"></i>
              WWDC23
            </h1>
            <p className="text-[22px] sm:text-[15px]">
              Apple Deveoper Conference.
            </p>
            <p className="text-[25px] sm:text-[15px]">
              Join us online June 5-9.
            </p>
            <p className="hover:underline hover:underline-offset-4 text-[blue] cursor text-[20px] sm:text-[19px]">
              Learn more
              <i className=" bi bi-chevron-right"></i>
            </p>
          </div>
        </div>
        {/*  */}

        <div className=" w-[49%] h-[33%] cursor sm:w-[100%] sm:h-[16.3%] col_3 ">
          <div className="w-[100%] h-[100%] py-[50px] flex justify-start   flex-col items-center gap-[5px]  text-[#e3e3e7] flex-wrap">
            <h1 className="text-[40px] font-[700] sm:text-[30px] ">
              {" "}
              Final Cut Pro for iPad
            </h1>
            <p className="text-[25px] sm:text-[15px]">
              Bring your entire studo to your shoot
            </p>
            <p className="text-[22px] sm:text-[13px] text-[gray]">
              Avaliable 5.23
            </p>
            <p className="hover:underline hover:underline-offset-4 text-[blue] cursor text-[20px] sm:text-[19px]">
              Learn more
              <i className=" bi bi-chevron-right"></i>
            </p>
          </div>
        </div>
        {/*  */}
        <div className=" w-[49%]  h-[33%] cursor sm:w-[100%] sm:h-[16.3%] col_4">
          <div className="w-[100%] h-[100%] py-[50px] flex justify-start   flex-col items-center gap-[5px]  text-[#e3e3e7] flex-wrap">
            <h1 className="text-[40px] font-[700] sm:text-[30px] ">
              {" "}
              Logic Pro for iPad
            </h1>
            <p className="text-[22px] sm:text-[15px]">
              The ultimate music studio. at your fingertips.
            </p>
            <p className="text-[22px] sm:text-[13px] text-[gray]">
              Avaliable 5.23
            </p>
            <p className="hover:underline hover:underline-offset-4 text-[blue] cursor text-[20px] sm:text-[19px]">
              Learn more
              <i className=" bi bi-chevron-right"></i>
            </p>
          </div>
        </div>
        {/*  */}
        <div className=" w-[49%]  h-[33%] cursor sm:w-[100%] sm:h-[16.3%] col_5">
          <div className="w-[100%] h-[100%] py-[50px] flex justify-start   flex-col items-center gap-[5px]  text-black flex-wrap">
            <h1 className="text-center text-[40px] font-[700] sm:text-[30px] ">
              {" "}
              Gifts just waiting <br />
              to be picked
            </h1>
            <p className="text-center text-[22px] sm:text-[15px]">
              Its not too late to get Mom <br />
              something great.
            </p>

            <p className="hover:underline hover:underline-offset-4 text-[blue] cursor text-[20px] sm:text-[19px]">
              Shop the gift guide
              <i className=" bi bi-chevron-right"></i>
            </p>
          </div>
        </div>
        {/*  */}
        <div className=" w-[49%]  h-[33%] cursor sm:w-[100%] sm:h-[16.3%] col_6">
          <div className="w-[100%] h-[100%] py-[50px] flex justify-start   flex-col items-center gap-[5px]  text-black flex-wrap">
            <h1 className="text-[40px] font-[700] sm:text-[30px] ">
              {" "}
              <i className="bi bi-apple"></i>Card
            </h1>
            <p className="text-center text-[22px] sm:text-[15px]">
              Get upto 3% Daily cash back <br /> with every purchase.
            </p>
            <div className="flex items-center justify-center gap-[30px]">
              <p className="hover:underline hover:underline-offset-4 text-[blue] cursor text-[20px] sm:text-[19px]">
                Learn more
                <i className=" bi bi-chevron-right"></i>
              </p>

              <p className="hover:underline hover:underline-offset-4 text-[blue] cursor text-[20px] sm:text-[19px]">
                Apply now
                <i className=" bi bi-chevron-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third hero section which i would coplete later */}
    </>
  );
};

export default Hero_3_section;
