import React from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#070707] py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[40px] justify-between gap-6 px-4 lg:px-16">
          <div className="flex flex-col items-start justify-start gap-5">
            <h2 className="font-[700] text-[24px]">VortexGlide</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>@vortexglide</p>
          </div>
          <div className="flex lg:items-center flex-col justify-center items-start ">
            <div className="flex gap-3 flex-col">
              <h6 className="font-bold text-[20px]">About us</h6>
              <div className="flex flex-col gap-2">
                <p>Zeus</p>
                <p>Portfolio</p>
                <p>Careers</p>
                <p>Contact us</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-5">
            <h6 className="font-bold text-[20px]">Contact us</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>+908 89097 890</p>
          </div>
          <div className="flex items-end justify-end flex-col">
            <div className="flex w-full flex-row items-center gap-4 justify-center md:justify-start lg:justify-center">
              <Link href={""}>
                <span className="flex h-[40px] w-[40px] items-center justify-center  rounded-full bg-white ">
                  {" "}
                  <FaFacebookF color="black" size={"17.8px"} />{" "}
                </span>
              </Link>

              <Link href={""}>
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
                  {" "}
                  <BsInstagram color="black" size={"17.8px"} />{" "}
                </span>
              </Link>

              <Link href={""}>
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
                  {" "}
                  <FaTwitter color="black" size={"17.8px"} />{" "}
                </span>
              </Link>

              <Link href={""}>
                <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white">
                  {" "}
                  <FaLinkedinIn color="black" size={"17.8px"} />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-white pt-5 pb-4">
          <p className="text-center">
            Copyright ® 2023 All rights reserved by{" "}
            <a
              href="https://andreyhuey.github.io/portfolio/"
              target="_blank"
              className="text-[#E47500] underline"
            >
              developer
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
