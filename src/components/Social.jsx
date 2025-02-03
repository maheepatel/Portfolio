import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/maheepatel/" },
  {
    icons: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mahendarpatel/",
  },
  // { icons: <FaYoutube />, path: "" },
  { icons: <FaTwitter />, path: "https://x.com/Drmetavers" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
