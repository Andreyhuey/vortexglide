import React from "react";

const Form = () => {
  return (
    <>
      <div className="px-4 lg:px-40 py-16 bg-[#473327]">
        <div className="text-center py-3">
          <p className="text-[30px]">Say Hello</p>
          <p className="py-1">
            Lorem Ipsum is simply dummy text of the printing
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form className="md:w-[670px] flex flex-col gap-3">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col gap-1">
                <label className="text-[#CECECE] text-[14px]">First Name</label>
                <input className="md:w-[320px] rounded-md h-[40px] bg-[#CECECE] border-[#E4E4E4] border-[2px] border-solid text-[black] w-full focus:outline-none pl-4" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#CECECE] text-[14px]">Last Name</label>
                <input className="md:w-[320px] rounded-md h-[40px] bg-[#CECECE] border-[#E4E4E4] border-[2px] border-solid text-[black] w-full focus:outline-none pl-4" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#CECECE] text-[14px]">
                Email Address
              </label>
              <input
                className="rounded-md h-[40px] bg-[#CECECE] border-[#E4E4E4] border-[2px] border-solid text-[black] w-full focus:outline-none pl-4"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label className="text-[#CECECE] text-[14px] ">Message</label>
              <textarea className="rounded-md bg-[#CECECE] border-[#E4E4E4] border-[2px] border-solid text-[black] w-full focus:outline-none p-4 h-[200px]"></textarea>
            </div>
            <div className="flex items-center justify-end py-4">
              <button className="px-6 py-2 bg-[#DC7000] rounded-md">
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
