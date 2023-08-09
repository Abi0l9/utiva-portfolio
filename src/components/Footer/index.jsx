import React from "react";
import { Icon } from "@iconify/react";
import linkedin from "@iconify/icons-logos/linkedin-icon";
import twitter from "@iconify/icons-logos/twitter";
import github from "@iconify/icons-logos/github-icon";
import { Link } from "@mui/material";

const LinkWrapper = ({ tag, url }) => {
  return (
    <div className="p-1 bg-gray-300 shadow-md rounded-md text-gray-800 active:bg-blue-200">
      <Link href={url} underline="none">
        {tag}
      </Link>
    </div>
  );
};

const Footer = () => {
  const links = [
    {
      tag: <Icon icon={linkedin} color="white" width={24} />,
      url: "https://www.linkedin.com/in/monsur-oyedeji",
    },
    {
      tag: <Icon icon={twitter} color="white" width={24} />,
      url: "https://twitter.com/oyewaleM",
    },
    {
      tag: <Icon icon={github} color="white" width={24} />,
      url: "https://github.com/Abi0l9",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center min-h-[100px] mt-[100px]">
      <div className="text-xl my-2">
        Al-Khalifah 👳🏽‍♀️👩🏽‍💻😍 © {new Date().getFullYear()}{" "}
      </div>
      <div className="flex flex-row w-full items-center justify-center gap-x-3">
        {links.map((link) => (
          <LinkWrapper key={link.url} tag={link.tag} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
