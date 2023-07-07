import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cool from "../../assets/Rectangle-6.svg";
import { AiOutlineRight } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="px-4 lg:px-40 lg:py-36 py-16 mt-12">
        <div className="flex justify-between items-center lg:relative flex-col lg:flex-row gap-4">
          <div>
            <div className="flex justify-start items-center gap-3">
              <Link href="/" className="cursor-pointer">
                Home
              </Link>
              <AiOutlineRight size={12} />
              <p className="text-[#E47500]">About us</p>
            </div>
            <div className="text-left pt-12 flex gap-5 flex-col">
              <h6 className="font-bold text-[30px] lg:w-[425px]">
                Lorem Ipsum is simply dummy text of the printing and.
              </h6>
              <p className="lg:w-[425px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div>
                <button className="flex justify-between items-center bg-[#FA8305] rounded-full py-3 px-4 gap-6">
                  Get in touch
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:-right-40 flex items-center justify-center">
            <Image src={Cool} alt="cool img" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
