"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Add this effect to handle body overflow
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Make sure to reset when unmounting
    };
  }, [nav]);

  return (
    <>
      <div
        className={`fixed h-auto w-full left-0 top-0 z-30 bg-black py-5 lg:px-16
        }`}
      >
        <div className="flex items-center justify-between px-4">
          <div>
            <Link className={`${nav ? "opacity-95" : ""}`} href="/">
              <h2 className="font-[700] text-[24px]">VortexGlide</h2>
            </Link>
          </div>

          {/* for laptops */}
          <ul className="items-center justify-between hidden lg:flex gap-16">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-4 py-2 bg-[#FA9021] rounded-md"
              >
                Contact us
              </Link>
            </li>
          </ul>

          {/* for mobile devices and tabs */}
          <div className="lg:hidden" onClick={handleClick}>
            {!nav ? (
              <HiOutlineMenu className="text-[24px]" />
            ) : (
              <IoCloseCircleOutline className="text-[24px] right-0 cursor-pointer" />
            )}
          </div>
        </div>

        {/* for phones */}

        <div className="w-full">
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute h-screen w-full cursor-pointer bg-opacity-95 bg-black py-5 shadow transform transition-transform duration-300 ease-in-out"
            }
          >
            <div className="flex flex-col items-center justify-center pt-10 gap-16 w-full">
              <li onClick={handleClick}>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[#FA9021] rounded-md"
                >
                  Contact us
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
