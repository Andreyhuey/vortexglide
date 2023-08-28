import Link from "next/link";
import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="py-32 px-4 lg:px-40 bg-[#1C140F]">
        <div className="pb-6">
          <h6 className="text-[30px] font-bold">Lorem Ipsum</h6>
          <p className="py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
        <div className="lg:p-12 p-5 bg-[#473327] rounded-[20px]">
          <div className="flex justify-between items-center flex-col md:flex-row gap-6">
            <div className="text-center md:text-start">
              <h6 className="font-medium text-[30px]">Stay in the loop</h6>
              <p className="lg:w-[480px]">
                Subscribe to receive the latest news and updates about TDA. We
                promise not to spam you!{" "}
              </p>
            </div>
            <div className="md:w-full">
              <div className="rounded-xl flex items-center justify-center md:w-full bg-slate-50 p-1 lg:w-[400px]">
                <input
                  className="w-full ml-4 focus:outline-none text-black"
                  placeholder="Email address..."
                />
                <button className="rounded-xl px-4 py-2 bg-[#DC7000]">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
