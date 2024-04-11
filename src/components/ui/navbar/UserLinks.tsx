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
        className="sm:hidden"
      >
        ToggleMenu
      </button>
    </>
  );
}
