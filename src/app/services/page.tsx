import {
  DescS,
  Footer,
  HeaderS,
  Navbar,
  Newsletter,
  Testimonials,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <main className="w-full">
        <Navbar />
        <HeaderS />
        <DescS />
        <Testimonials />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default page;
