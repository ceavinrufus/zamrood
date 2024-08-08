"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface NavLinkProps {
  text: string;
  href: string;
  isActive: boolean;
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const NavLink = ({ text, href, isActive }: NavLinkProps) => {
    return (
      <Link
        className={`px-6 py-2.5 ${
          !scrolled ? "text-cream" : "text-dark-aqua"
        } text-base font-bold ${
          !scrolled ? "border-b-cream" : "border-b-dark-teal"
        } hover:border-b-[2px] ${
          isActive &&
          `${
            !scrolled ? "border-b-cream" : "border-b-dark-teal"
          } border-b-[2px]`
        }`}
        href={href}
      >
        {text}
      </Link>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-40 ${
        !scrolled ? "bg-transparent" : "bg-cream"
      } w-full inline-flex justify-center`}
    >
      <div className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
        <Link href="/">
          <Image
            src={!scrolled ? "/logo-white.svg" : "/logo-color.svg"}
            priority
            alt="logo"
            width={135}
            height={50}
          />
        </Link>
        <div className="inline-flex items-center gap-6">
          <div className="hidden lg:inline-flex items-center gap-6">
            <NavLink text="Homepage" href="/" isActive={true} />
            <NavLink text="Customize Your Trip" href="/" isActive={false} />
            <NavLink text="Destination" href="/" isActive={false} />
            <NavLink text="Article" href="/" isActive={false} />

            <Link
              href={
                "https://wa.me/6283831556160?text=Hi,%20I%20wanna%20ask%20question%20about%20Zamrood"
              }
              target="_blank"
            >
              <button
                className={`text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent ${
                  !scrolled
                    ? "border-cream text-cream hover:bg-cream hover:text-dark-teal hover:border-cream"
                    : "border-dark-teal text-dark-teal hover:bg-dark-teal hover:text-cream hover:border-dark-teal"
                } border-2 w-fit ml-auto`}
              >
                Need assistance?
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
