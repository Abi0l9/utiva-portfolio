import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Link } from "@mui/material";
import { Icon } from "@iconify/react";
import close from "@iconify/icons-material-symbols/close-rounded";

const Sidebar = ({ handleMenuClick }) => {
  return (
    <div
      onClick={handleMenuClick}
      className="bg-gray-600 w-full p-3 h-screen mx-auto text-left flex flex-row text-gray-200"
    >
      <div className=" flex flex-col flex-1 items-center  w-full text-xl text-gray-300">
        <Link
          href="#home"
          className="text-gray-200 text-2xl"
          color="inherit"
          underline="hover"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-gray-200 text-2xl"
          color="inherit"
          underline="hover"
        >
          About
        </Link>

        <Link
          href="#skills"
          className="text-gray-200 text-2xl"
          color="inherit"
          underline="hover"
        >
          Skills
        </Link>

        <Link
          href="#works"
          className="text-gray-200 text-2xl"
          color="inherit"
          underline="hover"
        >
          Works
        </Link>

        <Link
          href="#contact"
          className="text-gray-200 text-2xl"
          color="inherit"
          underline="hover"
        >
          Contact
        </Link>
      </div>
      <div className="float-right cursor-pointer">
        <Icon onClick={handleMenuClick} icon={close} width={32} color="white" />
      </div>
    </div>
  );
};

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  if (menuOpen) {
    return <Sidebar handleMenuClick={handleMenuClick} />;
  }

  return (
    <div className="bg-gray-800 text-gray-300 w-full">
      <Header toggleMenu={handleMenuClick} menuState={menuOpen} />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
