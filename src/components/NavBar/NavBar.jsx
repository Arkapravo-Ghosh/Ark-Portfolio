import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import navMenuIcon from "../../assets/nav-menu-icon.svg";
import "./NavBar.css";
import { Outlet, NavLink } from "react-router-dom";
import logo from "/Ark_Logo.webp";

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
        <div className="navbar">
          <div className="logo">
            <NavLink to="/Ark-Portfolio/">
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
              <motion.li transition={spring} whileHover={textHover}>
                <NavLink to="/Ark-Portfolio/">Home</NavLink>
              </motion.li>
              <motion.li transition={spring} whileHover={textHover}>
                <NavLink to="/Ark-Portfolio/about">About</NavLink>
              </motion.li>
              <motion.li transition={spring} whileHover={textHover}>
                <NavLink to="/Ark-Portfolio/portfolio">Portfolio</NavLink>
              </motion.li>
              <motion.li transition={spring} whileHover={textHover}>
                <NavLink to="/Ark-Portfolio/contact">Contact</NavLink>
              </motion.li>
            </ul>
          </div>
          <NavLink to="/Ark-Portfolio/">
            <motion.div className='heading'>
              Ark Site
            </motion.div>
          </NavLink>
        </div>
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
                  <motion.li variants={sidebar_item}>
                    <NavLink to="/Ark-Portfolio/">Home</NavLink>
                  </motion.li>
                  <motion.li variants={sidebar_item}>
                    <NavLink to="/Ark-Portfolio/about">About</NavLink>
                  </motion.li>
                  <motion.li variants={sidebar_item}>
                    <NavLink to="/Ark-Portfolio/portfolio">Portfolio</NavLink>
                  </motion.li>
                  <motion.li variants={sidebar_item}>
                    <NavLink to="/Ark-Portfolio/contact">Contact</NavLink>
                  </motion.li>
                </motion.ul>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={showSidebar ? "nav-menu open" : "nav-menu"}
          onClick={
            showSidebar
              ? () => setShowSidebar(false)
              : () => setShowSidebar(true)
          }
        >
          <div className="nav-menu_burger" />
        </div>
        <Outlet />
      </AnimatePresence>
    </>
  )
}
