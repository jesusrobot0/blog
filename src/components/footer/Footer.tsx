import { CircularButtom, FooterNav, Wrapper } from "@/components";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-[70px]  text-white bg-background min-[1200px]:py-[100px]">
      <Wrapper>
        <div className="flex flex-col gap-[60px] min-[1200px]:gap-[76px]">
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-center">
            <p className="flex flex-col text-[64px] leading-[80px] min-[1200px]:text-[130px] min-[1200px]:leading-[155px]">
              <span>Let's start</span>
              <span>something </span>
              <span>new together</span>
            </p>
            <CircularButtom />
          </div>
          <FooterNav />
          <div className="flex flex-col gap-8 text-[18px] text-[#c5aba3] min-[1200px]:flex-row min-[1200px]:justify-between">
            <div className="flex flex-col gap-8 sm:flex-row">
              <Link href="#">© 2022 Keeper, All rights reserved</Link>
              <Link href="#">Privacy Policy</Link>
            </div>
            <p>
              Designed by{" "}
              <Link
                href="https://slabdsgn.com/"
                target="_blank"
                className="underline"
              >
                Slab!
              </Link>
              , Developed by{" "}
              <Link
                href="https://github.com/jesusrobot0"
                target="_blank"
                className="underline"
              >
                Jesús Velasco
              </Link>
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
