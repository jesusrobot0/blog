import Link from "next/link";

export function CircularButtom() {
  return (
    <Link
      href="#"
      className="min-w-[241px] max-w-[241px] h-[240px] flex justify-center items-center"
    >
      <div className="min-w-[170px] max-w-[170px] h-[169px] flex items-center justify-center text-background rounded-full bg-[#AEB946] hover:bg-[#AD9C94] min-[1200px]:min-w-[200px] min-[1200px]:max-w-[200px] min-[1200px]:h-[200px]">
        GET IN TOUCH
      </div>
    </Link>
  );
}
