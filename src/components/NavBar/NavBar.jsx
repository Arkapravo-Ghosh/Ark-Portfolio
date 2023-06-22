import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./NavBar.css";
import { Outlet, NavLink } from "react-router-dom";
import logo from "/Ark_Logo.webp";
import NavLinks from "./NavLinks";

const textHover = {
  type: "spring",
  scale: 1.1,
  textShadow: "#707070 0px 0px 10px",
  stiffness: 800,
  damping: 25,
  duration: 0.2,
};

/*
const LogoHover = {
  type: "spring",
  scale: 1.1,
  boxShadow: "#707070 0px 0px 10px",
  stiffness: 800,
  damping: 25,
  duration: 0.2,
};
*/

const spring = {
  type: "spring",
  stiffness: 800,
  damping: 25,
  duration: 0.2,
};

const sidebar = {
  start: {},
  finished: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const sidebar_item = {
  start: {
    x: -200,
    opacity: 0,
  },
  finished: {
    x: 0,
    opacity: 1,
  },
};

export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <AnimatePresence>
        <nav className="navbar">
          <div className="logo">
            <NavLink to="/">
              <motion.img
                height="30x"
                width="30px"
                src={logo}
                alt="Logo"
              >
              </motion.img>
            </NavLink>
          </div>
          <div className="list">
            <ul>
              {
                Object.values(NavLinks).map((link, index) => (
                  <motion.li key={index} transition={spring} whileHover={textHover}>
                    <NavLink to={link.to}>{link.text}</NavLink>
                  </motion.li>
                ))
              }
            </ul>
          </div>
          <NavLink to="/">
            <motion.div className="heading">
              Ark Site
            </motion.div>
          </NavLink>
        </nav>
        <AnimatePresence>
          {showSidebar && (
            <motion.div
              transition={{ type: "tween" }}
              className="sidebar"
              onClick={() => setShowSidebar(false)}
              initial={{ x: "-500px" }}
              animate={{ x: 0 }}
              exit={{ x: "-500px" }}
            >
              <AnimatePresence>
                <motion.ul
                  variants={sidebar}
                  initial="start"
                  animate="finished"
                >
                  {
                    Object.values(NavLinks).map((link, index) => (
                      <motion.li key={index} variants={sidebar_item}>
                        <NavLink to={link.to}>{link.text}</NavLink>
                      </motion.li>
                    ))
                  }
                </motion.ul>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        <nav
          className={showSidebar ? "nav-menu open" : "nav-menu"}
          onClick={
            showSidebar
              ? () => setShowSidebar(false)
              : () => setShowSidebar(true)
          }
        >
          <div className="nav-menu_burger" />
        </nav>
        <Outlet />
      </AnimatePresence>
    </>
  );
};
