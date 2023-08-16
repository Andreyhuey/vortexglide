"use client";

import React from "react";
import { testimonials } from "@/data";
import TestimonialsCarousel from "./TestimonialsCarousel";

import styled from "styled-components";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Main = styled.div`
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Testimonials = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider === null) {
      return "";
    }
    slider.scrollLeft = slider.scrollLeft - 950;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider === null) {
      return "";
    }
    slider.scrollLeft = slider.scrollLeft + 950;
  };

  return (
    <>
      <div className="px-4 lg:px-40 py-8 bg-[#473327] flex flex-col">
        <div className=" py-5 flex items-center justify-center">
          <div className="lg:w-[450px] text-center">
            <p className="text-[35px] font-medium">
              Trusted by Thousands of Happy Customer
            </p>
            <p className="py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy .
            </p>
          </div>
        </div>

        <Main id="slider" className="w-[100%]">
          <div className="flex items-center gap-x-10 lg:gap-x-12 min-w-fit">
            {testimonials?.map((item, index) => (
              <>
                <TestimonialsCarousel item={item} key={index} index={index} />
              </>
            ))}
          </div>
        </Main>

        <div className="flex justify-center lg:justify-end pt-7 lg:pr-16 items-center">
          <div className="flex items-center justify-center gap-4">
            <span onClick={slideLeft}>
              <BsArrowLeftCircle
                size={32}
                className="hover:text-[#DC7000] text-[#fff] cursor-pointer"
              />
            </span>
            <span onClick={slideRight}>
              <BsArrowRightCircle
                size={32}
                className="hover:text-[#DC7000] text-[#fff] cursor-pointer"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

// {
//   testimonials &&
//     testimonials.map((testimonial) => {
//       //
//       const { id, name, location, image, rating, desc } = testimonial;

//       return (
//         <div key={id} className="border border-[#E47500] p-5 rounded">
//           <div className="flex items-center justify-between">
//             <div className="flex items-start justify-between gap-3">
//               <Image
//                 src={image}
//                 className="rounded-full"
//                 alt="Image of reviewing customer"
//               />
//               <div>
//                 <p className="font-medium text-[18px]">{name}</p>
//                 <p className="text-[#4F5665] text-[14px]">{location}</p>
//               </div>
//             </div>

//             <div className="flex items-center justify-between gap-2">
//               <p>{rating}</p>
//               <AiFillStar className="text-[#FEA250]" size={17} />
//             </div>
//           </div>
//           <div className="pt-3 text-[15px] lg:w-[300px]">{desc}</div>
//         </div>
//       );
//     });
// }
