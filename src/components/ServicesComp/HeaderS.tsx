"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  BsCheckCircle,
  BsCheckCircleFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";
import VideoPlayer from "./VideoPlayer";
import videopic from "../../assets/Video_Image.svg";

const HeaderS = () => {
  const [vidPlaying, setVidPlaying] = useState(false);

  return (
    <>
      <div className="px-4 lg:px-40 py-16 mt-[70px]">
        <div>
          <div className="flex justify-center items-center gap-3">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <AiOutlineRight size={12} />
            <p className="text-[#E47500]">Services</p>
          </div>
          <div className="text-center py-5">
            <p className="font-semibold text-[33px]">
              Lorem Ipsum is simply dummy text of the printing and.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
        </div>
        <div className="bg-[#1C140F] rounded-[10px] py-10 px-4">
          <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
            <div className="flex flex-1 gap-6 items-center justify-center md:border-r-[1px] md:border-r-white border-b-[1px] md:border-b-0 border-b-white p-16">
              <div className="bg-[#EEEFF2] rounded-full p-3">
                <BsFillPersonFill color="#DC7000" size="24" />
              </div>
              <div>
                <p className="font-bold text-[25px]">90+</p>
                <p>Clients</p>
              </div>
            </div>
            <div className="flex flex-1 gap-6 items-center justify-center md:border-r-[1px] md:border-r-white md:border-b-0 border-b-[1px] border-b-white p-16">
              <div className="bg-[#EEEFF2] rounded-full p-3">
                <FaLocationDot color="#DC7000" size="24" />
              </div>
              <div>
                <p className="font-bold text-[25px]">30+</p>
                <p>Countries</p>
              </div>
            </div>
            <div className="flex flex-1 gap-6 items-center justify-center p-16">
              <div className="bg-[#EEEFF2] rounded-full p-3">
                <CgDatabase color="#DC7000" size="24" />
              </div>
              <div>
                <p className="font-bold text-[25px]">50+</p>
                <p>Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-x-12">
            <div className="flex-1 w-full rounded-[10px]">
              <VideoPlayer
                vidUrl={"https://youtu.be/XrPZSq5YXqc"}
                thumbNail={videopic}
                heighT={350}
                widtH={"650"}
                vidPlaying={vidPlaying}
                setVidPlaying={setVidPlaying}
                className=""
                //
              />
            </div>
            <div className="flex-1">
              <div className="lg:w-[430px]">
                <p className="font-bold text-[30px]">
                  Lorem Ipsum is simply dummy text.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy .
                </p>
                <div className="py-4">
                  <div className="flex gap-3 items-center">
                    <BsCheckCircleFill color="#2FAB73" />
                    <p>Lorem Ipsum is simply</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <BsCheckCircleFill color="#2FAB73" />
                    <p>Lorem Ipsum is simply</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <BsCheckCircleFill color="#2FAB73" />
                    <p>Lorem Ipsum is simply</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <BsCheckCircleFill color="#2FAB73" />
                    <p>Lorem Ipsum is simply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderS;
