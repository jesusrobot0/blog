"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { Logo, UserLinks } from "@/components";
import { useNavigationSectionTracker } from "@/hooks";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentName = usePathname();
  const currentSection = useNavigationSectionTracker({
    navHeight: 74,
    reset: currentName,
  });

  return (
    <div
      className={clsx(
        "fixed w-screen bg-background transition-colors duration-200 ease-linear z-50",
        {
          "bg-white": isMenuOpen || currentSection === "white",
          "bg-background": !isMenuOpen && "primary",
          "bg-black": currentSection === "black",
        }
      )}
    >
      <nav
        className={clsx(
          "w-[90%] max-w-[1440px] h-[74px] mx-auto flex justify-between items-center text-textAccent border-b",
          { "border-b-[#8f7b71]": currentSection !== "black" }
        )}
      >
        <Logo
          currentSection={currentSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <UserLinks
          isMenuOpen={isMenuOpen}
          currentSection={currentSection}
          setIsMenuOpen={setIsMenuOpen}
        />
      </nav>
    </div>
  );
}
