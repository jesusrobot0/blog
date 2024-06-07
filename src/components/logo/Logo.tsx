import Link from "next/link";
import { LogoFont } from "@/config/fonts";
import clsx from "clsx";

interface Props {
  currentSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export function Logo({ currentSection, isMenuOpen, setIsMenuOpen }: Props) {
  return (
    <Link
      href="/"
      className={clsx(
        `${LogoFont.className} text-[22px] font-bold tracking-tight hover:text-[#a89e9a]`,
        {
          "text-textColor hover:text-textColor":
            currentSection === "post-list" ||
            currentSection === "category-header" ||
            isMenuOpen,
          "text-white":
            currentSection === "relatedPosts" && isMenuOpen === false,
        }
      )}
      onClick={() => setIsMenuOpen(false)}
    >
      Keeper
    </Link>
  );
}
