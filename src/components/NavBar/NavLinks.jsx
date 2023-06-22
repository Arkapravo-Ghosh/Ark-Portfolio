import React from "react";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Contact from "../../pages/Contact/Contact";

const NavLinks = {
  home: {
    to: "/",
    element: <Home />,
    text: "Home",
  },
  about: {
    to: "/about",
    element: <About />,
    text: "About",
  },
  portfolio: {
    to: "/portfolio",
    element: <Portfolio />,
    text: "Portfolio",
  },
  contact: {
    to: "/contact",
    element: <Contact />,
    text: "Contact",
  },
};

export default NavLinks;
