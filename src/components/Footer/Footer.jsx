import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} | All Rights Reserved
      </div>
      <div className="footer-author">
        Created by Arkapravo Ghosh
      </div>
    </footer>
  );
};
