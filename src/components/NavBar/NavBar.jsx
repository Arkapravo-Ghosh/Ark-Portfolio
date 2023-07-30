import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./NavBar.css";
import { Outlet, NavLink, Link } from "react-router-dom";
import logo from "/Ark_Logo.svg";
import NavLinks from "./NavLinks";
import { PiBriefcase } from "react-icons/pi";

const resume_link = "https://raw.githubusercontent.com/Arkapravo-Ghosh/ark-resume/main/Arkapravo_Ghosh_Resume.pdf";

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
          <div className="logo disable-select">
            <Link className="ResumeMobile" to={resume_link} type="application/pdf">
              <PiBriefcase className="ResumeIcon" />
            </Link>
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
          <div className="list disable-select">
            <ul>
              {
                Object.values(NavLinks).map((link, index) => (
                  <motion.li key={`nav_link_${index}`} transition={spring} whileHover={textHover}>
                    <NavLink to={link.to}>{link.text}</NavLink>
                  </motion.li>
                ))
              }
            </ul>
          </div>
          <div className="heading disable-select">
            <Link className="Resume" to={resume_link} type="application/pdf">
              Resume
            </Link>
            <NavLink className="Heading" to="/">
              <motion.div className="">
                Ark Site
              </motion.div>
            </NavLink>
          </div>
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
                  className="disable-select"
                >
                  {
                    Object.values(NavLinks).map((link, index) => (
                      <motion.li key={`sidebar_link_${index}`} variants={sidebar_item}>
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
          <div className="nav-menu_burger disable-select" />
        </nav>
        <Outlet />
      </AnimatePresence>
    </>
  );
};
