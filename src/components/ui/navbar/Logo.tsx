import Link from "next/link";
import { LogoFont } from "@/config/fonts";

export function Logo() {
  return (
    <Link
      href="/"
      className={`${LogoFont.className} text-[22px] font-bold tracking-tight`}
    >
      Keeper
    </Link>
  );
}
