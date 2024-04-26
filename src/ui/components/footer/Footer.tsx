import { CircularButtom, FooterNav, Wrapper } from "@/ui/components";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-[70px] mt-52 text-white bg-background min-[1200px]:py-[100px]">
      <Wrapper>
        <div className="flex flex-col gap-[60px] min-[1200px]:gap-[76px]">
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-center">
            <h3 className="flex flex-col text-[64px] leading-[80px] min-[1200px]:text-[130px] min-[1200px]:leading-[155px]">
              <span>Let's start</span>
              <span>something </span>
              <span>new together</span>
            </h3>
            <CircularButtom />
          </div>
          <FooterNav />
          <div className="flex flex-col gap-8 text-[18px] text-[#B39B94] min-[1200px]:flex-row min-[1200px]:justify-between">
            <div className="flex flex-col gap-8 sm:flex-row">
              <Link href="#">© 2022 Keeper, All rights reserved</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
            <Link href="#">Made by Slab! Design Studio</Link>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
