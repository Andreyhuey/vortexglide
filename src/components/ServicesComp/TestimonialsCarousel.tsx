"use client";

import React from "react";
import Image from "next/image";

import { AiFillStar } from "react-icons/ai";

interface Prop {
  index: number;
  item: {
    id: number;
    name: string;
    image: string;
    rating: number;
    desc: string;
    location: string;
  };
}

const TestimonialsCarousel = ({ item }: Prop) => {
  const { name, image, rating, desc, location } = item;
  return (
    <>
      <div className="border border-[#DDDDDD] p-5 rounded w-[100%] h-56 cursor-pointer hover:border-[#E47500] hover:bg-[#0F0901]">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-start justify-between gap-3">
            <Image src={image} className="rounded-full" alt={name} />
            <div>
              <p className="font-medium text-[18px]">{name}</p>
              <p className="text-[#4F5665] text-[14px]">{location}</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between gap-2">
            <p>{rating}</p>
            <AiFillStar className="text-[#FEA250]" size={18} />
          </div>
        </div>
        <div className="pt-4 text-[15px] w-[240px] md:w-[300px]">{desc}</div>
      </div>
    </>
  );
};

export default TestimonialsCarousel;
