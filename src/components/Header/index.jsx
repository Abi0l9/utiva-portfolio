import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-row p-3 bg-gray-600 shadow-md">
      <div className="w-1/2 text-gray-200 text-2xl">Al-Khalifah</div>
      <nav className="flex flex-row justify-between items-center w-1/2 text-gray-400">
        <a href="#about" className="active:text-gray-200">
          About
        </a>
        <a href="#works" className="active:text-gray-200">
          Works
        </a>
        <a href="#projects" className="active:text-gray-200">
          Projects
        </a>
        <a href="#resume" className="active:text-gray-200">
          Resume
        </a>
        <a
          href="#contact"
          className="border-[1px] border-gray-200 py-[2px] px-[4px] rounded-md active:bg-gray-200 active:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
