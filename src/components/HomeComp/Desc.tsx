import Image from "next/image";
import React from "react";
import spiderMan from "../../assets/Rectangle_4.svg";

const Desc = () => {
  return (
    <>
      <div className="px-4 lg:px-40 pt-12 pb-24 bg-[#1C140F]">
        <p className="font-semibold text-[29px] lg:text-[35px] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div
          className="flex justify-center items-start
         py-12 lg:flex-row flex-col"
        >
          <div className="flex-1">
            <p className="text-[27px] font-semibold">Lorem Ipsum</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
        <Image
          src={spiderMan}
          alt="spider man falling"
          className="rounded-2xl pb-4"
        />
      </div>
    </>
  );
};

export default Desc;
