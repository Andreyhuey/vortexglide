import Image from "next/image";
import React from "react";
import Image1 from "../../assets/Bill_1.svg";
import Image2 from "../../assets/Beverly_1.svg";
import Image3 from "../../assets/Claudia_1.svg";
import Image4 from "../../assets/Avatar_1.svg";

const Team = () => {
  return (
    <>
      <div className="px-4 lg:px-40 pt-16 bg-[#1C140F]">
        <div>
          <p className="text-[25px] font-semibold">Our Team</p>
          <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
            <div className="flex flex-col items-center justify-center p-5 rounded-lg bg-[#473327]">
              <Image src={Image1} alt="images" />
              <p className="py-2">Name</p>
              <p>position</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 rounded-lg bg-[#473327]">
              <Image src={Image2} alt="images" />
              <p className="py-2">Name</p>
              <p>position</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 rounded-lg bg-[#473327]">
              <Image src={Image3} alt="images" />
              <p className="py-2">Name</p>
              <p>position</p>
            </div>
            <div className="flex flex-col items-center justify-center p-5 rounded-lg bg-[#473327]">
              <Image src={Image4} alt="images" />
              <p className="py-2">Name</p>
              <p>position</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
