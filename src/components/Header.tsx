import Image from "next/image";
import Link from "next/link";
import React from "react";
import console from "../assets/joy_stick_1.svg";
import unity from "../assets/unity_1.svg";
import unreal from "../assets/unreal_1.svg";
import cryEngine from "../assets/cry_1.svg";

const Header = () => {
  return (
    <>
      <div className="px-4 lg:px-40 py-10 mt-[70px]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
          <div className="flex-1 flex flex-col gap-5 items-start justify-start ">
            <p className="text-[#E87D0E] font-bold">3D game Dev </p>
            <p className="lg:text-[50px] lg:font-[500] lg:w-[350px] text-[40px]">
              Work that we produce for our clients
            </p>
            <p className="lg:w-[350px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <Link href="" className="px-4 py-2 bg-[#E87D0E] rounded-3xl">
              Get more details
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              <div className="justify-center flex items-center">
                <Image src={console} alt="game console" className="" />
              </div>

              <Image
                src={unity}
                alt="Unity logo"
                className="absolute top-[18rem] right-3 lg:-left-20"
              />
              <Image
                src={cryEngine}
                alt="Unreal logo"
                className="absolute lg:top-[8rem] top-[3rem]"
              />
              <Image
                src={unreal}
                alt="Cry Engine logo"
                className="absolute lg:top-[8rem] top-[4rem] lg:right-[8rem] right-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
