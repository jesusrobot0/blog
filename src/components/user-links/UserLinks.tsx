import Link from "next/link";
import clsx from "clsx";
import { SocialLinks } from "..";

const userLinks = [
  { text: "About", path: "/about" },
  // { text: "Services", path: "/services" },
  // { text: "Projects", path: "/projects" },
  { text: "Blog", path: "/blog" },
  { text: "Contact", path: "/contact" },
];

interface Props {
  isMenuOpen: boolean;
  isNavbarScrolled: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export function UserLinks({
  isMenuOpen,
  isNavbarScrolled,
  setIsMenuOpen,
}: Props) {
  return (
    <>
      <ul
        className={clsx(
          "absolute top-[74px] left-0 w-screen h-screen pt-[75px] flex flex-col items-center sm:gap-10 sm:static sm:w-auto sm:h-auto sm:pt-0 sm:flex sm:flex-row",
          { hidden: !isMenuOpen },
          { "text-textColor": isNavbarScrolled },
          { "bg-white text-textColor": isMenuOpen }
        )}
      >
        {userLinks.map(({ text, path }) => (
          <li key={`navigation-user-link-${path}`} className="w-[89%]">
            <Link
              href={path}
              className="h-[101px] text-[32px] flex justify-between items-center border-b border-b-textColor group hover:border-b-[#aa9d95] sm:h-fit sm:text-[18px] sm:border-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="group-hover:text-[#aa9d95] group-hover:pl-7 transition-all duration-300 sm:transition-none sm:group-hover:pl-0 sm:group-hover:text-current">
                {text}
              </span>
              <span className="-rotate-45 mr-4 group-hover:bg-[#aa9d95] group-hover:p-2 group-hover:rounded-full group-hover:rotate-0 group-hover:text-textAccent transition-all duration-100 sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </span>
            </Link>
          </li>
        ))}

        <div className=" w-full h-[46px] mt-[100px] flex justify-center items-center sm:hidden">
          <SocialLinks color="gray" />
        </div>
      </ul>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="group flex justify-center items-center sm:hidden"
        aria-expanded={isMenuOpen}
        aria-controls="user-links"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <div className="absolute h-full w-20"></div>
        <div className="space-y-2 relative">
          <span
            className={clsx(
              "block h-[2px] w-5 origin-center bg-[#a99c95] transition-transform ease-in-out",
              {
                "translate-y-1 rotate-45": isMenuOpen,
              },
              { "bg-textColor": isNavbarScrolled },
              { "bg-textColor": isMenuOpen }
            )}
          ></span>
          <span
            className={clsx(
              "absolute right-0 h-[2px] w-3 origin-center bg-[#a99c95] transition-transform ease-in-out",
              {
                "w-[20.5px] -translate-y-1.5 -rotate-45": isMenuOpen,
              },
              { "bg-textColor": isNavbarScrolled },
              { "bg-textColor": isMenuOpen }
            )}
          ></span>
        </div>
      </button>
    </>
  );
}
