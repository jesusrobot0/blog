import Link from "next/link";
import clsx from "clsx";

const userLinks = [
  { text: "About", path: "/about" },
  { text: "Services", path: "/services" },
  { text: "Projects", path: "/projects" },
  { text: "Blog", path: "/blog" },
  { text: "Contact", path: "/contact" },
];

interface Props {
  menuVisibility: boolean;
  setMenuVisibility: (value: boolean) => void;
}

export function UserLinks({ menuVisibility, setMenuVisibility }: Props) {
  return (
    <>
      <ul
        className={clsx(
          "bg-blue-200 absolute top-[74px] left-0 w-screen h-screen pt-[75px] flex flex-col items-center gap-10 sm:static sm:w-auto sm:h-auto sm:pt-0 sm:flex sm:flex-row",
          { hidden: !menuVisibility }
        )}
      >
        {userLinks.map(({ text, path }) => (
          <li
            key={`navigation-user-link-${path}`}
            className="bg-green-200 w-[89%] h-[101px] text-[18px] sm:h-fit"
          >
            <Link href={path}>{text}</Link>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setMenuVisibility(!menuVisibility)}
        className="group flex justify-center items-center sm:hidden"
      >
        <div className="bg-red-700 absolute h-full w-20"></div>
        <div className="space-y-2 relative">
          <span
            className={clsx(
              "block h-[2px] w-5 origin-center bg-[#a99c95] transition-transform ease-in-out",
              {
                "translate-y-1 rotate-45": menuVisibility,
              }
            )}
          ></span>
          <span
            className={clsx(
              "absolute right-0 h-[2px] w-3 origin-center bg-[#a99c95] transition-transform ease-in-out",
              {
                "w-[20.5px] -translate-y-1.5 -rotate-45": menuVisibility,
              }
            )}
          ></span>
        </div>
      </button>
    </>
  );
}
