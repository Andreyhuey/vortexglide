import React from "react";
import { FaArrowRight } from "react-icons/fa";

// Images
import Image from "next/image";
import phone from "../../assets/Group_48.svg";
import pc from "../../assets/Group_49.svg";
import ps4 from "../../assets/Group_50.svg";
import av from "../../assets/Group_51.svg";
import avr from "../../assets/Group_52.svg";
import threed from "../../assets/Group_53.svg";

const Services = () => {
  return (
    <>
      <div className={`py-12 px-4 lg:px-40 bg-blend-darken `}>
        <div className="py-7">
          <div className="flex items-center justify-center py-7">
            <div className="lg:w-[900px] text-center">
              <h6 className="font-bold text-[30px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h6>
              <p className="py-3 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s,
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-center items-center">
              <div className="flex flex-col items-center gap-5 justify-center">
                <Image src={phone} alt="phone image" />
                <p>Mobile Game Development</p>
                <FaArrowRight color="#DC7000" size={21} />
              </div>
              <div className="flex flex-col items-center gap-5 justify-center">
                <Image src={pc} alt="phone image" />
                <p>PC Game Development</p>
                <FaArrowRight color="#DC7000" size={21} />
              </div>
              <div className="flex flex-col items-center gap-5 justify-center">
                <Image src={ps4} alt="phone image" />
                <p>PS4 Game Development</p>
                <FaArrowRight color="#DC7000" size={21} />
              </div>
              <div className="flex flex-col items-center gap-5 justify-center">
                <Image src={av} alt="phone image" />
                <p>AR/VR Solutions</p>
                <FaArrowRight color="#DC7000" size={21} />
              </div>
              <div className="flex flex-col items-center gap-5 justify-center">
                <Image src={avr} alt="phone image" />
                <p>AR/VR Design</p>
                <FaArrowRight color="#DC7000" size={21} />
              </div>
              <div className="flex flex-col items-center gap-5 justify-center">
                <Image src={threed} alt="phone image" />
                <p>3D Modelings</p>
                <FaArrowRight color="#DC7000" size={21} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
