import Link from "next/link";
import React from "react";
import { ReactComponent as Facebook } from "@/public/icons/facebook.svg";
import { ReactComponent as Instagram } from "@/public/icons/instagram.svg";
import { ReactComponent as Email } from "@/public/icons/email.svg";

const Footer = () => {
  return (
    <section id="footer" className="mt-[54px] bg-dark-aqua w-full">
      <div className="px-4 py-6 w-full max-w-7xl mx-auto flex flex-col lg:flex-row space-y-4 justify-between items-center">
        <p className="text-cream">
          © 2023 Zamrood by PT Teknologi Pandu Wisata
        </p>
        <div className="w-fit inline-flex gap-6 items-center justify-center lg:justify-end">
          <Link
            target="_blank"
            aria-label="facebook"
            href="https://web.facebook.com/profile.php?id=100094528566390"
          >
            <Facebook />
          </Link>
          <Link
            target="_blank"
            aria-label="instagram"
            href="https://www.instagram.com/zamrood.asia/"
          >
            <Instagram />
          </Link>
          <Link
            target="_blank"
            aria-label="email"
            href="mailto:zamrood@pandooin.com"
          >
            <Email />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
