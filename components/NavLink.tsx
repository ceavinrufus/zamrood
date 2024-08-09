import Link from "next/link";
import React from "react";

interface NavLinkProps {
  text: string;
  href: string;
  isActive: boolean;
  scrolled: boolean;
  borderWhenHover?: boolean;
}

const NavLink = ({
  text,
  href,
  isActive,
  scrolled,
  borderWhenHover = false,
}: NavLinkProps) => {
  return (
    <Link
      className={`px-6 py-2.5 ${
        !scrolled ? "text-cream" : "text-dark-aqua"
      } text-base font-bold ${
        !scrolled ? "border-b-cream" : "border-b-dark-teal"
      } ${borderWhenHover && "hover:border-b-[2px]"} ${
        isActive &&
        `${!scrolled ? "border-b-cream" : "border-b-dark-teal"} border-b-[2px]`
      }`}
      href={href}
    >
      {text}
    </Link>
  );
};

export default NavLink;
