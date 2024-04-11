"use client";

import { useEffect, useState } from "react";
import { Logo, UserLinks } from "./";
import clsx from "clsx";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700) {
        setIsNavbarScrolled(true);
      } else if (window.scrollY < 700) {
        setIsNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "fixed w-screen bg-background transition-colors duration-200 ease-linear",
        {
          "bg-white": isNavbarScrolled,
        },
        { "bg-white": isMenuOpen }
      )}
    >
      <nav className="w-[90%] max-w-[1440px] h-[74px] mx-auto flex justify-between items-center text-white border-b border-b-[#8f7b71]">
        <Logo isNavbarScrolled={isNavbarScrolled} isMenuOpen={isMenuOpen} />
        <UserLinks
          isMenuOpen={isMenuOpen}
          isNavbarScrolled={isNavbarScrolled}
          setIsMenuOpen={setIsMenuOpen}
        />
      </nav>
    </div>
  );
}
