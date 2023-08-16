import React from "react";
import Cool from "../../assets/Rectangle-6.svg";
import fresh from "../../assets/Rectangle-25.svg";
import sold from "../../assets/Rectangle-25-large.svg";
import Image from "next/image";
import Link from "next/link";

const Desc = () => {
  return (
    <>
      <div className="px-4 lg:px-40 py-8">
        <div>
          <div className="flex flex-col lg:flex-row gap-x-32 gap-y-4 items-center justify-center pb-8">
            <div className="flex-1">
              <p className="pt-4 font-semibold text-[28px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="py-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`&apos;`s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries,
              </p>
              <Link href="" className="px-4 py-2 bg-[#DC7000]">
                Read more
              </Link>
            </div>
            <div className="flex-1">
              <Image src={Cool} alt="Cool" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-32 gap-y-4 items-center justify-center py-16">
            <div className="flex-1">
              <Image src={fresh} alt="fresh" />
            </div>
            <div className="flex-1">
              <p className="pt-4 font-semibold text-[28px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="py-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`&apos;`s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries,
              </p>
              <Link href="" className="px-4 py-2 bg-[#DC7000]">
                Read more
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-32 gap-y-4 items-center justify-center py-8">
            <div className="flex-1">
              <p className="pt-4 font-semibold text-[28px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="py-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`&apos;`s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries,
              </p>
              <Link href="" className="px-4 py-2 bg-[#DC7000]">
                Read more
              </Link>
            </div>
            <div className="flex-1">
              <Image src={sold} alt="fresh" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desc;
