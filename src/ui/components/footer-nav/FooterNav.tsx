import Link from "next/link";
import { SocialLinks } from "..";

const userLinks = [
  { text: "About", path: "/about" },
  { text: "Services", path: "/services" },
  { text: "Projects", path: "/projects" },
  { text: "Blog", path: "/blog" },
  { text: "Contact", path: "/contact" },
];

export function FooterNav() {
  return (
    <div className="pt-[40px] flex flex-col gap-[100px] border-t border-t-[#8f7b71] min-[1200px]:flex-row min-[1200px]:justify-between">
      <nav>
        <ul className="flex flex-wrap gap-[40px]">
          {userLinks.map(({ path, text }) => (
            <li key={`navigation-footer-social-link-${path}`}>
              <Link href={path} className="text-[18px] hover:text-[#B39B94]">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinks color="white" />
    </div>
  );
}
