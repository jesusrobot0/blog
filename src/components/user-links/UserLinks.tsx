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
  currentSection: string;
  setIsMenuOpen: (value: boolean) => void;
}

export function UserLinks({
  isMenuOpen,
  currentSection,
  setIsMenuOpen,
}: Props) {
  return (
    <>
      <ul
        className={clsx(
          "absolute top-[74px] left-0 w-screen h-screen pt-[75px] flex flex-col items-center sm:gap-10 sm:static sm:w-auto sm:h-auto sm:pt-0 sm:flex sm:flex-row",
          { hidden: !isMenuOpen },
          {
            "text-textColor":
              currentSection === "post-list" ||
              currentSection === "category-header",
          },
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
              <span className="rotate-12 mr-4 group-hover:bg-[#aa9d95] group-hover:p-2 group-hover:rounded-full group-hover:rotate-45 group-hover:text-textAccent transition-all duration-100 sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[25px] h-[25px]"
                  viewBox="0 0 50 50"
                >
                  <g transform="translate(0.364 0.756)" id="ss3522480518_1">
                    <path
                      d="M 24.684 48.487 L 0 24.244 L 24.684 0 L 49.369 24.244 Z"
                      fill="transparent"
                    ></path>
                    <path
                      d="M 11.494 9.972 C 13.186 11.634 15.162 12.982 17.312 13.941 C 19.461 14.899 21.741 15.45 24.021 15.56 C 26.3 15.67 28.536 15.338 30.599 14.583 C 32.663 13.828 34.514 12.665 36.046 11.159 L 36.101 11.213 L 36.101 11.213 L 37.952 13.031 L 37.952 13.031 L 38.007 13.085 C 36.474 14.59 35.289 16.408 34.521 18.434 C 33.752 20.461 33.414 22.657 33.526 24.896 C 33.638 27.135 34.198 29.374 35.175 31.485 C 36.151 33.596 37.524 35.537 39.215 37.198 L 37.322 39.057 C 30.336 32.195 29.998 23.419 34.476 16.445 L 13.268 37.275 L 11.417 35.456 L 32.625 14.627 C 25.524 19.025 16.588 18.693 9.601 11.831 Z"
                      fill="currentColor"
                    ></path>
                  </g>
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
              {
                "bg-textColor":
                  currentSection === "post-list" ||
                  currentSection === "category-header",
              },
              { "bg-textColor": isMenuOpen }
            )}
          ></span>
          <span
            className={clsx(
              "absolute right-0 h-[2px] w-3 origin-center bg-[#a99c95] transition-transform ease-in-out",
              {
                "w-[20.5px] -translate-y-1.5 -rotate-45": isMenuOpen,
              },
              {
                "bg-textColor":
                  currentSection === "post-list" ||
                  currentSection === "category-header",
              },
              { "bg-textColor": isMenuOpen }
            )}
          ></span>
        </div>
      </button>
    </>
  );
}
