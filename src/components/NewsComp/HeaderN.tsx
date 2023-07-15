import Link from "next/link";
import React from "react";
import { AiOutlineRight, AiOutlineSearch } from "react-icons/ai";

const HeaderN = () => {
  return (
    <>
      <div className="px-4 lg:px-40 py-16 mt-10">
        <div>
          <div className="flex justify-center items-center gap-3">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <AiOutlineRight size={12} />
            <p className="text-[#E47500]">News</p>
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
          <div className="flex items-center justify-center">
            <div className="bg-[#1C140F] flex items-center justify-center  gap-1 rounded-xl lg:w-[400px] p-2 px-4">
              <AiOutlineSearch size={20} />
              <input
                placeholder="Search"
                className="bg-[#1C140F] w-full ml-2 focus:outline-none rounded-r-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderN;
