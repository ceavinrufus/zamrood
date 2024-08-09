import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ReactComponent as Hamburger } from "@/public/icons/hamburger.svg";
import { ReactComponent as HamburgerWhite } from "@/public/icons/hamburger-white.svg";
import Link from "next/link";

import React from "react";
import { navLinks } from "@/constants/navLinks";
import NavLink from "./NavLink";

const MobileSidebar = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <Sheet>
      <SheetTrigger title="Open Menu" className="lg:hidden">
        {scrolled ? <Hamburger /> : <HamburgerWhite />}
      </SheetTrigger>
      <SheetContent>
        <div className="mt-[156px] flex flex-col space-y-6 text-right">
          {navLinks.map((navLink, index: number) => (
            <NavLink
              key={index}
              scrolled={true}
              text={navLink.text}
              href={navLink.href}
              isActive={false}
            />
          ))}

          <Link
            target="_blank"
            href="https://wa.me/6283831556160?text=Hi, I wanna ask question about Zamrood"
          >
            <button
              type="button"
              className="text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-cream hover:border-dark-teal w-fit ml-auto"
            >
              Need Assistance?
            </button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
