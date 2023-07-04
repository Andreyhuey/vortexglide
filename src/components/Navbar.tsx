"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div
        className={`fixed h-auto w-full left-0 top-0 z-30 ${
          nav ? "bg-black" : "bg-black"
        } py-5 px-4 lg:px-16`}
      >
        <div>
          <div className="flex items-center justify-between">
            <div>
              <Link className={`${nav ? "opacity-0" : ""}`} href="/">
                <h2 className="font-[700] text-[24px]">LOGO</h2>
              </Link>
            </div>

            <ul className="items-center justify-between hidden lg:flex gap-16">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/services">Portfolio</Link>
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

            <div className="lg:hidden" onClick={handleClick}>
              {!nav ? (
                <HiOutlineMenu className="text-[24px]" />
              ) : (
                <IoCloseCircleOutline className="text-[24px] right-0 cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        {
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute h-screen w-full cursor-pointer bg-black"
            }
          >
            <div className="flex flex-col items-center justify-center gap-16">
              <li>
                <h2 className="font-[700] text-[24px]">LOGO</h2>
              </li>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/services">Portfolio</Link>
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
        }
      </div>
    </>
  );
};

export default Navbar;
