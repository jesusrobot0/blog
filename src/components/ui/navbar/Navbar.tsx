"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Logo, UserLinks } from "./";

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

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed w-screen bg-background transition-colors duration-200 ease-linear sm:transition-none",
        {
          "bg-white": isNavbarScrolled,
        },
        { "bg-white duration-0": isMenuOpen }
      )}
    >
      <nav className="w-[90%] max-w-[1440px] h-[74px] mx-auto flex justify-between items-center text-white border-b border-b-[#8f7b71]">
        <Logo
          isNavbarScrolled={isNavbarScrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <UserLinks
          isMenuOpen={isMenuOpen}
          isNavbarScrolled={isNavbarScrolled}
          setIsMenuOpen={setIsMenuOpen}
        />
      </nav>
    </div>
  );
}
