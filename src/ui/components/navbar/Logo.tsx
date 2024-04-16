import Link from "next/link";
import { LogoFont } from "@/config/fonts";
import clsx from "clsx";

interface Props {
  isNavbarScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export function Logo({ isNavbarScrolled, isMenuOpen, setIsMenuOpen }: Props) {
  return (
    <Link
      href="/"
      className={clsx(
        `${LogoFont.className} text-[22px] font-bold tracking-tight hover:text-[#a89e9a]`,
        {
          "text-textColor hover:text-textColor": isNavbarScrolled || isMenuOpen,
        }
      )}
      onClick={() => setIsMenuOpen(false)}
    >
      Keeper
    </Link>
  );
}
