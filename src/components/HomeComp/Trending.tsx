import Link from "next/link";
import React from "react";
import Image1 from "../../assets/Rectangle_23.svg";
import Image2 from "../../assets/Rectangle_24.svg";
import Image3 from "../../assets/Rectangle_25.svg";
import Image4 from "../../assets/Rectangle_26.svg";
import Image from "next/image";
import { BsFire } from "react-icons/bs";

const Trending = () => {
  return (
    <>
      <div className="px-4 lg:px-40 py-14 bg-[#1C140F]">
        <div>
          <div className="flex justify-between items-center">
            <p className="lg:text-[30px] font-[500] text-[20px]">
              Currently Trending Games
            </p>
            <Link href="" className="px-6 rounded-xl py-2 bg-[#898989]">
              SEE ALL
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-8">
            <div className="flex flex-col justify-center items-center">
              <Image src={Image1} alt="game image" />
              <div className="flex items-center justify-center gap-1 py-3">
                <BsFire />
                <p>40 Followers</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={Image2} alt="game image" />
              <div className="flex items-center justify-center gap-1 py-3">
                <BsFire />
                <p>40 Followers</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={Image3} alt="game image" />
              <div className="flex items-center justify-center gap-1 py-3">
                <BsFire />
                <p>40 Followers</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image src={Image4} alt="game image" />
              <div className="flex items-center justify-center gap-1 py-3">
                <BsFire />
                <p>40 Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
