import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="disable-select">
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} | All Rights Reserved
      </div>
      <div className="footer-author">
        Created by Arkapravo Ghosh
      </div>
      <div className="footer-github">
        <Link to="https://github.com/Arkapravo-Ghosh/Ark-Portfolio" target={"_blank"} rel={"noreferrer noopener"} aria-label={"Source Code"}>
          <FaGithub className="gh-icon" />
        </Link>
      </div>
    </footer>
  );
};
