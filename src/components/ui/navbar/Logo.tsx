import Link from "next/link";
import { LogoFont } from "@/config/fonts";
import clsx from "clsx";

interface Props {
  isNavbarScrolled: boolean;
  isMenuOpen: boolean;
}

export function Logo({ isNavbarScrolled, isMenuOpen }: Props) {
  return (
    <Link
      href="/"
      className={clsx(
        `${LogoFont.className} text-[22px] font-bold tracking-tight hover:text-[#a89e9a]`,
        {
          "text-[#121212] hover:text-[#121212]": isNavbarScrolled,
        },
        { "text-[#121212]": isMenuOpen }
      )}
    >
      Keeper
    </Link>
  );
}
