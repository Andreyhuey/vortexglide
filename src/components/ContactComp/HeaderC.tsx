import Image from "next/image";
import Link from "next/link";
import React from "react";
import global from "../../assets/Huge_Global.svg";
import { AiOutlineRight } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const HeaderC = () => {
  return (
    <>
      <div className="px-4 lg:px-40 py-20 lg:py-32 bg-[#1C140F] mt-10">
        <div>
          <div className="flex justify-center items-center gap-3">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <AiOutlineRight size={12} />
            <p className="text-[#E47500]">Contact us</p>
          </div>
          <div className="text-center pb-16">
            <p className="font-semibold text-[33px] py-3">
              Lorem Ipsum is simply dummy text of the printing and.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <Image src={global} alt="globe" />
          <div>
            <div className="flex justify-center items-center lg:flex-row flex-col py-12 w-full h-full">
              <div className="lg:border-r-[1px] lg:border-b-0  border-b-[1px] border-white px-10 py-3 w-full h-[120px] flex items-start flex-col gap-4">
                follow us
                <div className="flex items-center justify-center">
                  <div className="flex w-full flex-row items-center gap-4 justify-center md:justify-start lg:justify-center">
                    <Link href={""}>
                      <span className="flex h-[40px] w-[40px] items-center justify-center  rounded-full bg-[#473327] ">
                        {" "}
                        <FaFacebookF color="white" size={"17.8px"} />{" "}
                      </span>
                    </Link>

                    <Link href={""}>
                      <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#473327]">
                        {" "}
                        <BsInstagram color="white" size={"17.8px"} />{" "}
                      </span>
                    </Link>

                    <Link href={""}>
                      <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#473327]">
                        {" "}
                        <FaTwitter color="white" size={"17.8px"} />{" "}
                      </span>
                    </Link>

                    <Link href={""}>
                      <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#473327]">
                        {" "}
                        <FaLinkedinIn color="white" size={"17.8px"} />{" "}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:border-r-[1px] lg:border-b-0 border-b-[1px] border-white px-10 py-3 w-full h-[120px] flex gap-3 items-center justify-start lg:justify-center">
                <LiaPhoneVolumeSolid color="white" size={20} />
                +94 4444 5555 6
              </div>
              <div className="px-10 py-3 w-full flex gap-3 items-center justify-start lg:justify-center h-[120px]">
                <FaLocationDot size={20} />
                but also the leap into electronic typesetting
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderC;
