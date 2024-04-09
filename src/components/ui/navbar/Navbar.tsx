"use client";

import Link from "next/link";
import { LogoFont } from "@/config/fonts";
import { useEffect, useState } from "react";

const userLinks = [
  { text: "About", path: "/about" },
  { text: "Services", path: "/services" },
  { text: "Projects", path: "/projects" },
  { text: "Blog", path: "/blog" },
  { text: "Contact", path: "/contact" },
];

export function Navbar() {
  const [changeBG, setChangeBG] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700) {
        setChangeBG(true);
      } else if (window.scrollY < 700) {
        setChangeBG(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
      fixed w-[100%] h-[74px] flex flex-col items-center transition-all duration-300 ease-linear
      ${changeBG ? "bg-white" : "bg-background"}`}
    >
      <nav
        className={`
        w-[90%] max-w-[1440px] h-[74px] flex justify-between items-center transition-all duration-300 ease-linear
        ${
          changeBG
            ? "border-b border-b-[#121212] "
            : "border-b border-b-[#8b7c72] text-white bg-transparent"
        }}`}
      >
        <div>
          <Link
            href="/"
            className={`
              ${LogoFont.className} text-[22px] font-bold tracking-tight
              ${changeBG ? "" : "hover:text-[#a89e9a]"}
            `}
          >
            Keeper
          </Link>
        </div>

        <ul className="flex gap-10 text-[18px]">
          {userLinks.map(({ text, path }) => (
            <li key={`navigation-user-link-${path}`}>
              <Link href={path}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
