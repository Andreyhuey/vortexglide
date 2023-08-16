import Image from "next/image";
import React from "react";
import fresh from "../../assets/Rectangle-25.svg";

const Card = () => {
  return (
    <>
      <div className="px-4 lg:px-40 lg:pt-16 py-16 lg:pb-0 bg-[#473327]">
        <div className="flex flex-col lg:flex-row gap-x-32 gap-y-4 items-center justify-center">
          <div className="flex-1">
            <Image src={fresh} alt="fresh" />
          </div>
          <div className="flex-1">
            <p>Lorem ipsum</p>
            <p className="pt-4 font-semibold text-[28px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="pt-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
