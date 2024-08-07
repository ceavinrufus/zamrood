import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  text: string;
  href: string;
  isActive: boolean;
}

const NavLink = ({ text, href, isActive }: NavLinkProps) => {
  return (
    <Link
      className={`px-6 py-2.5 text-dark-aquaman text-base font-bold hover:border-b-dark-teal hover:border-b-[2px] ${
        isActive && "border-b-dark-teal border-b-[2px]"
      }`}
      href={href}
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-vista-white w-full inline-flex justify-center">
      <div className="p-4 w-full max-w-7xl mx-auto inline-flex justify-between items-center">
        <Link href="/">
          <Image src={"/logo-color.svg"} alt="logo" width={100} height={100} />
        </Link>
        <div className="inline-flex items-center gap-6">
          <div className="hidden lg:inline-flex items-center gap-6">
            <NavLink text="Homepage" href="/" isActive={true} />
            <NavLink text="Customize Your Trip" href="/" isActive={false} />
            <NavLink text="Destination" href="/" isActive={false} />
            <NavLink text="Article" href="/" isActive={false} />

            <button className="button text-center inline-flex justify-center items-center px-6 py-2.5 rounded-full capitalize font-bold text-sm lg:text-base transition-colors ease-in-out duration-300 bg-transparent text-dark-teal border-2 border-dark-teal hover:bg-dark-teal hover:text-vista-white hover:border-dark-teal w-fit ml-auto">
              Need assistance?
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
