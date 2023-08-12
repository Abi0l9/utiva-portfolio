import React from "react";
import { Icon } from "@iconify/react";
import menu from "@iconify/icons-material-symbols/menu";

const Header = ({ menuState, toggleMenu }) => {
  return (
    <div className="w-full flex flex-row p-3 bg-gray-600 shadow-md" id="home">
      <div className="w-1/2 lg:w-2/3 text-gray-200 text-2xl flex flex-1">
        Al-Khalifah
      </div>
      <div className="flex flex-row w-1/2 lg:w-1/3">
        <nav className=" flex flex-row justify-between items-center w-full text-gray-400">
          <a href="#about" className="hidden md:block active:text-gray-200">
            About
          </a>
          <a href="#works" className="hidden md:block active:text-gray-200">
            Works
          </a>
          <a href="#projects" className="hidden md:block active:text-gray-200">
            Projects
          </a>
          <a href="#resume" className="hidden md:block active:text-gray-200">
            Resume
          </a>
          <a
            href="#contact"
            className="hidden md:block border-[1px] border-gray-200 py-[2px] px-[4px] rounded-md active:bg-gray-200 active:text-gray-900"
          >
            Contact
          </a>
        </nav>
        <div className="md:hidden float-right">
          <Icon onClick={toggleMenu} icon={menu} width={32} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
