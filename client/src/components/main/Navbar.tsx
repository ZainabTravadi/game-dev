"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-row items-center border border-white/10">
      <div className="flex w-[30%] flex-row items-center justify-center gap-2">
        <Image
          src="/navbar_arr.svg"
          alt="logo"
          width={24}
          height={24}
          className="h-6 w-6"
        />
        <span className="sr-only">Game Development UWA</span>
        <span aria-hidden="true" className="whitespace-nowrap md:hidden">
          {" "}
          GDUWA
        </span>
        <span aria-hidden="true" className="hidden whitespace-nowrap md:inline">
          {" "}
          Game Development UWA _
        </span>
      </div>

      <div className="w-[20%]"></div>

      {/* Desktop Navigation Links */}
      <div className="hidden w-[50%] flex-row items-center justify-center gap-8 md:flex">
        <Link className="whitespace-nowrap" href="/">
          Home
        </Link>

        <Link className="whitespace-nowrap" href="/about">
          About Us
        </Link>

        <Link className="whitespace-nowrap" href="/events">
          Events
        </Link>
        {/* TODO: Add game showcase page */}
        <Link className="whitespace-nowrap" href="/">
          Game Showcase
        </Link>
        {/* TODO: Add art showcase page */}
        <Link className="whitespace-nowrap" href="">
          Art Showcase
        </Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="relative w-[50%] md:hidden">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="ml-auto flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <Image
            src="/navbar_dropdown_icon.svg"
            alt="menu"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 top-full z-50 mt-2 flex flex-col rounded border border-white/10 bg-black">
            <Link
              className="whitespace-nowrap px-4 py-2 hover:bg-white/10"
              href="/"
              onClick={() => setIsDropdownOpen(false)}
            >
              Home
            </Link>

            <Link
              className="whitespace-nowrap px-4 py-2 hover:bg-white/10"
              href="/about"
              onClick={() => setIsDropdownOpen(false)}
            >
              About Us
            </Link>

            <Link
              className="whitespace-nowrap px-4 py-2 hover:bg-white/10"
              href="/"
              onClick={() => setIsDropdownOpen(false)}
            >
              Events
            </Link>

            <Link
              className="whitespace-nowrap px-4 py-2 hover:bg-white/10"
              href=""
              onClick={() => setIsDropdownOpen(false)}
            >
              Game Showcase
            </Link>

            <Link
              className="whitespace-nowrap px-4 py-2 hover:bg-white/10"
              href=""
              onClick={() => setIsDropdownOpen(false)}
            >
              Art Showcase
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
