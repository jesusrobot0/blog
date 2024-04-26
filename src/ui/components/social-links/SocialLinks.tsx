import Link from "next/link";

const socialLinks = [
  {
    text: "Facebook",
    iconGrayPath: "/icons/facebook-icon.svg",
    iconWhitePath: "/icons/facebook-icon-white.svg",
    path: "https://www.facebook.com/",
  },
  {
    text: "Twitter",
    iconGrayPath: "/icons/twitter-icon.svg",
    iconWhitePath: "/icons/twitter-icon-white.svg",
    path: "https://x.com/",
  },
  {
    text: "Instagram",
    iconGrayPath: "/icons/instagram-icon.svg",
    iconWhitePath: "/icons/instagram-icon-white.svg",
    path: "https://www.instagram.com/",
  },
  {
    text: "Linkedin",
    iconGrayPath: "/icons/linkedin-icon.svg",
    iconWhitePath: "/icons/linkedin-icon-white.svg",
    path: "https://www.linkedin.com/",
  },
];

interface Props {
  color: "white" | "gray";
}

export function SocialLinks({ color }: Props) {
  return (
    <div className="flex gap-[30px] ">
      {socialLinks.map(({ text, path, iconGrayPath, iconWhitePath }) => (
        <Link
          key={`navigation-social-link-${path}`}
          href={path}
          target="_blank"
          rel="noopener noreferrer nofollow"
          title={`Link to our ${text} profile`}
        >
          {color === "gray" ? (
            <img src={iconGrayPath} alt={`${text} Icon`} />
          ) : (
            <img src={iconWhitePath} alt={`${text} Icon`} />
          )}
        </Link>
      ))}
    </div>
  );
}
