import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Side from "../../assets/side-comp.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const typestrings = [
  'DevSecOps Engineer',
  'I love to code',
];

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-Main">
        <div className="Home-Header">
          <h1>Hi, I'm Arkapravo Ghosh</h1>
        </div>
        <div className="Home-Typewriter disable-select">
          <Typewriter
            options={{
              strings: typestrings,
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
            }}
          />
        </div>
        <div className="Home-Buttons disable-select">
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <button className="Home-Button"><p>About Me</p></button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="Home-Button"><p>Contact</p></button>
          </Link>
        </div>
      </div>
      <div className="Home-Social disable-select">
        <div className="Social-Links">
          <ul>
            {"https://twitter.com/ArkapravoGhosh1" && (
              <li className="social-icon">
                <Link to="https://twitter.com/ArkapravoGhosh1" target={"_blank"} rel={"noreferrer noopener"} aria-label={"Twitter"}>
                  <FaTwitter className="icon" />
                </Link>
              </li>
            )}
            {"https://github.com/Arkapravo-Ghosh" && (
              <li className="social-icon">
                <Link to="https://github.com/Arkapravo-Ghosh" target={"_blank"} rel={"noreferrer noopener"} aria-label={"GitHub"}>
                  <FaGithub className="icon" />
                </Link>
              </li>
            )}
            {"https://www.linkedin.com/in/Arkapravo-Ghosh" && (
              <li className="social-icon">
                <Link to="https://www.linkedin.com/in/Arkapravo-Ghosh" target={"_blank"} rel={"noreferrer noopener"} aria-label={"LinkedIn"}>
                  <FaLinkedin className="icon" />
                </Link>
              </li>
            )}
          </ul>
          <p>Follow Me</p>
        </div>
      </div>
      <div className="Home-Side">
        <img src={Side} alt="Side Image" />
      </div>
      <div className="Home-Bottom">
        <img src={Side} alt="Bottom Image" />
      </div>
    </div>
  );
};
