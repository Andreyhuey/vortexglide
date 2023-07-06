import React from "react";

// images
import Image from "next/image";
import Image1 from "../assets/Rectangle_15.svg";
import Image2 from "../assets/Rectangle_16.svg";
import Image3 from "../assets/Rectangle_17.svg";
import Image4 from "../assets/Rectangle_18.svg";
import Image5 from "../assets/Rectangle_19.svg";
import Image6 from "../assets/Rectangle_20.svg";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="px-4 lg:px-20 py-16 bg-[000000]">
        <div className="text-center py-10">
          <h6 className="font-bold text-[30px]">Our Recent Projects</h6>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
            <Image src={Image1} alt="image" className="rounded-[20px]" />
            <Image src={Image2} alt="image" className="rounded-[20px]" />
            <Image src={Image3} alt="image" className="rounded-[20px]" />
            <Image
              src={Image5}
              alt="image"
              className="rounded-[20px] items-center"
            />
            <Image src={Image4} alt="image" className="rounded-[20px]" />
            <Image src={Image6} alt="image" className="rounded-[20px]" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link href="" className="px-6 py-2 bg-[#898989] rounded-xl">
            SEE ALL
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;
