import { Footer, Form, HeaderC, Navbar, Newsletter } from "@/components";
import React from "react";

const page = () => {
  return (
    <>
      <main>
        <Navbar />
        <HeaderC />
        <Form />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default page;
