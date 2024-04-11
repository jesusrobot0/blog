"use client";

import { useState } from "react";
import { Logo, UserLinks } from "./";

export function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <div className="fixed w-screen bg-red-200">
      <nav className="w-[90%] max-w-[1440px] h-[74px] mx-auto flex justify-between items-center">
        <Logo />
        <UserLinks
          menuVisibility={menuVisibility}
          setMenuVisibility={setMenuVisibility}
        />
      </nav>
    </div>
  );
}
