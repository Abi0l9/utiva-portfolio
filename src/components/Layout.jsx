import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-gray-800 text-gray-300 w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;